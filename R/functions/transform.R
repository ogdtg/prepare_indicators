# Fachliche Transformationen -----------------------------------------------
#
# Wiederverwendbare Aufbereitungs- und Registrierungs-Helfer für Indikatoren,
# deren Berechnung mehrfach (und bisher kopiert) im Skript vorkam.

# Themenatlas (data.tg.ch) ------------------------------------------------

#' Themenatlas-Datensätze beziehen, Spaltennamen vereinheitlichen und ins
#' lange Format pivotieren.
#'
#' @return Liste mit `all_data` (breit) und `long` (lang), je benannt nach IDs
build_themenatlas <- function(ids, raum, zeit, filter_fields, join_vars) {

  raw <- lapply(unique(ids), get_data_from_ogd)

  raum_mapping <- setNames(raum$unified_raum, raum$name)
  zeit_mapping <- setNames(zeit$unified_zeit, zeit$name)

  all_data <- lapply(raw, function(df) {
    colnames(df) <- ifelse(colnames(df) %in% names(raum_mapping),
                           raum_mapping[colnames(df)], colnames(df))
    colnames(df) <- ifelse(colnames(df) %in% names(zeit_mapping),
                           zeit_mapping[colnames(df)], colnames(df))
    df
  })

  long <- lapply(all_data, function(x) {
    tryCatch({
      x[c("bfs_nr_bezirk", "name_bezirk_long", "name_bezirk",
          "bezirk_name", "bezirk_nr", "bezirk")] <- NULL
      vars_to_pivot <- intersect(names(x), filter_fields$name)
      raum_zeit_var <- intersect(names(x), join_vars)
      value_vars    <- outersect(names(x), c(vars_to_pivot, raum_zeit_var))

      x %>%
        pivot_longer(cols = all_of(value_vars), names_to = "variable")
    }, error = function(cond) NULL)
  })

  names(all_data) <- ids
  names(long)     <- ids

  list(all_data = all_data, long = long)
}

# Beschäftigte / Arbeitsstätten -------------------------------------------

#' Sektor-Entwicklungstabelle (Beschäftigte oder Arbeitsstätten) berechnen
prepare_sektor_entwicklung <- function(data_long) {

  base <- data_long %>%
    mutate(value = as.numeric(value)) %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(total = sum(value)) %>%
    ungroup() %>%
    mutate(share = value / total * 100) %>%
    filter(jahr >= 2011)

  join <- data_long %>%
    mutate(jahr = as.numeric(jahr), value = as.numeric(value)) %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    mutate(total = sum(value)) %>%
    ungroup() %>%
    mutate(value_tot = value, value = value / total * 100) %>%
    filter(jahr >= 2011) %>%
    select(bfs_nr_gemeinde, jahr, sektor, value, value_tot)

  base %>%
    mutate(jahr = as.numeric(jahr), value = as.numeric(value)) %>%
    mutate(fuenf_jahr = ifelse((jahr - 5) >= min(jahr), jahr - 5, NA),
           ein_jahr   = ifelse((jahr - 1) >= min(jahr), jahr - 1, NA)) %>%
    left_join(join %>%
                rename(value_fuenf = "value", value_tot_fuenf = "value_tot"),
              by = c("bfs_nr_gemeinde", "fuenf_jahr" = "jahr", "sektor")) %>%
    left_join(join %>%
                rename(value_ein = "value", value_tot_ein = "value_tot"),
              by = c("bfs_nr_gemeinde", "ein_jahr" = "jahr", "sektor")) %>%
    mutate(change_fuenf     = (share - value_fuenf),
           change_ein       = (share - value_ein),
           change_tot_fuenf = value - value_tot_fuenf,
           change_tot_ein   = value - value_tot_ein)
}

