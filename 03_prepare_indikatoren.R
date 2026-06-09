# =============================================================================
# Erstellung Indikatoren
# =============================================================================
#
# Dieses Skript bezieht die Rohdaten (data.tg.ch und BFS), berechnet die
# einzelnen Indikatoren und speichert jeden Indikator als eigenständigen
# Datensatz ab. Die Zuordnung Datensatz <-> Indikator (inkl. Quellen) erfolgt
# über eine Mapping-Tabelle (siehe `nested_data/mapping.csv`).
#
# Aufbau:
#   1. Setup        – Pakete, Funktionen, Hilfsdaten
#   2. Datenbezug   – Themenatlas (data.tg.ch)
#   3. Indikatoren  – je Themenbereich ein Abschnitt mit `register_indicator()`
#   4. Speichern    – flache Datensätze + Mapping + README
#
# Neue Indikatoren werden durch einen zusätzlichen `register_indicator()`-
# Aufruf ergänzt, nicht mehr benötigte durch Entfernen des Aufrufs.
# Die eigentliche Rechenlogik der Hilfsfunktionen liegt in `R/functions/`.

# 1. Setup --------------------------------------------------------------------

ensure_packages <- function(packages) {
  for (pkg in packages) {
    if (!requireNamespace(pkg, quietly = TRUE)) {
      install.packages(pkg, dependencies = TRUE)
    }
  }
}

ensure_packages(c("dplyr", "httr", "jsonlite", "tidyr", "BFS", "stringr",
                  "purrr", "lubridate", "glue", "readr", "tibble"))

library(dplyr)
library(httr)
library(jsonlite)
library(tidyr)
library(BFS)
library(stringr)
library(purrr)
library(lubridate)
library(tibble)

# Funktionen aus R/functions/ laden
for (f in list.files("R/functions", pattern = "\\.R$", full.names = TRUE)) {
  source(f)
}

reset_registry()

## Hilfsdaten -----------------------------------------------------------------

join_vars <- c("jahr", "bfs_nr_gemeinde", "name_gemeinde",
               "bfs_nr_bezirk", "name_bezirk_long", "name_bezirk")

filter_fields <- readRDS("data/filter_fields.rds")
bezirk_data   <- readRDS("data/bezirk_data.rds")
parteien      <- readRDS("data/parteien.rds")

raum <- readRDS("data/raum_df.rds") %>% distinct(name, unified_raum)
zeit <- readRDS("data/zeit_df.rds") %>% distinct(name, unified_zeit)

catalog <- get_ogd_catalog()

# 2. Datenbezug Themenatlas (data.tg.ch) --------------------------------------
print("# Datenbezug von data.tg.ch ---------------------------------------------")

ids <- c("sk-stat-4", "sk-stat-52", "sk-stat-62", "sk-stat-69", "sk-stat-70",
         "sk-stat-57", "sk-stat-59", "sk-stat-56", "sk-stat-54", "sk-stat-55",
         "sk-stat-80", "sk-stat-98", "sk-stat-97", "sk-stat-93", "sk-stat-92",
         "sk-stat-90", "sk-stat-9", "sk-stat-11", "sk-stat-123", "sk-stat-120",
         "sk-stat-50", "sk-stat-1")

themenatlas      <- build_themenatlas(ids, raum, zeit, filter_fields, join_vars)
all_data         <- themenatlas$all_data
themenatlas_long <- themenatlas$long

# =============================================================================
# 3. Indikatoren
# =============================================================================

# -----------------------------------------------------------------------------
# Bevölkerung und Soziales
# -----------------------------------------------------------------------------
print("## Bevölkerung und Soziales ---------------------------------------------")

bev_alter_id <- lookup_dataset_id(
  "Ständige Wohnbevölkerung Kanton Thurgau ab 2015 nach Gemeinden und Einzelaltersjahren",
  catalog)
bev_ausl_id  <- lookup_dataset_id(
  "Ständige Wohnbevölkerung Kanton Thurgau ab 2015 nach Gemeinden, Geschlecht und Staatsangehörigkeit",
  catalog)

### Zusatzdaten: Bevölkerung nach Altersklasse Geschlecht ---------------------
print("### Zusatzdaten: Bevölkerung nach Altersklasse und Geschlecht -----------")

gemeinde_summary <- get_data_from_ogd("sk-stat-58") %>%
  select(bfs_nr_gemeinde, jahr, geschlecht_bezeichnung,
         alter5klassen_bezeichnung, anzahl_personen, alter5klassen_code) %>%
  rename(ageclass      = "alter5klassen_bezeichnung",
         sex           = "geschlecht_bezeichnung",
         value         = "anzahl_personen",
         ageclass_code = "alter5klassen_code") %>%
  mutate(value = as.numeric(value))

bezirk_summary <- gemeinde_summary %>%
  left_join(bezirk_data, by = "bfs_nr_gemeinde") %>%
  group_by(bfs_nr_bezirk, name_bezirk, jahr, sex, ageclass, ageclass_code) %>%
  summarise(value = sum(value, na.rm = TRUE), .groups = "drop") %>%
  rename(bfs_nr_gemeinde = "bfs_nr_bezirk") %>%
  select(-name_bezirk)

kanton_summary <- bezirk_summary %>%
  group_by(jahr, sex, ageclass, ageclass_code) %>%
  summarise(value = sum(value)) %>%
  mutate(bfs_nr_gemeinde = "20")

register_indicator(
  gemeinde_summary %>%
    bind_rows(bezirk_summary) %>%
    bind_rows(kanton_summary),
  "Bevölkerung und Soziales", "Bevölkerung nach Altersklasse Geschlecht",
  geo_unit = "zusatzdaten", source_ids = "sk-stat-58"
)

## Bevölkerungsstand ----------------------------------------------------------
print("## Bevölkerungsstand ----------------------------------------------------")

# Bevölkerung nach Einzelaltersjahren (Basis für Durchschnittsalter etc.)
bev_alter <- themenatlas_long[[bev_alter_id]] %>%
  mutate(value = as.numeric(value),
         alter_code = as.numeric(alter_code)) %>%
  mutate(ageclass = case_when(
    alter_code < 20                    ~ "unter 20 Jahre",
    alter_code >= 20 & alter_code <= 64 ~ "20-64-Jährige",
    alter_code > 64                    ~ "über 64 Jahre",
    TRUE ~ NA_character_
  )) %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value / total)

bev_ageclass <- bev_alter %>%
  group_by(bfs_nr_gemeinde, name_gemeinde, jahr, ageclass) %>%
  summarise(value = sum(value)) %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value / total * 100)

### Durchschnittsalter der Bevölkerung
register_indicator(
  bev_alter %>%
    mutate(age_summe = value * alter_code) %>%
    group_by(bfs_nr_gemeinde, name_gemeinde, jahr) %>%
    summarise(value = sum(age_summe) / sum(value)) %>%
    ungroup() %>%
    select(-name_gemeinde),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Durchschnittsalter der Bevölkerung", source_ids = "sk-stat-57"
)

