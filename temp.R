tg_all_indi <- get_all_gemeinde_indicators("tg")

tg_all_indi_mod <- tg_all_indi |>
  dplyr::filter(!id_dataset %in% c("polgrw","polnrw")) |>
  dplyr::filter(pie==0)

tg_data <- list()

for (i in 1:nrow(tg_all_indi_mod)) {
  row <- tg_all_indi_mod[i, ]

  message("Hole Indikator ", i, "/", nrow(tg_all_indi_mod), ": ", row$id_indicator)

  tg_data[[row$id_indicator]] <- get_tg_maps_indicator(
    indic      = row$id_indicator,
    dataset    = row$id_dataset,
    view       = "map3",
    start_jahr = min(row$mods[[1]])
  )

  Sys.sleep(1)
}

names(tg_data) <- tg_all_indi_mod$name

# writexl::write_xlsx(overveiw_mapping,"ov_map.xlsx")

overview <- readxl::read_excel("data/themenatlas_indikatoren_updated.xlsx")
mapping <- readRDS("nested_data/mapping.rds")

mapping_gemeinde <- mapping |>
  filter(geo_unit=="gemeinde") |>
  filter(!level_2 %in% c("Grossratswahlen","Nationalratswahlen"))


overview_mapping <- overview |>
  filter(!Unterthema %in% c("Grossratswahlen","Nationalratswahlen")) |>
  left_join(mapping_gemeinde,join_by(`Indikatorname neu`==level_3)) |>
  left_join(tg_all_indi_mod,join_by(Indikator==name)) |>
  select(Indikator,`Jahre von`,`Jahre bis`,`Indikatorname neu`,dataset_id = id.y,id_indicator,id_dataset)


von_bis <- lapply(unique(overview_mapping$dataset_id), function(x){

  if (is.na(x)){
    return(NULL)
  }

  print(paste0("nested_data/",x,".rds"))

  temp <- readRDS(paste0("nested_data/",x,".rds"))

  tibble(von = as.character(min(temp$jahr)),bis = as.character(max(temp$jahr)),dataset_id=x)
}) |>
  bind_rows()



overview_mapping_add <- overview_mapping |>
  left_join(von_bis,"dataset_id") |>
  filter(is.na(von) | von>`Jahre von`)


get_tg_maps_indicator("bevstaaltdur","bevsta",view="map3",start_jahr=min(tg_all_indi$mods[1][[1]]))


all_tg_data <- lapply()


data <- get_swiss_maps_indicator(indic = "durchschnittlichehau",dataset = "ch_01_07a",view = "map179",start_jahr = "2012")






# Daten zusammenfügen


# Bev nach Geschlecht -----------------------------------------------------


# Bev Altersklasse --------------------------------------------------------

bev_alter <- readRDS("nested_data/ds_0004.rds")

df1 <- tg_data[["Anzahl unter 20-Jährige (ständige Wohnbevölkerung)"]] |>
  mutate(filter1 = "unter 20 Jahre")

df2 <- tg_data[["Anzahl 20-64-Jährige (ständige Wohnbevölkerung)"]] |>
  mutate(filter1 = "20-64-Jährige")

df3 <- tg_data[["Anzahl über 64-Jährige (ständige Wohnbevölkerung)"]] |>
  mutate(filter1 = "über 64 Jahre")

bev_alter_mod <- df1 |>
  bind_rows(df2) |>
  bind_rows(df3) |>
  rename(jahr="zeitraum")

bev_alter_mod_bez <- bev_alter_mod |>
  summarise_bezirk(bezirk_data = bezirk_data)




bev_alter_final <-bev_alter_mod_bez |>
  group_by(bfs_nr_gemeinde,jahr) |>
  mutate(total = sum(value)) |>
  ungroup() |>
  mutate(share = value/total*100) |>
  select(-total)

saveRDS(bev_alter_final,"nested_data/ds_0004.rds")







# Bev Gesamt --------------------------------------------------------------

bev_total <- bev_alter_final |>
  group_by(bfs_nr_gemeinde,jahr) |>
  summarise(value = sum(value),.groups = "drop")

saveRDS(bev_total,"nested_data/ds_0007.rds")



# Durchschnittsalter ------------------------------------------------------


bev_avgage <- tg_data$`Durchschnittsalter der Bevölkerung`  |>
  rename(jahr = "zeitraum")

saveRDS(bev_avgage,"nested_data/ds_0001.rds")



# Gemeindesteuerfuss ------------------------------------------------------

# Veränderung der Gemeindesteuerfüsse im Vergleich zu vor 10 Jahre --------