#' Die sechs Sektor-Indikatoren registrieren (Beschäftigte / Arbeitsstätten)
#'
#' @param ent Ergebnis von `prepare_sektor_entwicklung()`
#' @param label "Beschäftigte" oder "Arbeitsstätten" (= Unterkategorie)
#' @return (unsichtbar) der Datensatz "<label> total" (für Folgeberechnungen)
register_sektor_indicators <- function(ent, label, source_id, bezirk_data) {

  topic <- "Wirtschaft und Arbeit"

  # Daten einmalig auswerten; schlägt der Datenbezug fehl, werden alle sechs
  # Indikatoren als Fehler registriert (bestehende Daten bleiben beim Speichern
  # erhalten), statt das Skript abzubrechen.
  ent <- tryCatch(force(ent), error = function(e) e)
  if (inherits(ent, "error")) {
    indicators <- c(
      sprintf("Veränderung %s total gegenüber vor 5 Jahren", label),
      sprintf("Vorjahresveränderung %s total", label),
      sprintf("Veränderung %s nach Sektor gegenüber vor 5 Jahren (in %% Punkten)", label),
      sprintf("Vorjahresveränderung %s nach Sektor (in %%)", label),
      sprintf("%s total", label),
      sprintf("%s nach Sektor", label)
    )
    for (ind in indicators) {
      register_failed("gemeinde", c(topic, label, ind),
                      source_ids = source_id, message = conditionMessage(ent))
    }
    return(invisible(NULL))
  }

  register_indicator(
    ent %>%
      select(bfs_nr_gemeinde:change_fuenf) %>%
      group_by(bfs_nr_gemeinde, jahr) %>%
      summarise_at(vars(value, value_tot_fuenf), sum, na.rm = TRUE) %>%
      ungroup() %>%
      filter(jahr >= 2016) %>%
      mutate(share = (value - value_tot_fuenf) / value_tot_fuenf * 100) %>%
      mutate(value = value - value_tot_fuenf) %>%
      select(jahr, bfs_nr_gemeinde, value, share),
    topic, label,
    sprintf("Veränderung %s total gegenüber vor 5 Jahren", label),
    source_ids = source_id
  )

  register_indicator(
    ent %>%
      select(bfs_nr_gemeinde:change_fuenf) %>%
      group_by(bfs_nr_gemeinde, jahr) %>%
      summarise_at(vars(value, value_tot_ein), sum, na.rm = TRUE) %>%
      ungroup() %>%
      filter(jahr >= 2016) %>%
      mutate(share = (value - value_tot_ein) / value_tot_ein * 100) %>%
      mutate(value = value - value_tot_ein) %>%
      select(jahr, bfs_nr_gemeinde, value, share),
    topic, label,
    sprintf("Vorjahresveränderung %s total", label),
    source_ids = source_id
  )

  register_indicator(
    ent %>%
      select(jahr, sektor, bfs_nr_gemeinde, change_fuenf) %>%
      rename(filter1 = "sektor", value = "change_fuenf"),
    topic, label,
    sprintf("Veränderung %s nach Sektor gegenüber vor 5 Jahren (in %% Punkten)", label),
    source_ids = source_id
  )

  register_indicator(
    ent %>%
      mutate(share = (value - value_tot_ein) / value_tot_ein * 100,
             value = value - value_tot_ein) %>%
      select(jahr, sektor, bfs_nr_gemeinde, value, share) %>%
      rename(filter1 = "sektor"),
    topic, label,
    sprintf("Vorjahresveränderung %s nach Sektor (in %%)", label),
    source_ids = source_id
  )

  total <- ent %>%
    group_by(bfs_nr_gemeinde, jahr) %>%
    summarise_at(vars(value), sum, na.rm = TRUE) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)

  register_indicator(total, topic, label, sprintf("%s total", label),
                     source_ids = source_id)

  register_indicator(
    ent %>%
      select(jahr, sektor, bfs_nr_gemeinde, value, share) %>%
      rename(filter1 = "sektor") %>%
      summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data),
    topic, label,
    sprintf("%s nach Sektor", label),
    source_ids = source_id
  )

  invisible(total)
}

# Wohnungen nach Zimmerzahl -----------------------------------------------

#' Wohnungsdaten (breit, mit `*_zimmerwohnung`-Spalten) nach Zimmerklassen
#' zusammenfassen und auf Bezirks-/Kantonsebene aggregieren.
prepare_zimmerwohnungen <- function(data, bezirk_data) {
  data %>%
    select(bfs_nr_gemeinde, jahr, `1_zimmerwohnung`:last_col()) %>%
    pivot_longer(cols = `1_zimmerwohnung`:last_col()) %>%
    mutate(filter1 = case_when(
      name %in% c("1_zimmerwohnung", "2_zimmerwohnung") ~ "1-2-Zimmerwohnungen",
      name %in% c("3_zimmerwohnung", "4_zimmerwohnung") ~ "3-4-Zimmerwohnungen",
      name %in% c("5_zimmerwohnung")                    ~ "5-Zimmerwohnungen",
      name %in% c("6plus_zimmerwohnung")                ~ "Wohnungen mit 6 und mehr Zimmern",
      TRUE ~ NA_character_
    )) %>%
    group_by(bfs_nr_gemeinde, jahr, filter1) %>%
    summarise(value = sum(as.numeric(value))) %>%
    ungroup() %>%
    summarise_bezirk_kanton(type = "sum", bezirk_data = bezirk_data)
}