### Durchschnittsalter der Rentnerinnen und Rentner
register_indicator(
  bev_alter %>%
    filter(alter_code >= 65) %>%
    mutate(age_summe = value * alter_code) %>%
    group_by(bfs_nr_gemeinde, name_gemeinde, jahr) %>%
    summarise(value = sum(age_summe) / sum(value)) %>%
    ungroup() %>%
    select(-name_gemeinde),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Durchschnittsalter der Rentnerinnen und Rentner", source_ids = "sk-stat-57"
)

### Bevölkerungsverteilung nach Geschlecht
register_indicator(
  themenatlas_long[[bev_ausl_id]] %>%
    group_by(bfs_nr_gemeinde, jahr, geschlecht_bezeichnung) %>%
    summarise(value = sum(as.numeric(value))) %>%
    ungroup() %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    rename(filter1 = "geschlecht_bezeichnung"),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Bevölkerungsverteilung nach Geschlecht", source_ids = "sk-stat-59"
)

### Bevölkerungsverteilung nach Altersklasse
register_indicator(
  bev_ageclass %>%
    select(bfs_nr_gemeinde, jahr, ageclass, value, share) %>%
    rename(filter1 = "ageclass") %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Bevölkerungsverteilung nach Altersklasse", source_ids = "sk-stat-57"
)

### Bevölkerungsverteilung nach Konfession
bev_konf <- themenatlas_long[["sk-stat-62"]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value / total * 100)

register_indicator(
  bev_konf %>%
    select(bfs_nr_gemeinde, jahr, konfession_bezeichnung, value, share) %>%
    rename(filter1 = "konfession_bezeichnung") %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Bevölkerungsverteilung nach Konfession", source_ids = "sk-stat-62"
)

### Bevölkerungsverteilung nach Nationalität
bev_ausl <- themenatlas_long[[bev_ausl_id]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share_sex = value / total) %>%
  group_by(bfs_nr_gemeinde, jahr, nationalitaet_bezeichnung) %>%
  mutate(share = sum(value) / total * 100,
         value = sum(value)) %>%
  ungroup() %>%
  distinct(bfs_nr_gemeinde, name_gemeinde, jahr,
           nationalitaet_bezeichnung, share, value)

register_indicator(
  bev_ausl %>%
    select(bfs_nr_gemeinde, jahr, nationalitaet_bezeichnung, value, share) %>%
    rename(filter1 = "nationalitaet_bezeichnung") %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Bevölkerungsverteilung nach Nationalität", source_ids = "sk-stat-59"
)

### Gesamtbevölkerung
gesamtbevoelkerung <- bev_ausl %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(value = sum(as.numeric(value))) %>%
  ungroup() %>%
  group_by(jahr) %>%
  mutate(share = value / sum(value) * 100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

register_indicator(
  gesamtbevoelkerung,
  "Bevölkerung und Soziales", "Bevölkerungsstand",
  "Gesamtbevölkerung", source_ids = "sk-stat-59"
)

## Bevölkerungsentwicklung ----------------------------------------------------
print("## Bevölkerungsentwicklung ----------------------------------------------")

bevent_id <- lookup_dataset_id("Ständige Wohnbevölkerung der Thurgauer Gemeinden", catalog)

bevent_join <- themenatlas_long[[bevent_id]] %>%
  select(bfs_nr_gemeinde, jahr, value) %>%
  mutate(jahr = as.numeric(jahr), value = as.numeric(value))

register_indicator(
  themenatlas_long[[bevent_id]] %>%
    mutate(jahr = as.numeric(jahr), value = as.numeric(value)) %>%
    mutate(fuenf_jahr = ifelse((jahr - 5) >= min(jahr), jahr - 5, NA),
           ein_jahr   = ifelse((jahr - 1) >= min(jahr), jahr - 1, NA)) %>%
    left_join(bevent_join %>% rename(value_fuenf = "value"),
              by = c("bfs_nr_gemeinde", "fuenf_jahr" = "jahr")) %>%
    left_join(bevent_join %>% rename(value_ein = "value"),
              by = c("bfs_nr_gemeinde", "ein_jahr" = "jahr")) %>%
    mutate(change_fuenf = (value - value_fuenf) / value_fuenf * 100,
           change_ein   = (value - value_ein) / value_ein * 100) %>%
    select(bfs_nr_gemeinde, name_gemeinde, jahr, change_fuenf, change_ein) %>%
    pivot_longer(cols = c(change_fuenf, change_ein)) %>%
    mutate(name = case_when(
      name == "change_fuenf" ~ "im Vergleich zu vor 5 Jahren",
      TRUE                   ~ "im Vorjahresvergleich"
    )) %>%
    rename(filter1 = "name") %>%
    select(-name_gemeinde),
  "Bevölkerung und Soziales", "Bevölkerungsentwicklung",
  "Bevölkerungsentwicklung (Vorjahr/5 Jahre)", source_ids = "sk-stat-56"
)

## Bevölkerungsbewegung -------------------------------------------------------
print("## Bevölkerungsbewegung -------------------------------------------------")

### Lebendgeburten
lebendgeburten <- bfs_get_data(number_bfs = "px-x-0102020204_102", language = "de",
    query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde, Jahr, Lebendgeburten) %>%
  rename(value = "Lebendgeburten", jahr = "Jahr") %>%
  filter(jahr >= 2009) %>%
  summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

register_indicator(lebendgeburten,
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Lebendgeburten",
  source_ids = "px-x-0102020204_102")

### Todesfälle
todesfaelle <- bfs_get_data(number_bfs = "px-x-0102020206_102", language = "de",
    query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde,
                 `Staatsangehörigkeit (Kategorie)` = c("-99999"))) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde, Jahr, Todesfälle) %>%
  rename(value = "Todesfälle", jahr = "Jahr") %>%
  filter(jahr >= 2009) %>%
  summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

register_indicator(todesfaelle,
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Todesfälle",
  source_ids = "px-x-0102020206_102")

### Geburtensaldo
register_indicator(
  todesfaelle %>%
    left_join(lebendgeburten, c("jahr", "bfs_nr_gemeinde")) %>%
    mutate(value = value.y - value.x) %>%
    select(bfs_nr_gemeinde, jahr, value),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Geburtensaldo",
  source_ids = c("px-x-0102020206_102", "px-x-0102020204_102"))

### Heiraten
register_indicator(
  bfs_get_data(number_bfs = "px-x-0102020202_102", language = "de",
      query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
    mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
    select(bfs_nr_gemeinde, Jahr, Heiraten) %>%
    rename(value = "Heiraten", jahr = "Jahr") %>%
    filter(jahr >= 2009) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Heiraten",
  source_ids = "px-x-0102020202_102")

### Scheidungen
register_indicator(
  bfs_get_data(number_bfs = "px-x-0102020203_103", language = "de",
      query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
    mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
    select(bfs_nr_gemeinde, Jahr, Scheidungen) %>%
    rename(value = "Scheidungen", jahr = "Jahr") %>%
    filter(jahr >= 2009) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Scheidungen",
  source_ids = "px-x-0102020203_103")

### Wanderung (Saldo / Zuzüge / Wegzüge)
wanderung_metadata  <- bfs_get_metadata("px-x-0103010200_121", language = "de")
wanderungen_lookup  <- tibble(value = wanderung_metadata$values[[2]],
                              text  = wanderung_metadata$valueTexts[[2]]) %>%
  filter(str_extract(text, "\\d\\d\\d\\d") %in% bezirk_data$bfs_nr_gemeinde)

wanderung_data_full <- bfs_get_data(number_bfs = "px-x-0103010200_121", language = "de",
    query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = wanderungen_lookup$value)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
  mutate(mig_typ = case_when(
    Migrationstyp %in% c("Einwanderung inkl. Änderung des Bevölkerungstyps",
                         "Interkantonaler Zuzug", "Intrakantonaler Zuzug") ~ "Zuzug",
    TRUE ~ "Wegzug"
  )) %>%
  rename(value = "Wanderung der ständigen Wohnbevölkerung") %>%
  mutate(type = case_when(
    str_detect(Migrationstyp, "Interkantonal") ~ "mit anderen Kantonen",
    str_detect(Migrationstyp, "Intrakantonal") ~ "mit anderen Gemeinden",
    Migrationstyp %in% c("Einwanderung inkl. Änderung des Bevölkerungstyps",
                         "Auswanderung") ~ "mit dem Ausland"
  ))

zuzug_data <- wanderung_data_full %>%
  filter(mig_typ == "Zuzug") %>%
  group_by(Jahr, bfs_nr_gemeinde, type) %>%
  summarise(zuzuege = sum(value)) %>%
  ungroup()

wegzug_data <- wanderung_data_full %>%
  filter(mig_typ == "Wegzug") %>%
  group_by(Jahr, bfs_nr_gemeinde, type) %>%
  summarise(wegzuege = sum(value)) %>%
  ungroup()

wanderungssaldo_data <- zuzug_data %>%
  left_join(wegzug_data, c("Jahr", "bfs_nr_gemeinde", "type")) %>%
  mutate(saldo = zuzuege - wegzuege)

register_indicator(
  wanderungssaldo_data %>%
    rename(value = "saldo", filter1 = "type", jahr = "Jahr") %>%
    select(bfs_nr_gemeinde, jahr, filter1, value) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Wanderungssaldo",
  source_ids = "px-x-0103010200_121")

register_indicator(
  wanderungssaldo_data %>%
    rename(value = "zuzuege", filter1 = "type", jahr = "Jahr") %>%
    mutate(filter1 = str_replace(filter1, "mit ", "aus ")) %>%
    select(bfs_nr_gemeinde, jahr, filter1, value) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Zuzüge",
  source_ids = "px-x-0103010200_121")

register_indicator(
  wanderungssaldo_data %>%
    rename(value = "wegzuege", filter1 = "type", jahr = "Jahr") %>%
    mutate(filter1 = case_when(
      filter1 == "mit anderen Gemeinden" ~ "in andere Gemeinden",
      filter1 == "mit anderen Kantonen"  ~ "in andere Kantone",
      filter1 == "mit dem Ausland"       ~ "ins Ausland"
    )) %>%
    select(bfs_nr_gemeinde, jahr, filter1, value) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Bevölkerungsbewegung", "Wegzüge",
  source_ids = "px-x-0103010200_121")

## Haushalte ------------------------------------------------------------------
print("## Haushalte ------------------------------------------------------------")

hh_metadata <- BFS::bfs_get_sse_metadata("DF_STATPOP_PHH") %>%
  select(code, value, valueText)

hh_geo <- hh_metadata %>% filter(code == "GEO_UNIT") %>%
  select(-code) %>% rename(bfs_nr_gemeinde = "value")
hh_size <- hh_metadata %>% filter(code == "HH_SIZE") %>%
  select(-code) %>% rename(filter1 = "value")

haushalte <- BFS::bfs_get_sse_data("DF_STATPOP_PHH", language = "de",
    query = list(GEO_UNIT = bezirk_data$bfs_nr_gemeinde,
                 HH_SIZE  = c("1", "2", "3", "4", "5", "60"))) %>%
  left_join(hh_geo,  by = c("GEO_UNIT" = "valueText")) %>%
  left_join(hh_size, by = c("HH_SIZE"  = "valueText")) %>%
  group_by(TIME_PERIOD, bfs_nr_gemeinde) %>%
  mutate(share = value / sum(value) * 100) %>%
  ungroup() %>%
  rename(jahr = "TIME_PERIOD") %>%
  select(jahr, bfs_nr_gemeinde, filter1, value, share)

register_indicator(
  haushalte %>% summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Haushalte", "Haushalte nach Haushaltsgrösse",
  source_ids = "px-x-0102020000_402")

register_indicator(
  haushalte %>%
    group_by(jahr, bfs_nr_gemeinde) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Haushalte", "Haushalte insgesamt",
  source_ids = "px-x-0102020000_402")

## Sozialhilfe ----------------------------------------------------------------
print("## Sozialhilfe ----------------------------------------------------------")

soz_brutto <- themenatlas_long[["sk-stat-54"]]
soz_netto  <- themenatlas_long[["sk-stat-55"]]

register_indicator(
  soz_brutto %>%
    filter(variable == "brutto_sozialhilfe_je_einwohner") %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    mutate(value = as.numeric(value)),
  "Bevölkerung und Soziales", "Sozialhilfe",
  "Brutto Sozialhilfeausgaben je Einwohner", source_ids = "sk-stat-54")

register_indicator(
  soz_brutto %>%
    filter(variable == "ausgaben_brutto") %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    mutate(value = as.numeric(value)) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Sozialhilfe",
  "Brutto Sozialhilfeausgaben total", source_ids = "sk-stat-54")

register_indicator(
  soz_netto %>%
    filter(variable == "netto_sozialhilfe_je_einwohner") %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    mutate(value = as.numeric(value)),
  "Bevölkerung und Soziales", "Sozialhilfe",
  "Netto Sozialhilfeausgaben je Einwohner", source_ids = "sk-stat-55")

register_indicator(
  soz_netto %>%
    filter(variable == "ausgaben_netto") %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    mutate(value = as.numeric(value)) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bevölkerung und Soziales", "Sozialhilfe",
  "Netto Sozialhilfeausgaben total", source_ids = "sk-stat-55")

register_indicator(
  themenatlas_long[["sk-stat-80"]] %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    mutate(value = as.numeric(value)),
  "Bevölkerung und Soziales", "Sozialhilfe", "Sozialhilfequote",
  source_ids = "sk-stat-80")

# -----------------------------------------------------------------------------
# Wirtschaft und Arbeit
# -----------------------------------------------------------------------------
print("## Wirtschaft und Arbeit ------------------------------------------------")

besch_id <- lookup_dataset_id(
  "Beschäftigte nach Sektoren und Politischen Gemeinden Kanton Thurgau", catalog)
arbst_id <- lookup_dataset_id(
  "Arbeitsstätten nach Sektoren und Politischen Gemeinden Kanton Thurgau", catalog)

## Beschäftigte (liefert "Beschäftigte total" für die Grenzgänger-Quote zurück)
beschaeftigte_total <- register_sektor_indicators(
  prepare_sektor_entwicklung(themenatlas_long[[besch_id]]),
  label = "Beschäftigte", source_id = "sk-stat-98", bezirk_data = bezirk_data)

## Arbeitsstätten
register_sektor_indicators(
  prepare_sektor_entwicklung(themenatlas_long[[arbst_id]]),
  label = "Arbeitsstätten", source_id = "sk-stat-97", bezirk_data = bezirk_data)

## Grenzgänger/innen ----------------------------------------------------------
print("## Grenzgänger/innen ----------------------------------------------------")

grenzgaenger_geo <- bfs_get_sse_metadata("DF_GGS_2") %>%
  select(code, value, valueText) %>%
  filter(code == "GDE_WORK") %>%
  select(-code) %>%
  rename(bfs_nr_gemeinde = "value")

grenzgaenger_data <- bfs_get_sse_data(number_bfs = "DF_GGS_2", language = "de",
    query = list(GDE_WORK = bezirk_data$bfs_nr_gemeinde, SEX = c("_T")),
    variable_value_type = "code") %>%
  mutate(jahr = str_extract(TIME_PERIOD, "^\\d\\d\\d\\d")) %>%
  filter(str_detect(TIME_PERIOD, "Q4")) %>%
  select(jahr, bfs_nr_gemeinde = GDE_WORK, value) %>%
  mutate(value = round(value, 0), jahr = as.numeric(jahr))

register_indicator(
  grenzgaenger_data %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Wirtschaft und Arbeit", "Grenzgänger/innen", "Grenzgänger/innen total",
  source_ids = "px-x-0302010000_101")

register_indicator(
  grenzgaenger_data %>%
    left_join(beschaeftigte_total %>% rename(total = "value"),
              by = c("bfs_nr_gemeinde", "jahr")) %>%
    filter(!is.na(total)) %>%
    mutate(value = value / total * 100) %>%
    select(jahr, bfs_nr_gemeinde, value),
  "Wirtschaft und Arbeit", "Grenzgänger/innen",
  "Anteil Grenzgänger/innen am Total der Beschäftigten",
  source_ids = c("sk-stat-98", "px-x-0302010000_101"))



### Pendler -----------------------------------------------------------------
print("## Pendler ----------------------------------------------------")

# Verwendung
pendler <- get_pendler_data()



register_indicator(pendler$anzahl_binnenpendler,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Anzahl Binnenpendler",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))


register_indicator(pendler$anzahl_wegpendler,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Anzahl Wegpendler",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))



register_indicator(pendler$anzahl_zupendler,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Anzahl Zupendler",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))



register_indicator(pendler$zupendlerquote,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Zupendlerquote",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))

register_indicator(pendler$wegpendlerquote,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Wegpendlerquote",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))


register_indicator(pendler$pendlersaldoquote,
                   "Wirtschaft und Arbeit", "Pendler",
                   "Pendlersaldoquote",
                   source_ids = c("https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master"))




# -----------------------------------------------------------------------------
# Bauen und Wohnen
# -----------------------------------------------------------------------------
print("## Bauen und Wohnen -----------------------------------------------------")

## Leer stehende Wohnungen ----------------------------------------------------
leerstand_id <- lookup_dataset_id("Leerstehende Wohnungen nach Politischer Gemeinde", catalog)
leerstand    <- themenatlas_long[[leerstand_id]]

register_indicator(
  leerstand %>%
    filter(variable == "leerwhg_anzahl") %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Leer stehende Wohnungen", "Leer stehende Wohnungen total",
  source_ids = "sk-stat-93")

register_indicator(
  leerstand %>%
    filter(variable == "leerwhg_ziffer") %>%
    select(bfs_nr_gemeinde, jahr, value),
  "Bauen und Wohnen", "Leer stehende Wohnungen", "Leerwohnungsziffer",
  source_ids = "sk-stat-93")

## Bauinvestitionen -----------------------------------------------------------
print("## Bauinvestitionen -----------------------------------------------------")

bau_meta     <- bfs_get_metadata("px-x-0904010000_203", language = "de")
bau_max_jahr <- bau_meta$valueTexts[[5]] %>% as.numeric() %>% max()

bau_data <- bfs_get_data(number_bfs = "px-x-0904010000_203", language = "de",
    query = list(`Grossregion (<<) / Kanton (-) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde,
                 Jahr = as.character(2013:bau_max_jahr),
                 `Kategorie der Bauwerke` = c("100", "200", "300", "400", "500",
                                              "600", "700", "800", "900", "1000", "1100"),
                 `Art der Auftraggeber` = c("1", "2"),
                 Beobachtungseinheit = c("kost_j"))) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
  rename(auftraggeber = "Art der Auftraggeber",
         kategorie    = "Kategorie der Bauwerke",
         value        = "Bauinvestitionen und Arbeitsvorrat",
         jahr         = "Jahr") %>%
  select(jahr, bfs_nr_gemeinde, auftraggeber, kategorie, value)

register_indicator(
  bau_data %>%
    group_by(bfs_nr_gemeinde, jahr, kategorie) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    rename(filter1 = "kategorie") %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Bauinvestitionen", "Bauinvestitionen nach Kategorie",
  source_ids = "px-x-0904010000_203")

register_indicator(
  bau_data %>%
    group_by(bfs_nr_gemeinde, jahr, auftraggeber) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    rename(filter1 = "auftraggeber") %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Bauinvestitionen", "Bauinvestitionen nach Art der Auftraggeber",
  source_ids = "px-x-0904010000_203")

register_indicator(
  bau_data %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    summarise(value = sum(value)),
  "Bauen und Wohnen", "Bauinvestitionen", "Bauinvestitionen total",
  source_ids = "px-x-0904010000_203")

bau_join <- bau_data %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  mutate(jahr = as.numeric(jahr), value = as.numeric(value)) %>%
  summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

register_indicator(
  bau_data %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    mutate(jahr = as.numeric(jahr), value = as.numeric(value)) %>%
    mutate(ein_jahr = ifelse((jahr - 1) >= min(jahr), jahr - 1, NA)) %>%
    left_join(bau_join %>% rename(value_ein = "value"),
              by = c("bfs_nr_gemeinde", "ein_jahr" = "jahr")) %>%
    filter(!is.na(ein_jahr)) %>%
    mutate(share = (value - value_ein) / value_ein * 100,
           value = value - value_ein) %>%
    select(jahr, bfs_nr_gemeinde, value, share),
  "Bauen und Wohnen", "Bauinvestitionen", "Bauinvestitionen im Vorjahresvergleich",
  source_ids = "px-x-0904010000_203")

## Gebäude und Wohnungen ------------------------------------------------------
print("## Gebäude und Wohnungen ------------------------------------------------")

geb_meta_red <- bfs_get_sse_metadata("DF_GWS_REG1", language = "de") %>%
  filter(code == "GEMEINDENAME") %>%
  select(GEMEINDENAME = valueText, bfs_nr_gemeinde = value)

geb_data <- bfs_get_sse_data(number_bfs = "DF_GWS_REG1", language = "de",
    query = list(GEMEINDENAME = bezirk_data$bfs_nr_gemeinde)) %>%
  filter(GBAUPS != "Total") %>%
  filter(GKATS != "Total") %>%
  left_join(geb_meta_red, "GEMEINDENAME") %>%
  select(jahr = TIME_PERIOD, bfs_nr_gemeinde, kategorie = GKATS,
         periode = GBAUPS, value)

register_indicator(
  geb_data %>%
    group_by(jahr, bfs_nr_gemeinde) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohngebäude total",
  source_ids = "px-x-0902010000_103")

register_indicator(
  geb_data %>%
    group_by(jahr, bfs_nr_gemeinde, periode) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    rename(filter1 = "periode") %>%
    group_by(jahr, bfs_nr_gemeinde) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohngebäude nach Bauperiode",
  source_ids = "px-x-0902010000_103")

register_indicator(
  geb_data %>%
    group_by(jahr, bfs_nr_gemeinde, kategorie) %>%
    summarise(value = sum(value)) %>%
    ungroup() %>%
    rename(filter1 = "kategorie") %>%
    group_by(jahr, bfs_nr_gemeinde) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohngebäude nach Kategorie des Gebäudes",
  source_ids = "px-x-0902010000_103")

### Neu erstellte Wohngebäude
neu_gebaeude_meta <- bfs_get_metadata("px-x-0904030000_106", "de")

register_indicator(
  bfs_get_data(number_bfs = "px-x-0904030000_106", language = "de",
      query = list(`Grossregion (<<) / Kanton (-) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde,
                   `Gebäudetyp` = neu_gebaeude_meta$values[which(neu_gebaeude_meta$code == "Gebäudetyp")][[1]])) %>%
    mutate(bfs_nr_gemeinde = str_extract(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`, "\\d\\d\\d\\d")) %>%
    select(-`Grossregion (<<) / Kanton (-) / Gemeinde (......)`) %>%
    rename(value = "Neu erstellte Gebäude mit Wohnungen", typ = "Gebäudetyp", jahr = "Jahr") %>%
    filter(str_detect(typ, "Total")) %>%
    select(-typ) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Neu erstellte Wohngebäude",
  source_ids = "px-x-0904030000_106")

### Wohnungen nach Zimmerzahl / total
wohnungen_zimmer <- prepare_zimmerwohnungen(all_data[["sk-stat-90"]], bezirk_data)

register_indicator(wohnungen_zimmer,
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohnungen nach Zimmerzahl",
  source_ids = "sk-stat-90")

wohnungen_total <- wohnungen_zimmer %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup()

register_indicator(wohnungen_total,
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohnungen total",
  source_ids = "sk-stat-90")

### Neu erstellte Wohnungen nach Zimmerzahl / total
neu_wohnungen_zimmer <- prepare_zimmerwohnungen(all_data[["sk-stat-92"]], bezirk_data)

register_indicator(neu_wohnungen_zimmer,
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Neu erstellte Wohnungen nach Zimmerzahl",
  source_ids = "sk-stat-92")

neu_wohnungen_total <- neu_wohnungen_zimmer %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

register_indicator(neu_wohnungen_total,
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Neu erstellte Wohnungen total",
  source_ids = "sk-stat-92")

### Anteil neu erstellter Wohnungen am Wohnungsbestand des Vorjahres
register_indicator(
  neu_wohnungen_total %>%
    mutate(ein_jahr = as.numeric(jahr) - 1) %>%
    left_join(wohnungen_total %>%
                mutate(jahr = as.numeric(jahr)) %>%
                rename(bestand = "value"),
              by = c("ein_jahr" = "jahr", "bfs_nr_gemeinde")) %>%
    mutate(share = value / bestand * 100) %>%
    select(bfs_nr_gemeinde, jahr, share) %>%
    rename(value = "share"),
  "Bauen und Wohnen", "Gebäude und Wohnungen",
  "Anteil neu erstellter Wohnungen am Wohnungsbestand des Vorjahres",
  source_ids = c("sk-stat-92", "sk-stat-90"))

### Wohngebäude nach Energiequelle der Heizung
energie_geb_meta_red <- bfs_get_sse_metadata("DF_GWS_REG3", "de") %>%
  filter(code == "GEMEINDENAME") %>%
  select(GEMEINDENAME = valueText, bfs_nr_gemeinde = value)

register_indicator(
  bfs_get_sse_data(number = "DF_GWS_REG3", language = "de",
      query = list(GEMEINDENAME = bezirk_data$bfs_nr_gemeinde)) %>%
    filter(GBAUPS == "Total" & GKATS == "Total") %>%
    left_join(energie_geb_meta_red, "GEMEINDENAME") %>%
    rename(jahr = "TIME_PERIOD", filter1 = "GWAERZH") %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    select(bfs_nr_gemeinde, jahr, filter1, value, share) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Bauen und Wohnen", "Gebäude und Wohnungen", "Wohngebäude nach Energiequelle der Heizung",
  source_ids = "px-x-0902010000_104")

# -----------------------------------------------------------------------------
# Raum, Verkehr und Umwelt
# -----------------------------------------------------------------------------
print("## Raum, Verkehr und Umwelt ------------------------------------------------------")

flaeche_meta     <- bfs_get_sse_metadata("DF_AREA_NOAS", language = "de")
flaeche_meta_red <- flaeche_meta %>%
  filter(code == "REGION") %>%
  select(REGION = valueText, bfs_nr_gemeinde = value)

# Periodencodes auf ein repräsentatives Jahr abbilden
recode_flaeche_jahr <- function(df) {
  df %>%
    mutate(jahr = case_when(
      PERIOD == "1979-1985" ~ "1984",
      PERIOD == "1992-1997" ~ "1996",
      PERIOD == "2013-2018" ~ "2017",
      PERIOD == "2004-2009" ~ "2008",
      PERIOD == "2020-2025" ~ "2024",
      TRUE ~ PERIOD
    ))
}

flaeche_data <- bfs_get_sse_data(number_bfs = "DF_AREA_NOAS", language = "de",
    query = list(REGION = bezirk_data$bfs_nr_gemeinde, NOAS = as.character(1:4))) %>%
  left_join(flaeche_meta_red, "REGION") %>%
  recode_flaeche_jahr() %>%
  select(bfs_nr_gemeinde, jahr, filter1 = NOAS, value)

see_flaeche <- bfs_get_sse_data(number_bfs = "DF_AREA_NOAS", language = "de",
    query = list(REGION = bezirk_data$bfs_nr_gemeinde, NOAS = c("413", "414"))) %>%
  left_join(flaeche_meta_red, "REGION") %>%
  recode_flaeche_jahr() %>%
  select(bfs_nr_gemeinde, jahr, filter1 = NOAS, value) %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(see = sum(value)) %>%
  ungroup()

landflaeche <- flaeche_data %>%
  group_by(bfs_nr_gemeinde, jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  left_join(see_flaeche, by = c("jahr", "bfs_nr_gemeinde")) %>%
  mutate(see = replace_na(see, 0)) %>%
  mutate(value = value - see) %>%
  select(-see)

register_indicator(
  flaeche_data %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(share = value / sum(value) * 100) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Raum, Verkehr und Umwelt", "Flächennutzung", "Fläche nach Flächenart",
  source_ids = "px-x-0202020000_102")

register_indicator(
  flaeche_data %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    summarise(value = sum(value)) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Raum, Verkehr und Umwelt", "Flächennutzung", "Fläche total",
  source_ids = "px-x-0202020000_102")

register_indicator(
  landflaeche %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Raum, Verkehr und Umwelt", "Flächennutzung", "Landfläche",
  source_ids = "px-x-0202020000_102")

register_indicator(
  gesamtbevoelkerung %>%
    mutate(match_year = case_when(
      jahr %in% c(2017, 2016, 2015, 2014, 2013, 2012) ~ "2008",
      jahr >= 2018 ~ "2017",
      TRUE ~ "2017"
    )) %>%
    left_join(landflaeche %>% rename(flaeche = "value"),
              by = c("match_year" = "jahr", "bfs_nr_gemeinde")) %>%
    mutate(value = value / flaeche) %>%
    select(-c(share, match_year, flaeche)),
  "Raum, Verkehr und Umwelt", "Flächennutzung", "Bevölkerungsdichte",
  source_ids = c("px-x-0202020000_102", "sk-stat-59"))


fahrzeugbestand <- get_data_from_ogd("djs-stv-14") |>
  filter(fahrzeuggruppe=="Personenwagen") |>
  group_by(bfs_nr_gemeinde,jahr) |>
  summarise(value = sum(anzahl),.groups = "drop")



bev_total_mod <- bev_konf |>
  group_by(bfs_nr_gemeinde,jahr) |>
  summarise(value = sum(value),.groups = "drop") #|>
  # mutate(jahr = as.numeric(jahr)+1) |>
  # mutate(jahr = as.character(jahr))


motorisierungsgrad <- fahrzeugbestand |>
  left_join(bev_total_mod,by = c("bfs_nr_gemeinde","jahr")) |>
  mutate(value = value.x/value.y*100)



register_indicator(
  motorisierungsgrad,
  "Raum, Verkehr und Umwelt", "Personenwagenbestand", "Motorisierungsgrad",
  source_ids = c("djs-stv-14", "sk-stat-59"))

register_indicator(
  fahrzeugbestand,
  "Raum, Verkehr und Umwelt", "Personenwagenbestand", "Personenwagenbestand",
  source_ids = c("djs-stv-14"))
# -----------------------------------------------------------------------------
# Staat und Politik
# -----------------------------------------------------------------------------
print("## Staat und Politik ----------------------------------------------------")

## Grossratswahlen ------------------------------------------------------------
parstrk     <- all_data[["sk-stat-9"]]
start_index <- which(names(parstrk) == "jahr")

gr_parteistaerke <- parstrk %>%
  pivot_longer(cols = all_of((start_index + 1):last_col())) %>%
  left_join(parteien, by = c("name" = "abk")) %>%
  mutate(partei_code = case_when(
    name == "uebrige" ~ "Übrige",
    name == "bdp"     ~ "BDP",
    TRUE              ~ partei_code)) %>%
  mutate(value = as.numeric(value)) %>%
  rename(filter1 = "partei_code") %>%
  select(bfs_nr_gemeinde, jahr, filter1, value)

register_indicator(gr_parteistaerke,
  "Staat und Politik", "Grossratswahlen", "Parteistärken nach Partei",
  source_ids = "sk-stat-9")

register_indicator(
  gr_parteistaerke %>%
    mutate(jahr = as.numeric(jahr)) %>%
    group_by(bfs_nr_gemeinde, filter1) %>%
    arrange(desc(jahr), .by_group = TRUE) %>%
    mutate(lead_value = lead(value)) %>%
    ungroup() %>%
    mutate(lead_value = case_when(
      is.na(lead_value) & !is.na(value) ~ 0,
      TRUE ~ lead_value)) %>%
    mutate(change = value - lead_value) %>%
    select(bfs_nr_gemeinde, jahr, filter1, change) %>%
    rename(value = "change"),
  "Staat und Politik", "Grossratswahlen",
  "Veränderung Parteistärken im Vorjahresvergleich (%-Punkte)",
  source_ids = "sk-stat-9")

register_indicator(
  all_data[["sk-stat-11"]] %>%
    mutate(value = as.numeric(wahlbeteiligung_in_prozent)) %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    tibble(),
  "Staat und Politik", "Grossratswahlen", "Wahlbeteiligung",
  source_ids = "sk-stat-11")

## Nationalratswahlen ---------------------------------------------------------
nr_parteistaerke <- all_data[["sk-stat-123"]] %>%
  mutate(value = as.numeric(parteistaerke_percent)) %>%
  rename(filter1 = "partei") %>%
  select(bfs_nr_gemeinde, jahr, filter1, value)

register_indicator(nr_parteistaerke,
  "Staat und Politik", "Nationalratswahlen", "Parteistärken nach Partei",
  source_ids = "sk-stat-123")

register_indicator(
  nr_parteistaerke %>%
    mutate(jahr = as.numeric(jahr)) %>%
    group_by(bfs_nr_gemeinde, filter1) %>%
    arrange(desc(jahr), .by_group = TRUE) %>%
    mutate(lead_value = lead(value)) %>%
    ungroup() %>%
    mutate(lead_value = case_when(
      is.na(lead_value) & !is.na(value) ~ 0,
      TRUE ~ lead_value)) %>%
    mutate(change = value - lead_value) %>%
    select(bfs_nr_gemeinde, jahr, filter1, change) %>%
    rename(value = "change"),
  "Staat und Politik", "Nationalratswahlen",
  "Veränderung Parteistärken im Vorjahresvergleich (%-Punkte)",
  source_ids = "sk-stat-123")

register_indicator(
  all_data[["sk-stat-120"]] %>%
    mutate(value = as.numeric(wahlbeteiligung_percent)) %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    tibble(),
  "Staat und Politik", "Nationalratswahlen", "Wahlbeteiligung",
  source_ids = "sk-stat-120")

## Abstimmungen ---------------------------------------------------------------
register_abstimmungen(prepare_abstimmungen(all_data[["sk-stat-50"]]),
                      label = "Eidg. Abstimmungen", source_id = "sk-stat-50")
register_abstimmungen(prepare_abstimmungen(all_data[["sk-stat-52"]]),
                      label = "Kantonale Abstimmungen", source_id = "sk-stat-52")

## Steuerkraft und Steuerfüsse ------------------------------------------------
register_indicator(
  all_data[["sk-stat-70"]] %>%
    pivot_longer(cols = c(gesamtsteuerfuss_evang, gesamtsteuerfuss_kath,
                          gesamtsteuerfuss_konfessionslos, gesamtsteuerfuss_jp)) %>%
    mutate(filter1 = case_when(
      name == "gesamtsteuerfuss_evang"          ~ "natürliche Personen evangelisch",
      name == "gesamtsteuerfuss_kath"           ~ "natürliche Personen katholisch",
      name == "gesamtsteuerfuss_konfessionslos" ~ "natürliche Personen konfessionslos",
      name == "gesamtsteuerfuss_jp"             ~ "juristische Personen")) %>%
    mutate(value = as.numeric(value)) %>%
    select(bfs_nr_gemeinde, jahr, filter1, value) %>%
    summarise_bezirk_kanton(type = "mean", bezirk_data = bezirk_data),
  "Staat und Politik", "Steuerkraft und Steuerfüsse", "Gesamtsteuerfuss",
  source_ids = "sk-stat-70")

gemeindesteuerfuss <- all_data[["sk-stat-69"]] %>%
  mutate(value = as.numeric(gemeindesteuerfuss)) %>%
  mutate(jahr = as.numeric(jahr)) %>%
  select(bfs_nr_gemeinde, jahr, value) %>%
  summarise_bezirk_kanton(type = "mean", bezirk_data = bezirk_data)

register_indicator(gemeindesteuerfuss,
  "Staat und Politik", "Steuerkraft und Steuerfüsse", "Gemeindesteuerfuss",
  source_ids = "sk-stat-69")

register_indicator(
  gemeindesteuerfuss %>%
    mutate(zehn_jahre = jahr - 10) %>%
    left_join(gemeindesteuerfuss %>% rename(value_zehn = "value"),
              by = c("zehn_jahre" = "jahr", "bfs_nr_gemeinde")) %>%
    filter(!is.na(value_zehn)) %>%
    mutate(change = value - value_zehn) %>%
    select(bfs_nr_gemeinde, jahr, change) %>%
    rename(value = "change"),
  "Staat und Politik", "Steuerkraft und Steuerfüsse",
  "Veränderung der Gemeindesteuerfüsse im Vergleich zu vor 10 Jahren (%-Punkte)",
  source_ids = "sk-stat-69")

## Finanzausgleich ------------------------------------------------------------
register_indicator(
  all_data[["sk-stat-1"]] %>%
    mutate(value = as.numeric(auszahlung_abschoepfung_in_chf)) %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
  "Staat und Politik", "Finanzausgleich",
  "Gesamtauswirkung Finanzausgleich (positive Werte: Abschöpfung, negative Werte: Auszahlung) (CHF)",
  source_ids = "sk-stat-1")

register_indicator(
  all_data[["sk-stat-1"]] %>%
    mutate(value = as.numeric(auszahlung_abschoepfung_in_chf_pro_einwohner)) %>%
    select(bfs_nr_gemeinde, jahr, value) %>%
    summarise_bezirk_kanton(type = "mean", bezirk_data = bezirk_data),
  "Staat und Politik", "Finanzausgleich",
  "Gesamtauswirkung Finanzausgleich pro Einwohner (positive Werte: Abschöpfung, negative Werte: Auszahlung) (CHF)",
  source_ids = "sk-stat-1")

## Gemeindefinanzkennzahlen ---------------------------------------------------
register_indicator(
  themenatlas_long[["sk-stat-4"]] %>%
    mutate(filter1 = case_when(
      variable == "selbstfinanzierungsgrad_in"   ~ "Selbstfinanzierungsgrad in %",
      variable == "selbstfinanzierungsanteil_in" ~ "Selbstfinanzierungsanteil in %",
      variable == "zinsbelastungsanteil_in"      ~ "Zinsbelastungsanteil in %",
      variable == "kapitaldienstanteil_in"       ~ "Kapitaldienstanteil in %",
      variable == "investitionsanteil_in"        ~ "Investitionsanteil in %",
      variable == "bruttoverschuldungsanteil_in" ~ "Bruttoverschuldungsanteil in %",
      variable == "nettoschuld_nettovermogen_pro_einwohner_in_chf" ~
        "Nettoschuld (-) / Nettovermögen (+) pro Einwohner in Schweizer Franken",
      variable == "nettoverschuldungsquotient_in" ~ "Nettoverschuldungsquotient in %",
      variable == "bilanzuberschussquotient_in"   ~ "Bilanzüberschussquotient in %"
    )) %>%
    select(jahr, bfs_nr_gemeinde, filter1, value) %>%
    mutate(jahr = as.numeric(jahr)) %>%
    summarise_bezirk_kanton(type = "mean", bezirk_data = bezirk_data),
  "Staat und Politik", "Gemeindefinanzkennzahlen", "Gemeindefinanzkennzahlen",
  source_ids = "sk-stat-4")

# -----------------------------------------------------------------------------
# Schulgemeinden (Primar-, Sekundar-, Volksschulgemeinden)
# -----------------------------------------------------------------------------
print("## Schulgemeinden -------------------------------------------------------")

finanzlage_sg <- get_data_from_ogd("dek-av-30")

sg_geo_units <- c(PSG = "primarschulgemeinde",
                  SSG = "sekundarschulgemeinde",
                  VSG = "volksschulgemeinde")

# Definition der Schulgemeinde-Indikatoren: Spalte -> Hierarchie
sg_indicator_defs <- list(
  list("einwohner", "Bevölkerung und Soziales", "Bevölkerungsstand", "Gesamtbevölkerung"),
  list("schueler", "Bevölkerung und Soziales", "Bildung", "Anzahl Schülerinnen und Schüler im Durchschnitt der beiden Stichtage 15.2. und 15.9."),
  list("schuelerproew", "Bevölkerung und Soziales", "Bildung", "Anteil Schüler an der Anzahl Einwohner"),
  list("steuerkraft", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Steuerkraft 100%"),
  list("steuerkraftproew", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Steuerkraft pro Einwohner"),
  list("steuerfuss", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Steuerfuss in %"),
  list("steuerfuss_total", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Gesamtsteuerfuss Schule  in %"),
  list("gemeindesteuer", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Gemeindesteuerfuss in %"),
  list("schulsteuerfussinklgemeindesteuer", "Staat und Politik", "Steuerkraft und Steuerfüsse", "Schulsteuerfuss inkl. Gemeindesteuer in %"),
  list("beitraege_basisjahr", "Staat und Politik", "Beitragsleistungen", "Beitragsleistungen gemäss Basisjahr der Berechnungsparameter in CHF"),
  list("beitraege_basisjahr_steuerkraft", "Staat und Politik", "Beitragsleistungen", "Beitragsleistungen gemäss Basisjahr der Berechnungsparameter im Verhältnis zur Steuerkraft 100%"),
  list("beitraege_rrb742", "Staat und Politik", "Beitragsleistungen", "Beitragsleistungen periodisch abgegrenzt in CHF"),
  list("beitraege_rrb742_steuerkraft", "Staat und Politik", "Beitragsleistungen", "Beitragsleistungen periodisch abgegrenzt im Verhältnis zur Steuerkraft 100%"),
  list("mittelfluss", "Staat und Politik", "Beitragsleistungen", "Beitragsleistungen im Mittelflussjahr gerechnet"),
  list("nettoinvestitionen", "Staat und Politik", "Finanzkennzahlen", "Nettoinvestitionen für das Verwaltungsvermögen im Rechnungsjahr"),
  list("nettoschuld", "Staat und Politik", "Finanzkennzahlen", "Nettoschuld (-) / Nettovermögen (+) per 31.12. in CHF"),
  list("fiskalertrag", "Staat und Politik", "Finanzkennzahlen", "Fiskalertrag in CHF"),
  list("nettoverschuldungsquotient", "Staat und Politik", "Finanzkennzahlen", "Nettoverschuldungsquotient im Rechnungsjahr"),
  list("zinsbelastung", "Staat und Politik", "Finanzkennzahlen", "Zinsbelastung im Rechnungsjahr in CHF"),
  list("laufender_ertrag", "Staat und Politik", "Finanzkennzahlen", "Laufender Ertrag im Rechnungsjahr in CHF"),
  list("zinsbelastungsanteil", "Staat und Politik", "Finanzkennzahlen", "Zinsbelastungsanteil im Rechnungsjahr"),
  list("verzinsliches_fremdkapital", "Staat und Politik", "Bilanz", "Bilanzkontogruppen 201 und 206 per 31.12. in CHF"),
  list("zinsbelastungsrisiko", "Staat und Politik", "Finanzkennzahlen", "Zinsbelastungsrisiko"),
  list("zinsrisiko", "Staat und Politik", "Finanzkennzahlen", "Hypothetischer Prozentsatz für Zinsbelastungsrisiko"),
  list("gewinnverwendung", "Staat und Politik", "Finanzkennzahlen", "Verbuchte Gewinnverwendung im Rechnungsjahr"),
  list("gewinnverwendung_erneuerungsfonds", "Staat und Politik", "Finanzkennzahlen", "Verbuchte Einlagen in den Erneuerungsfonds Baufolgekosten"),
  list("aufwanddeckung", "Staat und Politik", "Finanzkennzahlen", "Aufwanddeckung"),
  list("eigenkapital", "Staat und Politik", "Bilanz", "Eigenkapital Bilanzkontogruppe 29 per 31.12."),
  list("laufender_aufwand", "Staat und Politik", "Finanzkennzahlen", "Laufender Aufwand im Rechnungsjahr"),
  list("bilanzsituation", "Staat und Politik", "Finanzkennzahlen", "Eigenkapital im Verhältnis zur Steuerkraft 100% per 31.12."),
  list("eigenkapitaldeckungsgrad", "Staat und Politik", "Finanzkennzahlen", "Eigenkapitaldeckungsgrad"),
  list("erfolgvorgewinnverwendung", "Staat und Politik", "Finanzkennzahlen", "Erfolgvorgewinnverwendung"),
  list("erfolg", "Staat und Politik", "Finanzkennzahlen", "Erfolg im Rechnungsjahr in CHF"),
  list("bilanzueberschuss", "Staat und Politik", "Finanzkennzahlen", "Bilanzüberschuss Kontogruppe 299"),
  list("vv", "Staat und Politik", "Finanzkennzahlen", "Verwaltungsvermögen per 31.12.")
)

for (sg_type in names(sg_geo_units)) {
  geo_unit <- sg_geo_units[[sg_type]]
  for (def in sg_indicator_defs) {
    register_sg_indicator(sg_type, geo_unit, def[[1]], finanzlage_sg,
                          def[[2]], def[[3]], def[[4]])
  }
}

# =============================================================================
# 4. Speichern: flache Datensätze + Mapping + README
# =============================================================================
# `save_indicators()` hält die Datensatz-IDs stabil: Indikatoren mit
# unveränderter Geo-Einheit und Hierarchie behalten ihre bestehende ID (aus dem
# vorhandenen Mapping), neue Indikatoren erhalten fortlaufende neue IDs. Zudem
# werden die neu bezogenen Daten mit dem bestehenden Datensatz zusammengeführt,
# sodass nicht mehr gelieferte (z.B. ältere) Jahre erhalten bleiben.
print("## Speichern ------------------------------------------------------------")

save_indicators(base_dir = "nested_data", catalog = catalog)
save_indicators(base_dir = "../raw.db/inst/extdata/data/", catalog = catalog)

write_readme(catalog = catalog, path = "README.md")


# Probleme/Offene Fragen ------------------------------------------------------
#
# - Durchschnittliche Haushaltsgrösse: aktuell nicht umgesetzt
# - Arbeitslosigkeit: Datenquelle unklar
# - Pendler: Daten aus Excel von statistik.tg.ch
# - Grenzgänger: Berechnung/Quelle BFS
# - Arbeitsstätten/Beschäftigte: teils %, teils %-Punkte
# - Neu gegründete Unternehmen: BFS-Cube unvollständig (vs. Themenatlas)
# - Leer stehende Wohnungen nach Angebot: nur via Excel von statistik.tg.ch
# - Neu erstellte Wohngebäude: Daten 2022 unvollständig
# - Neu erstellte Wohnungen: 2020/2021 teils Duplikate
# - Fläche: Bodensee-Anteil, Unterschiede in Siedlungsfläche
# - Steuerkraft: Berechnung via statistik.tg.ch