# Abstimmungen ------------------------------------------------------------

#' Abstimmungsdatensatz (eidg. oder kantonal) ins lange Format bringen
prepare_abstimmungen <- function(data) {
  data %>%
    mutate(tag = as.Date(tag)) %>%
    filter(tag >= "2009-01-01") %>%
    mutate(jahr = year(tag)) %>%
    select(bfs_nr_gemeinde, jahr, tag, vorlage_bezeichnung,
           ja_stimmen, stimmbeteiligung, gueltige_stimmen) %>%
    mutate_at(vars(ja_stimmen, gueltige_stimmen, stimmbeteiligung), as.numeric) %>%
    mutate(anteil_ja_stimmen = ja_stimmen / gueltige_stimmen * 100) %>%
    select(-c(gueltige_stimmen, ja_stimmen)) %>%
    pivot_longer(cols = c(anteil_ja_stimmen, stimmbeteiligung)) %>%
    mutate(filter1 = case_when(
      name == "stimmbeteiligung"   ~ "Stimmbeteiligung",
      name == "anteil_ja_stimmen"  ~ "Ja-Stimmenanteil"
    )) %>%
    select(-name)
}

#' Je Abstimmungsjahr und Vorlage einen Indikator registrieren
#'
#' @param prepared Ergebnis von `prepare_abstimmungen()`
#' @param label "Eidg. Abstimmungen" oder "Kantonale Abstimmungen"
register_abstimmungen <- function(prepared, label, source_id) {

  topic <- "Staat und Politik"

  # Datenbezug auswerten; bei Fehler kann nicht je Vorlage aufgeschlüsselt
  # werden (die einzelnen Indikatoren entstehen erst aus den Daten). Daher wird
  # die ganze Abstimmungsreihe als fehlgeschlagene Gruppe markiert; beim
  # Speichern bleiben alle bestehenden Datensätze dieser Reihe erhalten.
  prepared <- tryCatch(force(prepared), error = function(e) e)
  if (inherits(prepared, "error")) {
    register_failed_group(topic, label, message = conditionMessage(prepared))
    return(invisible(NULL))
  }

  for (year in sort(unique(prepared$jahr))) {

    subtopic <- paste0(year, ": ", label)

    abst_jahr    <- prepared %>% filter(jahr == year)
    dist_vorlage <- abst_jahr %>% distinct(vorlage_bezeichnung, tag)

    for (i in seq_along(dist_vorlage$vorlage_bezeichnung)) {
      indicator <- paste0(format(dist_vorlage$tag[i], "%d.%m.%Y"), ": ",
                          dist_vorlage$vorlage_bezeichnung[i])

      register_indicator(
        abst_jahr %>%
          filter(vorlage_bezeichnung == dist_vorlage$vorlage_bezeichnung[i] &
                   tag == dist_vorlage$tag[i]) %>%
          select(bfs_nr_gemeinde, jahr, filter1, value),
        topic, subtopic, indicator,
        source_ids = source_id
      )
    }
  }
}

# Schulgemeinden ----------------------------------------------------------

#' Einen Schulgemeinde-Indikator registrieren (sofern Daten vorhanden)
#'
#' @param sg_type Kürzel im Datensatz ("PSG"/"SSG"/"VSG")
#' @param geo_unit Geo-Einheit für das Mapping
#' @param variable Spaltenname der Kennzahl im Datensatz
register_sg_indicator <- function(sg_type, geo_unit, variable, data,
                                  topic, subtopic, indicator,
                                  source_id = "dek-av-30") {
  temp <- tryCatch(
    data %>%
      filter(sgtyp2 == sg_type) %>%
      select(all_of(c("sg_id", "jahr", variable))) %>%
      setNames(c("bfs_nr_gemeinde", "jahr", "value")),
    error = function(e) e
  )

  if (inherits(temp, "error")) {
    register_failed(geo_unit, c(topic, subtopic, indicator),
                    source_ids = source_id, message = conditionMessage(temp))
    return(invisible(NULL))
  }

  # Liegen für diese Schulgemeinde-Art keine Werte vor, wird der Indikator
  # bewusst übersprungen (kein Fehler).
  if (sum(is.na(temp$value)) != nrow(temp)) {
    register_indicator(temp, topic, subtopic, indicator,
                       geo_unit = geo_unit, source_ids = source_id)
  }
  invisible(NULL)
}
