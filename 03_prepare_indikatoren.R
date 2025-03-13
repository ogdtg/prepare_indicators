# Erstellung Indikatoren

# install_and_load <- function(package) {
#   if (!requireNamespace(package, quietly = TRUE)) {
#     install.packages(package, dependencies = TRUE)
#   }
#   library(package, character.only = TRUE)
# }
install.packages("BFS")
library(dplyr)
library(httr)
library(jsonlite)
library(tidyr)
library(BFS)
library(stringr)
library(purrr)
library(lubridate)

# packages <- c("dplyr", "BFS", "httr","jsonlite","tidyr")
# lapply(packages, install_and_load)


# source("prepare_indikator_list.R")




# Datenbezug von data.tg.ch -----------------------------------------------
print("# Datenbezug von data.tg.ch -----------------------------------------------")
# Benötigte Daten
ids <- c("sk-stat-4","sk-stat-52","sk-stat-62","sk-stat-69","sk-stat-70","sk-stat-57","sk-stat-59","sk-stat-56","sk-stat-54","sk-stat-55","sk-stat-80","sk-stat-98","sk-stat-97","sk-stat-93","sk-stat-92","sk-stat-90","sk-stat-9","sk-stat-11","sk-stat-123","sk-stat-120","sk-stat-50","sk-stat-1")


## Hilfsfunktionen ---------------------------------------------------------
print("## Hilfsfunktionen ---------------------------------------------------------")


# Summarise von denen deren Werte man einfach addieren/mitteln kann
summarise_bezirk <- function(data,type="sum",bezirk_data){

  share=FALSE

  if ("share" %in% colnames(data)){
    share = TRUE
  }

  data_mod <- data %>%
    left_join(bezirk_data,"bfs_nr_gemeinde")


  if ("filter1" %in% colnames(data)){
    data_mod <- data_mod %>%
      group_by(jahr,bfs_nr_bezirk ,filter1)
  } else {
    data_mod <- data_mod %>%
      group_by(jahr,bfs_nr_bezirk )
  }


  if (type == "sum"){
    data_mod <- data_mod %>%
      summarise(value = sum(value,na.rm = TRUE)) %>%
      ungroup()

    if (share){
      if ("filter1" %in% colnames(data)){
        data_mod <- data_mod %>%
          group_by(jahr ,bfs_nr_bezirk) %>%
          mutate(share = value/sum(value)*100) %>%
          ungroup()
      } else {
        data_mod <- data_mod %>%
          group_by(jahr) %>%
          mutate(share = value/sum(value)*100) %>%
          ungroup()
      }
    }
  } else if (type == "mean"){
    data_mod <- data_mod %>%
      summarise(value = mean(value,na.rm=TRUE)) %>%
      ungroup()
  }

  data_mod %>%
    rename(bfs_nr_gemeinde = "bfs_nr_bezirk")

}

summarise_kanton <- function(data,type="sum"){


  share=FALSE

  if ("share" %in% colnames(data)){
    share = TRUE
  }

  if ("filter1" %in% colnames(data)){
    data_mod <- data %>%
      group_by(jahr,filter1)
  } else {
    data_mod <- data %>%
      group_by(jahr )
  }


  if (type == "sum"){
    data_mod <- data_mod %>%
      summarise(value = sum(value,na.rm = TRUE)) %>%
      ungroup() %>%
      mutate(bfs_nr_bezirk ="20")

    if (share){
      if ("filter1" %in% colnames(data)){
        data_mod <- data_mod %>%
          group_by(jahr ,bfs_nr_bezirk) %>%
          mutate(share = value/sum(value)*100) %>%
          ungroup()
      } else {
        data_mod <- data_mod %>%
          mutate(share = 1) %>%
          ungroup()
      }
    }
  } else if (type == "mean"){
    data_mod <- data_mod %>%
      summarise(value = mean(value,na.rm = TRUE)) %>%
      ungroup() %>%
      mutate(bfs_nr_bezirk ="20")
  }

  data_mod %>%
    rename(bfs_nr_gemeinde = "bfs_nr_bezirk")

}


summarise_bezirk_kanton <- function(data,type="sum",bezirk_data){
  data_bez <- summarise_bezirk(data,type,bezirk_data)
  data_kt <- summarise_kanton(data,type)

  data %>%
    bind_rows(data_bez) %>%
    bind_rows(data_kt) %>%
    arrange(jahr)
}



get_ogd_catalog <- function (){
  res = httr::GET(paste0("https://", "data.tg.ch", "/api/explore/",
                         "v2.1", "/catalog/exports/json"))
  if (res$status_code != 200) {
    stop(paste0("The API returned an error (HTTP ERROR ",
                res$status_code, ") . Please visit ",  "data.tg.ch", " for more information"))
  }
  result = jsonlite::fromJSON(rawToChar(res$content), flatten = TRUE)
  return(result)
}


get_data_from_ogd <- function (dataset_id){
  res = httr::GET(glue::glue("https://data.tg.ch/api/v2/catalog/datasets/{dataset_id}/exports/json"))

  result = jsonlite::fromJSON(rawToChar(res$content), flatten = TRUE)
  return(result)
}


outersect <- function(x, y) {
  sort(c(setdiff(x, y),
         setdiff(y, x)))
}



create_data_source_element <- function(ids,ods_catalog = catalog){

  id_vec <- c()
  url_vec <- c()
  title_vec <- c()
  for (id in ids){
    if (str_detect(id,"px")){
      url = paste0("https://www.pxweb.bfs.admin.ch/pxweb/de/",id,"/-/",id,".px/")
      title = bfs_get_catalog_data(order_nr =id)$title
    } else {
      url = paste0("https://data.tg.ch/explore/dataset/",id,"/table/")
      title = catalog$metas.default.title[which(catalog$dataset_id==id)]
    }
    id_vec <- c(id_vec,id)
    url_vec <- c(url_vec,url)
    title_vec <- c(title_vec,title)

  }

  list(id = id_vec,
       url = url_vec,
       title = title_vec)
}
# Hilfsvariablen

data_source_list <- readRDS("data/data_source_list.rds")
additional_data <- readRDS("data/additional_data.rds")
nested_list <- readRDS("data/nested_list.rds")
filter_fields <- readRDS("data/filter_fields.rds")

join_vars <- c("jahr", "bfs_nr_gemeinde", "name_gemeinde", "bfs_nr_bezirk", "name_bezirk_long", "name_bezirk")

raum <- readRDS("data/raum_df.rds") %>%
  distinct(name,unified_raum)

zeit <- readRDS("data/zeit_df.rds") %>%
  distinct(name,unified_zeit)

catalog <- get_ogd_catalog()

bezirk_data <- readRDS("data/bezirk_data.rds")


## Bezug und teilweise Pivotierung -----------------------------------------

print("## Bezug und teilweise Pivotierung -----------------------------------------")
themenatlas_data_new <- lapply(unique(ids), get_data_from_ogd)

# Create a named vector for mapping
raum_mapping <- setNames(raum$unified_raum, raum$name)
zeit_mapping <- setNames(zeit$unified_zeit, zeit$name)
# Replace column names if they exist in the mapping

# Vereinheitlichte Namen zuweisen
all_data <- lapply(themenatlas_data_new,function(df){
  colnames(df) <- ifelse(colnames(df) %in% names(raum_mapping),
                         raum_mapping[colnames(df)],
                         colnames(df))

  colnames(df) <- ifelse(colnames(df) %in% names(zeit_mapping),
                         zeit_mapping[colnames(df)],
                         colnames(df))
  df
})


themenatlas_data_long <- lapply(all_data,function(x){
  tryCatch({
    x[c("bfs_nr_bezirk","name_bezirk_long","name_bezirk","bezirk_name","bezirk_nr","bezirk")] <- NULL
    vars_to_pivot <- intersect(names(x),filter_fields$name)
    raum_zeit_var <- intersect(names(x),join_vars)
    value_vars <- outersect(names(x),c(vars_to_pivot,raum_zeit_var))

    x %>%
      pivot_longer(cols = all_of(value_vars),names_to = "variable")
  },error = function(cond){
    NULL
  })
})


names(themenatlas_data_long) <- ids
names(all_data) <- ids
# Bevölkerung und Soziales ------------------------------------------------

print("## Bevölkerung und Soziales ---------------------------------------------------------")


## Bevölkerungsstand -------------------------------------------------------------

print("## Bevölkerungsstand ---------------------------------------------------------")

# nested_list <- list(
#   "Bevölkerung und Soziales" = list(
#     "Bevölkerungsstand" = list(),
#     "Bevölkerungsentwicklung" = list(),
#     "Bevölkerungsbewegung" = list()
#   )
# )


# Konfessionen



bev_konf_id <- "sk-stat-62"



bev_konf <- themenatlas_data_long[[bev_konf_id]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value/total*100)





bev_alter_id <-  catalog %>%
  filter(metas.default.title=="Ständige Wohnbevölkerung Kanton Thurgau ab 2015 nach Gemeinden und Einzelaltersjahren") %>%
  pull(dataset_id)


### ZUSATZ: Bev nach Einzelaltersjahren -------------------------------------
print("## ZUSATZ: Bev nach Einzelaltersjahren ---------------------------------------------------------")


additional_data <-list(`Bevölkerung und Soziales`=list())

gemeinde_summary <- get_data_from_ogd("sk-stat-58") %>%
  select(bfs_nr_gemeinde,jahr,geschlecht_bezeichnung,alter5klassen_bezeichnung,anzahl_personen,alter5klassen_code) %>%
  rename(ageclass = "alter5klassen_bezeichnung",
         sex = "geschlecht_bezeichnung",
         value ="anzahl_personen",
         ageclass_code = "alter5klassen_code") %>%
  mutate(value = as.numeric(value))



# Merge gemeinde data with bezirk data
data_merged <- gemeinde_summary %>%
  left_join(bezirk_data, by = "bfs_nr_gemeinde")

# Aggregate to bezirk level
bezirk_summary <- data_merged %>%
  group_by(bfs_nr_bezirk, name_bezirk, jahr, sex, ageclass, ageclass_code) %>%
  summarise(value = sum(value, na.rm = TRUE), .groups = "drop") %>%
  rename(bfs_nr_gemeinde="bfs_nr_bezirk") %>%
  select(-name_bezirk )


# Kanton
kanton_summary <- bezirk_summary %>%
  group_by(jahr,sex ,ageclass, ageclass_code) %>%
  summarise(value = sum(value)) %>%
  mutate(bfs_nr_gemeinde="20")



additional_data$`Bevölkerung und Soziales`[["Bevölkerung nach Altersklasse Geschlecht"]] <- gemeinde_summary %>%
  bind_rows(bezirk_summary) %>%
  bind_rows(kanton_summary)


data_source_list[["additional_data$`Bevölkerung und Soziales`$`Bevölkerung nach Altersklasse Geschlecht`"]] <- create_data_source_element("sk-stat-58")


bev_alter <- themenatlas_data_long[[bev_alter_id]] %>%
  mutate(value = as.numeric(value),
         alter_code = as.numeric(alter_code)) %>%
  mutate(ageclass = case_when(
    alter_code<20~ "unter 20 Jahre",
    alter_code>=20 & alter_code<=64 ~ "20-64-Jährige",
    alter_code>64 ~ "über 64 Jahre",
    TRUE~NA_character_
  )) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value/total)


bev_ageclass <- bev_alter %>%
  group_by(bfs_nr_gemeinde,name_gemeinde ,jahr,ageclass) %>%
  summarise(value = sum(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value/total*100)




bev_mean_alter <- bev_alter %>%
  mutate(age_summe = value*alter_code) %>%
  group_by(bfs_nr_gemeinde,name_gemeinde,jahr) %>%
  summarise(value = sum(age_summe)/sum(value)) %>%
  ungroup()


### Durchschnittsalter  --------
print("### Durchschnittsalter  ---------")



nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Durchschnittsalter der Bevölkerung` <- bev_mean_alter %>%
  select(-name_gemeinde)


bev_mean_alter_rentner <- bev_alter %>%
  filter(alter_code>=65) %>%
  mutate(age_summe = value*alter_code) %>%
  group_by(bfs_nr_gemeinde,name_gemeinde,jahr) %>%
  summarise(value = sum(age_summe)/sum(value)) %>%
  ungroup()



nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Durchschnittsalter der Rentnerinnen und Rentner` <- bev_mean_alter_rentner %>%
  select(-name_gemeinde)



### Bevölkerungsverteilung nach Geschlecht ---------------------------------------
print("### Bevölkerungsverteilung nach Geschlecht ---------------------------------------")


bev_ausl_id <-  catalog %>%
  filter(metas.default.title=="Ständige Wohnbevölkerung Kanton Thurgau ab 2015 nach Gemeinden, Geschlecht und Staatsangehörigkeit") %>%
  pull(dataset_id)

bev_ausl_full <- themenatlas_data_long[[bev_ausl_id]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share_sex = value/total) %>%
  group_by(bfs_nr_gemeinde,jahr,nationalitaet_bezeichnung) %>%
  mutate(share = sum(value)/total*100,
         value = sum(value)) %>%
  ungroup()


bev_ausl <- bev_ausl_full %>%
  distinct(bfs_nr_gemeinde,name_gemeinde,jahr,nationalitaet_bezeichnung,share,value)




nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Bevölkerungsverteilung nach Geschlecht` <- themenatlas_data_long[[bev_ausl_id]] %>%
  group_by(bfs_nr_gemeinde,jahr,geschlecht_bezeichnung) %>%
  summarise(value = sum(as.numeric(value))) %>%
  ungroup() %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  rename(filter1="geschlecht_bezeichnung")


### Bevölkerungsverteilung nach Altersklasse ---------------------------------------
print("### Bevölkerungsverteilung nach Altersklasse ---------------------------------------")


nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Bevölkerungsverteilung nach Altersklasse` <- bev_ageclass %>%
  select(bfs_nr_gemeinde,jahr,ageclass,value,share) %>%
  rename(filter1="ageclass") %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)



### Bevölkerungsverteilung nach Konfession ---------------------------------------
print("### Bevölkerungsverteilung nach Konfession ---------------------------------------")

nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Bevölkerungsverteilung nach Konfession` <- bev_konf %>%
  select(bfs_nr_gemeinde,jahr,konfession_bezeichnung,value,share) %>%
  rename(filter1="konfession_bezeichnung") %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Bevölkerungsverteilung nach Nationalität ---------------------------------------
print("### Bevölkerungsverteilung nach Nationalität ---------------------------------------")

nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$`Bevölkerungsverteilung nach Nationalität` <- bev_ausl %>%
  select(bfs_nr_gemeinde,jahr,nationalitaet_bezeichnung,value,share) %>%
  rename(filter1="nationalitaet_bezeichnung") %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Gesamtbevölkerung ---------------------------------------
print("### Gesamtbevölkerung ---------------------------------------")

nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$Gesamtbevölkerung <- bev_ausl %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(as.numeric(value))) %>%
  ungroup() %>%
  group_by(jahr) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


# Bevölkerungsentwicklung -------------------------------------------------
print("# Bevölkerungsentwicklung -------------------------------------------------")

bevent_id <- catalog %>%
  filter(metas.default.title=="Ständige Wohnbevölkerung der Thurgauer Gemeinden") %>%
  pull(dataset_id)

bevent_join <- themenatlas_data_long[[bevent_id]] %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value))

bevent <- themenatlas_data_long[[bevent_id]] %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  mutate(fuenf_jahr = ifelse((jahr-5) >= min(jahr),jahr-5,NA),
         ein_jahr = ifelse((jahr-1) >= min(jahr),jahr-1,NA)) %>%
  left_join(bevent_join %>%
              rename(value_fuenf = "value"),by = c("bfs_nr_gemeinde","fuenf_jahr"="jahr")) %>%
  left_join(bevent_join %>%
              rename(value_ein = "value"),by = c("bfs_nr_gemeinde","ein_jahr"="jahr")) %>%
  mutate(change_fuenf = (value-value_fuenf)/value_fuenf*100,
         change_ein = (value-value_ein)/value_ein*100) %>%
  select(bfs_nr_gemeinde,name_gemeinde,jahr,change_fuenf,change_ein) %>%
  pivot_longer(cols = c(change_fuenf,change_ein)) %>%
  mutate(name = case_when(
    name=="change_fuenf"~"im Vergleich zu vor 5 Jahren",
    TRUE~"im Vorjahresvergleich"
  )) %>%
  rename(filter1 = "name")

### Bevölkerungsentwicklung (Vorjahr/5 Jahre) ---------------------------------------
print("### Bevölkerungsentwicklung (Vorjahr/5 Jahre) ---------------------------------------")

nested_list$`Bevölkerung und Soziales`$Bevölkerungsentwicklung$`Bevölkerungsentwicklung (Vorjahr/5 Jahre)` <- bevent %>%
  select(-name_gemeinde)

## Bevölkerungsbewegung -------------------------------------------------
print("## Bevölkerungsbewegung -------------------------------------------------")




### Geburten ----------------------------------------------------------------
print("### Geburten ----------------------------------------------------------------")


nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Lebendgeburten <- bfs_get_data(number_bfs = "px-x-0102020204_102",language= "de",query= list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde,Jahr,Lebendgeburten) %>%
  rename(value = "Lebendgeburten",
         jahr = "Jahr") %>%
  filter(jahr>=2009) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Todesfälle <-  bfs_get_data(number_bfs = "px-x-0102020206_102",language= "de",query= list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde,
                                                                                        `Staatsangehörigkeit (Kategorie)`=c("-99999"))) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde,Jahr,Todesfälle) %>%
  rename(value = "Todesfälle",
         jahr = "Jahr") %>%
  filter(jahr>=2009) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Geburtensaldo <- nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Todesfälle %>%
  left_join(nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Lebendgeburten,c("jahr","bfs_nr_gemeinde")) %>%
  mutate(value = value.y-value.x) %>%
  select(bfs_nr_gemeinde,jahr,value)


nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Heiraten <- bfs_get_data(number_bfs = "px-x-0102020202_102", language = "de",query= list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde,Jahr,Heiraten)  %>%
  rename(value = "Heiraten",
         jahr = "Jahr") %>%
  filter(jahr>=2009) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)



nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Scheidungen <- bfs_get_data(number_bfs = "px-x-0102020203_103", language = "de",query= list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = bezirk_data$bfs_nr_gemeinde)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(bfs_nr_gemeinde,Jahr,Scheidungen) %>%
  rename(value = "Scheidungen",
         jahr = "Jahr") %>%
  filter(jahr>=2009) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)



### Wanderungssaldo ---------------------------------------
print("### Wanderungssaldo ---------------------------------------")

wanderung_metadata <- bfs_get_metadata(number_bfs = "px-x-0103010200_121",language="de")


wanderungen_lookup <- tibble(value = wanderung_metadata$values[[2]],text = wanderung_metadata$valueTexts[[2]]) %>%
  filter(str_extract(text,"\\d\\d\\d\\d") %in% bezirk_data$bfs_nr_gemeinde)


wanderung_data_full <- bfs_get_data(number_bfs = "px-x-0103010200_121",language="de",query= list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)` = wanderungen_lookup$value)) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  mutate(mig_typ = case_when(
    Migrationstyp %in% c("Einwanderung inkl. Änderung des Bevölkerungstyps","Interkantonaler Zuzug" ,"Intrakantonaler Zuzug")~"Zuzug",
    TRUE~"Wegzug"
  )) %>%
  rename(value = "Wanderung der ständigen Wohnbevölkerung") %>%
  mutate(type = case_when(
    str_detect(Migrationstyp,"Interkantonal")~"mit anderen Kantonen",
    str_detect(Migrationstyp,"Intrakantonal")~"mit anderen Gemeinden",
    Migrationstyp %in% c("Einwanderung inkl. Änderung des Bevölkerungstyps","Auswanderung")~"mit dem Ausland"
  ))

wanderung_data_zu_weg <- wanderung_data_full %>%
  group_by(Jahr,bfs_nr_gemeinde,mig_typ) %>%
  summarise(value = sum(value)) %>%
  ungroup()

zuzug_data <- wanderung_data_full %>%
  filter(mig_typ=="Zuzug") %>%
  group_by(Jahr,bfs_nr_gemeinde,type) %>%
  summarise(zuzuege = sum(value)) %>%
  ungroup()

wegzug_data <- wanderung_data_full %>%
  filter(mig_typ=="Wegzug") %>%
  group_by(Jahr,bfs_nr_gemeinde,type) %>%
  summarise(wegzuege = sum(value)) %>%
  ungroup()

wanderungssaldo_data <- zuzug_data %>%
  left_join(wegzug_data,c("Jahr","bfs_nr_gemeinde","type")) %>%
  mutate(saldo = zuzuege-wegzuege)

nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Wanderungssaldo <- wanderungssaldo_data %>%
  rename(value = "saldo",
         filter1 = "type",
         jahr = "Jahr") %>%
  select(bfs_nr_gemeinde,jahr,filter1,value) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Zuzüge ---------------------------------------
print("### Zuzüge ---------------------------------------")


nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Zuzüge <- wanderungssaldo_data %>%
  rename(value = "zuzuege",
         filter1 = "type",
         jahr = "Jahr") %>%
  mutate(filter1 = str_replace(filter1,"mit ","aus ")) %>%
  select(bfs_nr_gemeinde,jahr,filter1,value) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Wegzüge ---------------------------------------
print("### Wegzüge ---------------------------------------")

nested_list$`Bevölkerung und Soziales`$Bevölkerungsbewegung$Wegzüge <- wanderungssaldo_data %>%
  rename(value = "wegzuege",
         filter1 = "type",
         jahr = "Jahr") %>%
  mutate(filter1 =case_when(
    filter1 == "mit anderen Gemeinden"~"in andere Gemeinden",
    filter1 == "mit anderen Kantonen"~"in andere Kantone",
    filter1 == "mit dem Ausland"~"ins Ausland"
  )) %>%
  select(bfs_nr_gemeinde,jahr,filter1,value) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

## Haushalte ---------------------------------------------------------------
print("## Haushalte ---------------------------------------------------------------")

hh_data <- bfs_get_data(number_bfs = "px-x-0102020000_402",language = "de",query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`=bezirk_data$bfs_nr_gemeinde,
                                                                                        Haushaltsgrösse=c("1", "2", "3", "4", "5", "6"))) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(Jahr,bfs_nr_gemeinde,Haushaltsgrösse,Privathaushalte)


haushalte <- hh_data %>%
  group_by(Jahr,bfs_nr_gemeinde) %>%
  mutate(share = Privathaushalte/sum(Privathaushalte)*100) %>%
  ungroup() %>%
  rename(jahr = "Jahr",
         value = "Privathaushalte") %>%
  rename(filter1="Haushaltsgrösse")


### Haushalte nach Haushaltsgrösse ---------------------------------------
print("### Haushalte nach Haushaltsgrösse ---------------------------------------")


nested_list$`Bevölkerung und Soziales`$Haushalte[["Haushalte nach Haushaltsgrösse"]] <- haushalte %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Haushalte insgsesamt ---------------------------------------
print("### Haushalte insgsesamt ---------------------------------------")



nested_list$`Bevölkerung und Soziales`$Haushalte[["Haushalte insgesamt"]] <- haushalte %>%
  group_by(jahr,bfs_nr_gemeinde) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


## Sozialhife --------------------------------------------------------------
print("## Sozialhife ---------------------------------------------------------------")


### Brutto ausgaben ---------------------------------------------------------
print("### Brutto ausgaben ---------------------------------------------------------")


soz_brutto <- themenatlas_data_long[["sk-stat-54"]]


nested_list$`Bevölkerung und Soziales`$Sozialhilfe[["Brutto Sozialhilfeausgaben je Einwohner"]] <- soz_brutto %>%
  filter(variable == "brutto_sozialhilfe_je_einwohner") %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(value = as.numeric(value))

nested_list$`Bevölkerung und Soziales`$Sozialhilfe[["Brutto Sozialhilfeausgaben total"]] <- soz_brutto %>%
  filter(variable == "ausgaben_brutto") %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(value = as.numeric(value)) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Netto Ausgaben ----------------------------------------------------------
print("### Netto Ausgaben ----------------------------------------------------------")


soz_netto <- themenatlas_data_long[["sk-stat-55"]]



nested_list$`Bevölkerung und Soziales`$Sozialhilfe[["Netto Sozialhilfeausgaben je Einwohner"]] <- soz_netto %>%
  filter(variable == "netto_sozialhilfe_je_einwohner") %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(value = as.numeric(value))

nested_list$`Bevölkerung und Soziales`$Sozialhilfe[["Netto Sozialhilfeausgaben total"]] <- soz_netto %>%
  filter(variable == "ausgaben_netto") %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(value = as.numeric(value)) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Sozialhilfequote --------------------------------------------------------



soz_quote <- themenatlas_data_long[["sk-stat-80"]]


nested_list$`Bevölkerung und Soziales`$Sozialhilfe[["Sozialhilfequote"]] <- soz_quote %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  mutate(value = as.numeric(value))


# Wirtschaft und Arbeit ---------------------------------------------------
print("# Wirtschaft und Arbeit ---------------------------------------------------")



## Beschäftigte ------------------------------------------------------------
print("## Beschäftigte ------------------------------------------------------------")

besch_id <- catalog %>%
  filter(metas.default.title=="Beschäftigte nach Sektoren und Politischen Gemeinden Kanton Thurgau") %>%
  pull(dataset_id)


besch <- themenatlas_data_long[[besch_id]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value/total*100) %>%
  filter(jahr>=2011)

besch_total <- besch %>%
  group_by(bfs_nr_gemeinde,name_gemeinde,jahr) %>%
  summarise(total = sum(value)) %>%
  ungroup()

besch_join <- themenatlas_data_long[[besch_id]] %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(value_tot = value,
         value = value/total*100) %>%
  filter(jahr>=2011) %>%
  select(bfs_nr_gemeinde,jahr,sektor,value,value_tot)

besch_ent <- besch %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  mutate(fuenf_jahr = ifelse((jahr-5) >= min(jahr),jahr-5,NA),
         ein_jahr = ifelse((jahr-1) >= min(jahr),jahr-1,NA)) %>%
  left_join(besch_join %>%
              rename(value_fuenf = "value",
                     value_tot_fuenf = "value_tot"),by = c("bfs_nr_gemeinde","fuenf_jahr"="jahr","sektor")) %>%
  left_join(besch_join %>%
              rename(value_ein = "value",
                     value_tot_ein = "value_tot"),by = c("bfs_nr_gemeinde","ein_jahr"="jahr","sektor")) %>%
  mutate(change_fuenf = (share-value_fuenf),
         change_ein = (share-value_ein),
         change_tot_fuenf = value-value_tot_fuenf,
         change_tot_ein = value-value_tot_ein)

# Im Datensatz sk-stat-98 gibt es seltsame Werte die gelöscht werden müssen
# Sehr kleine Werte werden ausgewiesen bspw. für Rickenbach


### Veränderung Beschäftigte total gegenüber vor 5 Jahren --------------------------------------------------------
print("### Veränderung Beschäftigte total gegenüber vor 5 Jahren --------------------------------------------------------")



nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Veränderung Beschäftigte total gegenüber vor 5 Jahren"]] <- besch_ent %>%
  select(bfs_nr_gemeinde:change_fuenf) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value,value_tot_fuenf),sum,na.rm = T) %>%
  ungroup() %>%
  filter(jahr>=2016) %>%
  mutate(share = (value-value_tot_fuenf)/value_tot_fuenf*100) %>%
  mutate(value = value-value_tot_fuenf ) %>%
  select(jahr,bfs_nr_gemeinde,value,share)

### Vorjahresveränderung Beschäftigte total --------------------------------------------------------
print("### Vorjahresveränderung Beschäftigte total --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Vorjahresveränderung Beschäftigte total"]] <- besch_ent %>%
  select(bfs_nr_gemeinde:change_fuenf) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value,value_tot_ein),sum,na.rm = T) %>%
  ungroup() %>%
  filter(jahr>=2016) %>%
  mutate(share = (value-value_tot_ein)/value_tot_ein*100) %>%
  mutate(value = value-value_tot_ein ) %>%
  select(jahr,bfs_nr_gemeinde,value,share)



### Veränderung Beschäftigte nach Sektor gegenüber vor 5 Jahren (in % Punkten) --------------------------------------------------------
print("### Veränderung Beschäftigte nach Sektor gegenüber vor 5 Jahren (in % Punkten) --------------------------------------------------------")

nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Veränderung Beschäftigte nach Sektor gegenüber vor 5 Jahren (in % Punkten)"]] <- besch_ent %>%
  select(jahr,sektor,bfs_nr_gemeinde,change_fuenf) %>%
  rename(filter1 = "sektor",
         value = "change_fuenf")


### Vorjahresveränderung Beschäftigte nach Sektor (in %) --------------------------------------------------------
print("### Vorjahresveränderung Beschäftigte nach Sektor (in %) --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Vorjahresveränderung Beschäftigte nach Sektor (in %)"]] <- besch_ent %>%
  mutate(share = (value-value_tot_ein)/value_tot_ein*100,
         value = value -value_tot_ein) %>%
  select(jahr,sektor,bfs_nr_gemeinde,value,share) %>%
  rename(filter1 = "sektor")


### Beschäftigte total --------------------------------------------------------
print("### Beschäftigte total --------------------------------------------------------")

nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Beschäftigte total"]] <- besch_ent %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value),sum,na.rm = T) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Beschäftigte nach Sektor --------------------------------------------------------
print("### Beschäftigte nach Sektor --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Beschäftigte[["Beschäftigte nach Sektor"]] <- besch_ent %>%
  select(jahr,sektor,bfs_nr_gemeinde,value,share) %>%
  rename(filter1 = "sektor")%>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

# Warum einmal Veränderung in % Punkte (5 Jahre) und einmal in % (ein Jahr)????

## Arbeitsstätten ----------------------------------------------------------
print("## Arbeitsstätten ----------------------------------------------------------")

arbst_it <-catalog %>%
  filter(metas.default.title=="Arbeitsstätten nach Sektoren und Politischen Gemeinden Kanton Thurgau") %>%
  pull(dataset_id)


arbst <- themenatlas_data_long[[arbst_it]] %>%
  mutate(value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(share = value/total*100) %>%
  filter(jahr>=2011)


arbst_total <- arbst %>%
  group_by(bfs_nr_gemeinde,name_gemeinde,jahr) %>%
  summarise(total = sum(value)) %>%
  ungroup()

arbst_join <- themenatlas_data_long[[arbst_it]] %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(total = sum(value)) %>%
  ungroup() %>%
  mutate(value_tot = value,
         value = value/total*100) %>%
  filter(jahr>=2011) %>%
  select(bfs_nr_gemeinde,jahr,sektor,value,value_tot)

arbst_ent <- arbst %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  mutate(fuenf_jahr = ifelse((jahr-5) >= min(jahr),jahr-5,NA),
         ein_jahr = ifelse((jahr-1) >= min(jahr),jahr-1,NA)) %>%
  left_join(arbst_join %>%
              rename(value_fuenf = "value",
                     value_tot_fuenf = "value_tot"),by = c("bfs_nr_gemeinde","fuenf_jahr"="jahr","sektor")) %>%
  left_join(arbst_join %>%
              rename(value_ein = "value",
                     value_tot_ein = "value_tot"),by = c("bfs_nr_gemeinde","ein_jahr"="jahr","sektor")) %>%
  mutate(change_fuenf = (share-value_fuenf),
         change_ein = (share-value_ein),
         change_tot_fuenf = value-value_tot_fuenf,
         change_tot_ein = value-value_tot_ein)


### Veränderung Arbeitsstätten total gegenüber vor 5 Jahren --------------------------------------------------------
print("### Veränderung Arbeitsstätten total gegenüber vor 5 Jahren --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Veränderung Arbeitsstätten total gegenüber vor 5 Jahren"]] <- arbst_ent %>%
  select(bfs_nr_gemeinde:change_fuenf) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value,value_tot_fuenf),sum,na.rm = T) %>%
  ungroup() %>%
  filter(jahr>=2016) %>%
  mutate(share = (value-value_tot_fuenf)/value_tot_fuenf*100) %>%
  mutate(value = value-value_tot_fuenf ) %>%
  select(jahr,bfs_nr_gemeinde,value,share)


### Vorjahresveränderung Arbeitsstätten total --------------------------------------------------------
print("### Vorjahresveränderung Arbeitsstätten total --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Vorjahresveränderung Arbeitsstätten total"]] <- arbst_ent %>%
  select(bfs_nr_gemeinde:change_fuenf) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value,value_tot_ein),sum,na.rm = T) %>%
  ungroup() %>%
  filter(jahr>=2016) %>%
  mutate(share = (value-value_tot_ein)/value_tot_ein*100) %>%
  mutate(value = value-value_tot_ein ) %>%
  select(jahr,bfs_nr_gemeinde,value,share)


### Veränderung Arbeitsstätten nach Sektor gegenüber vor 5 Jahren (in % Punkten) --------------------------------------------------------
print("### Veränderung Arbeitsstätten nach Sektor gegenüber vor 5 Jahren (in % Punkten) --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Veränderung Arbeitsstätten nach Sektor gegenüber vor 5 Jahren (in % Punkten)"]] <- arbst_ent %>%
  select(jahr,sektor,bfs_nr_gemeinde,change_fuenf) %>%
  rename(filter1 = "sektor",
         value = "change_fuenf")


### Vorjahresveränderung Arbeitsstätten nach Sektor (in %) --------------------------------------------------------
print("### Vorjahresveränderung Arbeitsstätten nach Sektor (in %) --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Vorjahresveränderung Arbeitsstätten nach Sektor (in %)"]] <- arbst_ent %>%
  mutate(share = (value-value_tot_ein)/value_tot_ein*100,
         value = value -value_tot_ein) %>%
  select(jahr,sektor,bfs_nr_gemeinde,value,share) %>%
  rename(filter1 = "sektor")


### Arbeitsstätten total --------------------------------------------------------
print("### Arbeitsstätten --------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Arbeitsstätten total"]] <- arbst_ent %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise_at(vars(value),sum,na.rm = T) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Arbeitsstätten nach Sektor --------------------------------------------------------
print("### Arbeitsstätten Sektor--------------------------------------------------------")


nested_list$`Wirtschaft und Arbeit`$Arbeitsstätten[["Arbeitsstätten nach Sektor"]] <- arbst_ent %>%
  select(jahr,sektor,bfs_nr_gemeinde,value,share) %>%
  rename(filter1 = "sektor") %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


# Warum manchmal Prozentpunkte und manchmal prizentuale Veränderung????



## Grenzgänger -------------------------------------------------------------

print("### Grenzgänger--------------------------------------------------------")




grenzgaenger_data <- bfs_get_data(number_bfs = "px-x-0302010000_101",language = "de",query = list(Arbeitsgemeinde=bezirk_data$bfs_nr_gemeinde,
                                                                                                  Geschlecht=c("0"))) %>%
  mutate(name_gemeinde = str_remove(Arbeitsgemeinde,"\\.\\.\\.\\.\\.\\.") %>% str_remove("\\(TG\\)") %>% str_trim()) %>%
  mutate(jahr = str_extract(Quartal,"^\\d\\d\\d\\d")) %>%
  mutate(quartal = str_extract(Quartal,"Q\\d")) %>%
  rename(anzahl_gg = "Ausländische Grenzgänger/innen") %>%
  select(jahr,quartal,name_gemeinde,anzahl_gg) %>%
  mutate(name_gemeinde = case_when(
    str_detect(name_gemeinde,"Basadingen-Schlattin")~"Basadingen-Schlattingen",
    str_detect(name_gemeinde,"Zihlschlacht-Sitterd")~"Zihlschlacht-Sitterdorf",
    TRUE~name_gemeinde
  )) %>%
  left_join(bezirk_data %>%
              select(bfs_nr_gemeinde,name_gemeinde),"name_gemeinde") %>%
  filter(quartal=="Q4") %>%
  select(jahr,bfs_nr_gemeinde,value=anzahl_gg) %>%
  mutate(value = round(value,0),
         jahr = as.numeric(jahr))


nested_list$`Wirtschaft und Arbeit`[["Grenzgänger/innen"]][["Grenzgänger/innen total"]] <- grenzgaenger_data %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


nested_list$`Wirtschaft und Arbeit`[["Grenzgänger/innen"]][["Anteil Grenzgänger/innen am Total der Beschäftigten"]] <- grenzgaenger_data %>%
  left_join(nested_list$`Wirtschaft und Arbeit`$Beschäftigte$`Beschäftigte total` %>% rename(total = "value"),by = c("bfs_nr_gemeinde","jahr")) %>%
  filter(!is.na(total)) %>%
  mutate(value = value/total*100) %>%
  select(jahr,bfs_nr_gemeinde,value)




## Arbeitslosigkeit --------------------------------------------------------
print("### Arbeitslosigkeit--------------------------------------------------------")

# Warum nirgends veröffentlicht ausser als Internettabelle?


## Neu gegründete Unternehmen ----------------------------------------------

print("### Neu gegründete Unternehmen--------------------------------------------------------")


unternehmen_metadata <- bfs_get_metadata(number_bfs = "px-x-0602030000_205",language="de")


unternehmen_lookup <- tibble(value = unternehmen_metadata$values[[2]],text = unternehmen_metadata$valueTexts[[2]]) %>%
  filter(str_extract(text,"\\d\\d\\d\\d") %in% bezirk_data$bfs_nr_gemeinde)

unternehmen_data <- bfs_get_data("px-x-0602030000_205","de",query=list(Gemeinde = bezirk_data$bfs_nr_gemeinde,Beobachtungseinheit=c("1","2"),
                                                                       Wirtschaftssektor = c("2","3"))) %>%
  mutate(bfs_nr_gemeinde = str_extract(Gemeinde,"\\d\\d\\d\\d")) %>%
  group_by(Jahr,bfs_nr_gemeinde,Beobachtungseinheit) %>%
  summarise(value =sum(`Gründungen, Schliessungen und Bestand aktiver Unternehmen nach Gemeinde und Wirtschaftssektor`,na.rm = T)) %>%
  ungroup()



max_jahr_unternehmen <- max(as.numeric(unternehmen_data$Jahr))
unternehmen_5_jahre <- max_jahr_unternehmen-4


# Test
unternehmen_neu_test <- unternehmen_data %>%
  filter(Beobachtungseinheit =="Unternehmensneugründungen") %>%
  filter(Jahr == max_jahr_unternehmen)

unternehmen_neu <- unternehmen_data %>%
  filter(Beobachtungseinheit =="Unternehmensneugründungen") %>%
  filter(Jahr>=unternehmen_5_jahre) %>%
  group_by(bfs_nr_gemeinde) %>%
  summarise(value = sum(value))

unternehmen_bestand <- unternehmen_data %>%
  filter(Jahr == max_jahr_unternehmen) %>%
  filter(Beobachtungseinheit=="Bestand aktiver Unternehmen") %>%
  select(bfs_nr_gemeinde,value) %>%
  rename(bestand = value) %>%
  left_join(unternehmen_neu,"bfs_nr_gemeinde") %>%
  mutate(value_avg = value/5) %>%
  mutate(rate_kum = value_avg/bestand)


# Zahlen stimmen nicht mit den Werten im Themenatlas überein -> BFS Cube scheint unvollständig


# Bauen und Wohnen --------------------------------------------------------
print("### Bauen und Wohnen--------------------------------------------------------")



## Leerstand Wohnungen -----------------------------------------------------
print("### Leerstand Wohnungen--------------------------------------------------------")




leerstand_id <-catalog %>%
  filter(metas.default.title=="Leerstehende Wohnungen nach Politischer Gemeinde") %>%
  pull(dataset_id)


leerstand <- themenatlas_data_long[[leerstand_id]]

### Leer stehende Wohnungen total --------------------------------------------------------
print("### Leer stehende Wohnungen total--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Leer stehende Wohnungen`[["Leer stehende Wohnungen total"]] <- leerstand %>%
  filter(variable=="leerwhg_anzahl") %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Leerwohnungsziffer --------------------------------------------------------
print("### Leerwohnungsziffer--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Leer stehende Wohnungen`[["Leerwohnungsziffer"]] <- leerstand %>%
  filter(variable=="leerwhg_ziffer") %>%
  select(bfs_nr_gemeinde,jahr,value)


## Bauinvestitionen --------------------------------------------------------
print("### Bauinvestitionen--------------------------------------------------------")

bau1_meta <- bfs_get_metadata("px-x-0904010000_203",language = "de")




reshape_metadata  <- function(metadata){
  names(metadata$values) <- metadata$code
  names(metadata$valueTexts) <- metadata$code

  df1 <- purrr::map2_df(names(metadata$values), metadata$values, ~ tibble(code = .x, value = .y))
  df2 <- purrr::map2_df(names(metadata$valueTexts), metadata$valueTexts, ~ tibble( text = .y))

  bind_cols(df1,df2)


}


bau_meta <- reshape_metadata(bau1_meta)

bau_max_jahr = bau1_meta$valueTexts[[5]] %>% as.numeric() %>% max()

bau_data_full <- bfs_get_data(number_bfs = "px-x-0904010000_203",language = "de",query = list(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`=bezirk_data$bfs_nr_gemeinde,
                                                                                              Jahr = as.character(2013:bau_max_jahr),
                                                                                              `Kategorie der Bauwerke` = c("100","200","300","400","500","600" ,"700","800","900","1000","1100"),
                                                                                              `Art der Auftraggeber`=c("1","2"),
                                                                                              Beobachtungseinheit = c("kost_j")))


bau_data <- bau_data_full %>%
  mutate(bfs_nr_gemeinde = str_extract(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  rename(auftraggeber = "Art der Auftraggeber",
         kategorie = "Kategorie der Bauwerke",
         value = "Bauinvestitionen und Arbeitsvorrat",
         jahr = "Jahr") %>%
  select(jahr,bfs_nr_gemeinde,auftraggeber,kategorie,value)


### Bauinvestitionen nach Kategorie --------------------------------------------------------
print("### Bauinvestitionen nach Kategorie--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$Bauinvestitionen[["Bauinvestitionen nach Kategorie"]] <- bau_data %>%
  group_by(bfs_nr_gemeinde,jahr,kategorie) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  rename(filter1="kategorie") %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(share =value/ sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Bauinvestitionen nach Art der Auftraggeber --------------------------------------------------------
print("### Bauinvestitionen nach Art der Auftraggeber--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$Bauinvestitionen[["Bauinvestitionen nach Art der Auftraggeber"]] <- bau_data %>%
  group_by(bfs_nr_gemeinde,jahr,auftraggeber) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  rename(filter1="auftraggeber") %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(share =value/ sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Bauinvestitionen total --------------------------------------------------------
print("### Bauinvestitionen total--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$Bauinvestitionen[["Bauinvestitionen total"]] <- bau_data %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value))


bau_join <- bau_data %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Bauinvestitionen im Vorjahresvergleich --------------------------------------------------------
print("### Bauinvestitionen Vorjahresvergleich--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$Bauinvestitionen[["Bauinvestitionen im Vorjahresvergleich"]] <- bau_data %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  mutate(jahr = as.numeric(jahr),
         value = as.numeric(value)) %>%
  mutate(ein_jahr = ifelse((jahr-1) >= min(jahr),jahr-1,NA)) %>%
  left_join(bau_join %>%
              rename(value_ein = "value"),by = c("bfs_nr_gemeinde","ein_jahr"="jahr")) %>%
  filter(!is.na(ein_jahr)) %>%
  mutate(share = (value-value_ein)/value_ein*100,
         value = value-value_ein) %>%
  select(jahr,bfs_nr_gemeinde,value,share)


## Gebäude und Wohnungen ---------------------------------------------------
print("### Gebäude und Wohnungenh--------------------------------------------------------")

geb_meta <- bfs_get_metadata("px-x-0902010000_103",language = "de")
geb_meta_re <- reshape_metadata(geb_meta)


geb_lookup <- tibble(value = geb_meta$values[[1]],text = geb_meta$valueTexts[[1]]) %>%
  filter(str_extract(text,"\\d\\d\\d\\d") %in% bezirk_data$bfs_nr_gemeinde)


geb_data_full <- bfs_get_data(number_bfs = "px-x-0902010000_103",language = "de",query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`=geb_lookup$value,
                                                                                              Bauperiode = geb_meta$values[which(geb_meta$code=="Bauperiode")][[1]],
                                                                                              `Gebäudekategorie` = geb_meta$values[which(geb_meta$code=="Gebäudekategorie")][[1]]))


geb_data <- geb_data_full %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(-`Kanton (-) / Bezirk (>>) / Gemeinde (......)`) %>%
  rename(kategorie = "Gebäudekategorie",
         periode = "Bauperiode",
         jahr = "Jahr",
         value = "Gebäude")


### Wohngebäude total --------------------------------------------------------
print("### Wohngebäude total--------------------------------------------------------")



nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohngebäude total"]] <- geb_data %>%
  group_by(jahr,bfs_nr_gemeinde) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Wohngebäude nach Bauperiode --------------------------------------------------------
print("### Wohngebäude nach Bauperiode--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohngebäude nach Bauperiode"]] <- geb_data %>%
  group_by(jahr,bfs_nr_gemeinde,periode) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  rename(filter1 = "periode") %>%
  group_by(jahr,bfs_nr_gemeinde) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Wohngebäude nach Kategorie des Gebäudes --------------------------------------------------------
print("###  Wohngebäude nach Kategorie des Gebäudes--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohngebäude nach Kategorie des Gebäudes"]] <- geb_data %>%
  group_by(jahr,bfs_nr_gemeinde,kategorie) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  rename(filter1 = "kategorie") %>%
  group_by(jahr,bfs_nr_gemeinde) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Neu erstellte Wohngebäude --------------------------------------------------------
print("###  Neu erstellte Wohngebäude--------------------------------------------------------")

neu_wohnung_id <-catalog %>%
  filter(metas.default.title=="Neu erstellte Wohnungen nach Anzahl Zimmer nach Politischer Gemeinde") %>%
  pull(dataset_id)

neu_gebäude_meta <- bfs_get_metadata("px-x-0904030000_106","de")

neu_gebäude_data <- bfs_get_data(number_bfs = "px-x-0904030000_106",language = "de",query = list(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`= bezirk_data$bfs_nr_gemeinde,
                                                                                                 `Gebäudetyp`=neu_gebäude_meta$values[which(neu_gebäude_meta$code=="Gebäudetyp")][[1]])) %>%
  mutate(bfs_nr_gemeinde = str_extract(`Grossregion (<<) / Kanton (-) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  select(-`Grossregion (<<) / Kanton (-) / Gemeinde (......)`) %>%
  rename(value = "Neu erstellte Gebäude mit Wohnungen",
         typ= "Gebäudetyp",
         jahr = "Jahr")

nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Neu erstellte Wohngebäude"]] <- neu_gebäude_data %>%
  filter(str_detect(typ,"Total")) %>%
  select(-typ) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Wohnungen nach Zimmerzahl --------------------------------------------------------
print("###  Wohnungen nach Zimmerzahl--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohnungen nach Zimmerzahl"]] <- all_data[["sk-stat-90"]] %>%
  select(bfs_nr_gemeinde,jahr,`1_zimmerwohnung` :last_col()) %>%
  pivot_longer(cols = `1_zimmerwohnung` :last_col()) %>%
  mutate(filter1 = case_when(
    name %in% c("1_zimmerwohnung","2_zimmerwohnung")~"1-2-Zimmerwohnungen",
    name %in% c("3_zimmerwohnung","4_zimmerwohnung")~"3-4-Zimmerwohnungen",
    name %in% c("5_zimmerwohnung")~"5-Zimmerwohnungen",
    name %in% c("6plus_zimmerwohnung")~"Wohnungen mit 6 und mehr Zimmern",
    TRUE~NA_character_
  )) %>%
  group_by(bfs_nr_gemeinde,jahr,filter1) %>%
  summarise(value = sum(as.numeric(value))) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Wohnungen total --------------------------------------------------------
print("###  Wohnungen total--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohnungen total"]] <- nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohnungen nach Zimmerzahl"]] %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup()

nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Neu erstellte Wohnungen nach Zimmerzahl"]] <- all_data[["sk-stat-92"]] %>%
  select(bfs_nr_gemeinde,jahr,`1_zimmerwohnung` :last_col()) %>%
  pivot_longer(cols = `1_zimmerwohnung` :last_col()) %>%
  mutate(filter1 = case_when(
    name %in% c("1_zimmerwohnung","2_zimmerwohnung")~"1-2-Zimmerwohnungen",
    name %in% c("3_zimmerwohnung","4_zimmerwohnung")~"3-4-Zimmerwohnungen",
    name %in% c("5_zimmerwohnung")~"5-Zimmerwohnungen",
    name %in% c("6plus_zimmerwohnung")~"Wohnungen mit 6 und mehr Zimmern",
    TRUE~NA_character_
  )) %>%
  group_by(bfs_nr_gemeinde,jahr,filter1) %>%
  summarise(value = sum(as.numeric(value))) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Neu erstellte Wohnungen total --------------------------------------------------------
print("###  Neu erstellte Wohnungen total--------------------------------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Neu erstellte Wohnungen total"]] <- nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Neu erstellte Wohnungen nach Zimmerzahl"]] %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value)) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


### Anteil neu erstellter Wohnungen am Wohnungsbestand des Vorjahres --------------------------------------------------------
print("### Anteil neu erstellter Wohnungen am Wohnungsbestand des Vorjahres--------------------------------")


nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Anteil neu erstellter Wohnungen am Wohnungsbestand des Vorjahres"]] <- nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Neu erstellte Wohnungen total"]] %>%
  mutate(ein_jahr = as.numeric(jahr)-1) %>%
  left_join(nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohnungen total"]] %>%
              mutate(jahr = as.numeric(jahr)) %>%
              rename(bestand = "value"),by = c("ein_jahr"="jahr","bfs_nr_gemeinde")) %>%
  mutate(share = value/bestand*100) %>%
  select(bfs_nr_gemeinde,jahr,share) %>%
  rename(value = "share")

energie_geb_meta <- bfs_get_metadata("px-x-0902010000_104","de")


energie_geb_lookup <- tibble(value = energie_geb_meta$values[[1]],text = energie_geb_meta$valueTexts[[1]]) %>%
  filter(str_extract(text,"\\d\\d\\d\\d") %in% bezirk_data$bfs_nr_gemeinde)

energie_geb_data <- bfs_get_data(number = "px-x-0902010000_104", language = "de",
                                 query = list(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`=energie_geb_lookup$value))



### Wohngebäude nach Energiequelle der Heizung --------------------------------------------------------
print("### Wohngebäude nach Energiequelle der Heizung ----------------")

nested_list$`Bauen und Wohnen`$`Gebäude und Wohnungen`[["Wohngebäude nach Energiequelle der Heizung"]] <- energie_geb_data %>%
  mutate(bfs_nr_gemeinde = str_extract(`Kanton (-) / Bezirk (>>) / Gemeinde (......)`,"\\d\\d\\d\\d")) %>%
  rename(jahr = "Jahr",
         value = "Gebäude",
         filter1 = "Energiequelle der Heizung") %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  select(bfs_nr_gemeinde,jahr,filter1,value,share) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)


# Raum und Umwelt ---------------------------------------------------------
print("### Raum und Umwelt -----------------------")


## Flächennutzung ---------------------------------------------------------

print("### Flächennutzung-----------------------")

flaeche_meta <- bfs_get_metadata("px-x-0202020000_102",language = "de")


flaeche_lookup <- tibble(text =flaeche_meta$valueTexts[2][[1]],value = flaeche_meta$values[2][[1]]) %>%
  filter(text %in% c("-a Siedlungsflächen","-b Landwirtschaftsflächen","-c Bestockte Flächen","-d Unproduktive Flächen"))

flaeche_data_raw <- bfs_get_data(number_bfs = "px-x-0202020000_102",language = "de",query = list(`Bezirk (>>) / Gemeinde (......)`=bezirk_data$bfs_nr_gemeinde,
                                                                                                 `Standardnomenklatur (NOAS04)`=flaeche_lookup$value))



flaeche_lookup <- tibble(text =flaeche_meta$valueTexts[2][[1]],value = flaeche_meta$values[2][[1]]) %>%
  filter(text %in% c("-a Siedlungsflächen","-b Landwirtschaftsflächen","-c Bestockte Flächen","-d Unproduktive Flächen"))

# Fläche von Seen
bodensee <- bfs_get_data(number_bfs = "px-x-0202020000_102",language = "de",query = list(`Bezirk (>>) / Gemeinde (......)`=bezirk_data$bfs_nr_gemeinde,
                                                                                         `Standardnomenklatur (NOAS04)`=c("40130000","40140000"))) %>%
  mutate(jahr = case_when(
    Periode == "1979/85"~"1984",
    Periode == "1992/97"~"1996",
    Periode == "2013/18"~"2017",
    Periode == "2004/09"~"2008",
    Periode == "2020/25"~"2024",
    TRUE~Periode
  )) %>%
  mutate(name_gemeinde = str_remove(`Bezirk (>>) / Gemeinde (......)`,"\\.\\.\\.\\.\\.\\.") %>% str_remove("\\(TG\\)") %>% str_trim()) %>%
  mutate(name_gemeinde = case_when(
    str_detect(name_gemeinde,"Basadingen-Schlattin")~"Basadingen-Schlattingen",
    str_detect(name_gemeinde,"Zihlschlacht-Sitterd")~"Zihlschlacht-Sitterdorf",
    TRUE~name_gemeinde
  )) %>%
  left_join(bezirk_data %>%
              select(bfs_nr_gemeinde,name_gemeinde),"name_gemeinde") %>%
  select(-`Bezirk (>>) / Gemeinde (......)`)  %>%
  mutate(filter1 = "Unproduktive Fläche") %>%
  rename(see = "Standardnomenklatur (NOAS04) nach Bezirk und Gemeinde, in Hektaren") %>%
  select(bfs_nr_gemeinde,jahr,filter1,see) %>%
  group_by(bfs_nr_gemeinde,jahr,filter1) %>%
  summarise(see = sum(see)) %>%
  ungroup()

flaeche_data <- flaeche_data_raw %>%
  mutate(name_gemeinde = str_remove(`Bezirk (>>) / Gemeinde (......)`,"\\.\\.\\.\\.\\.\\.") %>% str_remove("\\(TG\\)") %>% str_trim()) %>%
  mutate(name_gemeinde = case_when(
    str_detect(name_gemeinde,"Basadingen-Schlattin")~"Basadingen-Schlattingen",
    str_detect(name_gemeinde,"Zihlschlacht-Sitterd")~"Zihlschlacht-Sitterdorf",
    TRUE~name_gemeinde
  )) %>%
  left_join(bezirk_data %>%
              select(bfs_nr_gemeinde,name_gemeinde),"name_gemeinde") %>%
  select(-`Bezirk (>>) / Gemeinde (......)`) %>%
  mutate(filter1 = case_when(
    str_detect(`Standardnomenklatur (NOAS04)`,"Siedlungsflächen")~"Siedlungsfläche",
    str_detect(`Standardnomenklatur (NOAS04)`,"Bestockte Flächen")~"Waldfläche",
    str_detect(`Standardnomenklatur (NOAS04)`,"Unproduktive Flächen")~"Unproduktive Fläche",
    str_detect(`Standardnomenklatur (NOAS04)`,"Landwirtschaftsflächen")~"Landwirtschaftsfläche",
    TRUE~NA_character_
  )) %>%
  mutate(jahr = case_when(
    Periode == "1979/85"~"1984",
    Periode == "1992/97"~"1996",
    Periode == "2013/18"~"2017",
    Periode == "2004/09"~"2008",
    Periode == "2020/25"~"2024",
    TRUE~Periode
  )) %>%
  rename(value = "Standardnomenklatur (NOAS04) nach Bezirk und Gemeinde, in Hektaren") %>%
  select(bfs_nr_gemeinde,jahr,filter1,value) %>%
  filter(!is.na(value))


landflaeche <- flaeche_data %>%
  left_join(bodensee,by = c("jahr","bfs_nr_gemeinde","filter1")) %>%
  mutate(see = replace_na(see,0)) %>%
  mutate(value = value -see) %>%
  select(-see) %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value))





### Fläche nach Flächenart --------------------------------------------------------
print("### Fläche nach Flächenart -------------------------")


nested_list$`Raum und Umwelt`$Flächennutzung[["Fläche nach Flächenart"]] <- flaeche_data %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  mutate(share = value/sum(value)*100) %>%
  ungroup() %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Fläche total --------------------------------------------------------
print("### Fläche total -------------------------")


nested_list$`Raum und Umwelt`$Flächennutzung[["Fläche total"]] <- flaeche_data %>%
  group_by(bfs_nr_gemeinde,jahr) %>%
  summarise(value = sum(value)) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Landfläche --------------------------------------------------------
print("### Landfläche -----------------------")


nested_list$`Raum und Umwelt`$Flächennutzung[["Landfläche"]] <- landflaeche %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

### Bevölkerungsdichte --------------------------------------------------------
print("### Bevölkerungsdichte -----------------")


nested_list$`Raum und Umwelt`$Flächennutzung[["Bevölkerungsdichte"]] <- nested_list$`Bevölkerung und Soziales`$Bevölkerungsstand$Gesamtbevölkerung %>%
  mutate(match_year = case_when(
    jahr %in% c(2017, 2016, 2015, 2014, 2013, 2012)~"2008",
    jahr >=2018 ~"2017",
    TRUE~"2017"
  )) %>%
  left_join(landflaeche %>% rename(flaeche = "value"),by = c("match_year"="jahr","bfs_nr_gemeinde")) %>%
  mutate(value= value/flaeche) %>%
  select(-c(share,match_year,flaeche))


# Staat und Politik -------------------------------------------------------
print("# Staat und Politik -----------------")


## Grossratswahlen ---------------------------------------------------------
print("## Grossratswahlen --------------")



### Parteistärken -----------------------------------------------------------
print("### Parteistärken ---------------")

parstrk <- all_data[["sk-stat-9"]]

start_index <- which(names(parstrk)=="jahr")

parteien <- readRDS("data/parteien.rds")


nested_list$`Staat und Politik`$Grossratswahlen[["Parteistärken nach Partei"]]  <- parstrk %>%
  pivot_longer(cols= all_of((start_index+1):last_col())) %>%
  left_join(parteien,by = c("name"="abk")) %>%
  mutate(partei_code = case_when(
    name=="uebrige"~"Übrige",
    name=="bdp"~"BDP",
    TRUE~partei_code)) %>%
  mutate(value = as.numeric(value)) %>%
  rename(filter1="partei_code") %>%
  select(bfs_nr_gemeinde,jahr,filter1,value)


### Veränderung Parteistärken im Vorjahresvergleich (%-Punkte) -----------------------------------------------------------
print("### Veränderung Parteistärken im Vorjahresvergleich (%-Punkte)")

nested_list$`Staat und Politik`$Grossratswahlen[["Veränderung Parteistärken im Vorjahresvergleich (%-Punkte)"]] <- nested_list$`Staat und Politik`$Grossratswahlen[["Parteistärken nach Partei"]] %>%
  mutate(jahr = as.numeric(jahr)) %>%   # Ensure 'jahr' is numeric
  group_by(bfs_nr_gemeinde, filter1) %>%  # Group by 'bfs_nr_gemeinde' and 'filter1'
  arrange(desc(jahr), .by_group = TRUE) %>%  # Arrange by 'jahr' within each group
  mutate(lead_value = lead(value)) %>%  # Calculate lagged 'value'
  ungroup() %>%
  mutate(lead_value = case_when(
    is.na(lead_value) & !is.na(value)~0,
    TRUE~lead_value
  )) %>%
  mutate(change = value-lead_value) %>%
  select(bfs_nr_gemeinde,jahr,filter1,change) %>%
  rename(value = "change")



### Wahlbeteiligung -----------------------------------------------------------
print("### Wahlbeteiligung --------")


nested_list$`Staat und Politik`$Grossratswahlen[["Wahlbeteiligung"]] <- all_data[["sk-stat-11"]] %>%
  mutate(value = as.numeric(wahlbeteiligung_in_prozent)) %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  tibble()




## Nationalratswahlen -----------------------------------------------------
print("### Nationalratswahlen --------")

### Parteistärken -----------------------------------------------------------
print("### Parteistärken --------")

nested_list$`Staat und Politik`$Nationalratswahlen[["Parteistärken nach Partei"]] <- all_data[["sk-stat-123"]] %>%
  mutate(value = as.numeric(parteistaerke_percent)) %>%
  rename(filter1 = "partei") %>%
  select(bfs_nr_gemeinde,jahr,filter1,value)


### Veränderung Parteistärken im Vorjahresvergleich (%-Punkte) -----------------------------------------------------------
print("### Veränderung Parteistärken im Vorjahresvergleich (%-Punkte) --------")

nested_list$`Staat und Politik`$Nationalratswahlen[["Veränderung Parteistärken im Vorjahresvergleich (%-Punkte)"]] <- nested_list$`Staat und Politik`$Nationalratswahlen[["Parteistärken nach Partei"]] %>%
  mutate(jahr = as.numeric(jahr)) %>%   # Ensure 'jahr' is numeric
  group_by(bfs_nr_gemeinde, filter1) %>%  # Group by 'bfs_nr_gemeinde' and 'filter1'
  arrange(desc(jahr), .by_group = TRUE) %>%  # Arrange by 'jahr' within each group
  mutate(lead_value = lead(value)) %>%  # Calculate lagged 'value'
  ungroup() %>%
  mutate(lead_value = case_when(
    is.na(lead_value) & !is.na(value)~0,
    TRUE~lead_value
  )) %>%
  mutate(change = value-lead_value) %>%
  select(bfs_nr_gemeinde,jahr,filter1,change) %>%
  rename(value = "change")


### Wahlbeteiligung -----------------------------------------------------------
print("### Wahlbeteiligung --------")

nested_list$`Staat und Politik`$Nationalratswahlen[["Wahlbeteiligung"]] <- all_data[["sk-stat-120"]] %>%
  mutate(value = as.numeric(wahlbeteiligung_percent)) %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  tibble()



## Eidg. Abstimmungen ------------------------------------------------------
print("### Eidg. Abstimmunge --------")

eidg_abst <- all_data[["sk-stat-50"]] %>%
  mutate(tag = as.Date(tag)) %>%
  filter(tag >="2009-01-01") %>%
  mutate(jahr = year(tag)) %>%
  select(bfs_nr_gemeinde,jahr,tag,vorlage_bezeichnung,ja_stimmen,stimmbeteiligung,gueltige_stimmen) %>%
  mutate_at(vars(ja_stimmen,gueltige_stimmen,stimmbeteiligung),as.numeric) %>%
  mutate(anteil_ja_stimmen = ja_stimmen/gueltige_stimmen*100) %>%
  select(-c(gueltige_stimmen,ja_stimmen)) %>%
  pivot_longer(cols = c(anteil_ja_stimmen,stimmbeteiligung)) %>%
  mutate(filter1 = case_when(
    name=="stimmbeteiligung"~"Stimmbeteiligung",
    name=="anteil_ja_stimmen"~"Ja-Stimmenanteil",
  )) %>%
  select(-name)

year_vec <- min(eidg_abst$jahr):max(eidg_abst$jahr)

for (year in year_vec){


  list_name <- paste0(year,": Eidg. Abstimmungen")

  eidg_abst_jahr <- eidg_abst %>%
    filter(jahr == year)

  dist_vorlage <- eidg_abst_jahr %>% distinct(vorlage_bezeichnung,tag)

  for (i in seq_along(dist_vorlage$vorlage_bezeichnung)){
    vorlage_name <- paste0(format(dist_vorlage$tag[i],"%d.%m.%Y"),": ",dist_vorlage$vorlage_bezeichnung[i])
    nested_list$`Staat und Politik`[[list_name]][[vorlage_name]] <- eidg_abst_jahr %>%
      filter(vorlage_bezeichnung==dist_vorlage$vorlage_bezeichnung[i] & tag == dist_vorlage$tag[i]) %>%
      select(bfs_nr_gemeinde,jahr,filter1,value)
  }
}

nested_list$`Staat und Politik`$`2024: Eidgenössische Abstimmungen` <- NULL

nested_list$`Staat und Politik`$`2022: Eidgenössische Abstimmungen` <- NULL
nested_list$`Staat und Politik`$`2021: Eidgenössische Abstimmungen` <- NULL
nested_list$`Staat und Politik`$`2020: Eidgenössische Abstimmungen` <- NULL
nested_list$`Staat und Politik`$`2019: Eidgenössische Abstimmungen` <- NULL
nested_list$`Staat und Politik`$`2019 bis 2022: Kantonale Abstimmungen` <- NULL


## Kantonale Abstimmungen ------------------------------------------------------
print("### Kantonale Abstimmunge --------")

kant_abst <- all_data[["sk-stat-52"]] %>%
  mutate(tag = as.Date(tag)) %>%
  filter(tag >="2009-01-01") %>%
  mutate(jahr = year(tag)) %>%
  select(bfs_nr_gemeinde,jahr,tag,vorlage_bezeichnung,ja_stimmen,stimmbeteiligung,gueltige_stimmen) %>%
  mutate_at(vars(ja_stimmen,gueltige_stimmen,stimmbeteiligung),as.numeric) %>%
  mutate(anteil_ja_stimmen = ja_stimmen/gueltige_stimmen*100) %>%
  select(-c(gueltige_stimmen,ja_stimmen)) %>%
  pivot_longer(cols = c(anteil_ja_stimmen,stimmbeteiligung)) %>%
  mutate(filter1 = case_when(
    name=="stimmbeteiligung"~"Stimmbeteiligung",
    name=="anteil_ja_stimmen"~"Ja-Stimmenanteil",
  )) %>%
  select(-name)



year_vec_kt <- min(kant_abst$jahr):max(kant_abst$jahr)

for (year in year_vec_kt){


  list_name <- paste0(year,": Kantonale Abstimmungen")

  kant_abst_jahr <- kant_abst %>%
    filter(jahr == year)

  dist_vorlage <- kant_abst_jahr %>% distinct(vorlage_bezeichnung,tag)

  for (i in seq_along(dist_vorlage$vorlage_bezeichnung)){
    vorlage_name <- paste0(format(dist_vorlage$tag[i],"%d.%m.%Y"),": ",dist_vorlage$vorlage_bezeichnung[i])
    nested_list$`Staat und Politik`[[list_name]][[vorlage_name]] <- kant_abst_jahr %>%
      filter(vorlage_bezeichnung==dist_vorlage$vorlage_bezeichnung[i] & tag == dist_vorlage$tag[i]) %>%
      select(bfs_nr_gemeinde,jahr,filter1,value)
  }
}


## Steuerkraft und Steuerfüsse ------------------------------------------------------
print("### Steuerkraft und Steuerfüsse --------")





### Gesamtsteuerfuss --------------------------------------------------------
print("### Gesamtsteuerfuss --------")

nested_list$`Staat und Politik`$`Steuerkraft und Steuerfüsse`[["Gesamtsteuerfuss"]] <- all_data[["sk-stat-70"]] %>%
  pivot_longer(cols = c(gesamtsteuerfuss_evang,gesamtsteuerfuss_kath,gesamtsteuerfuss_konfessionslos, gesamtsteuerfuss_jp)) %>%
  mutate(filter1 = case_when(
    name=="gesamtsteuerfuss_evang"~"natürliche Personen evangelisch",
    name=="gesamtsteuerfuss_kath"~"natürliche Personen katholisch",
    name=="gesamtsteuerfuss_konfessionslos"~"natürliche Personen konfessionslos",
    name=="gesamtsteuerfuss_jp"~"juristische Personen",
  )) %>%
  mutate(value = as.numeric(value)) %>%
  select(bfs_nr_gemeinde,jahr,filter1,value) %>%
  summarise_bezirk_kanton(type = "mean",bezirk_data = bezirk_data)


### Gemeindesteuerfuss --------------------------------------------------------
print("### Gemeindesteuerfuss --------")

nested_list$`Staat und Politik`$`Steuerkraft und Steuerfüsse`[["Gemeindesteuerfuss"]] <- all_data[["sk-stat-69"]] %>%
  mutate(value = as.numeric(gemeindesteuerfuss)) %>%
  mutate(jahr = as.numeric(jahr)) %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  summarise_bezirk_kanton(type = "mean",bezirk_data = bezirk_data)


### Veränderung Gemeindesteuerfuss --------------------------------------------------------
print("### Veränderung Gemeindesteuerfuss --------")

nested_list$`Staat und Politik`$`Steuerkraft und Steuerfüsse`[["Veränderung der Gemeindesteuerfüsse im Vergleich zu vor 10 Jahren (%-Punkte)"]] <- nested_list$`Staat und Politik`$`Steuerkraft und Steuerfüsse`[["Gemeindesteuerfuss"]] %>%
  mutate(zehn_jahre = jahr-10) %>%
  left_join(nested_list$`Staat und Politik`$`Steuerkraft und Steuerfüsse`[["Gemeindesteuerfuss"]] %>%
              rename(value_zehn = "value"), by = c("zehn_jahre"="jahr","bfs_nr_gemeinde")) %>%
  filter(!is.na(value_zehn)) %>%
  mutate(change = value-value_zehn) %>%
  select(bfs_nr_gemeinde,jahr,change) %>%
  rename(value = "change")



### Steuerkraft --------------------------------------------------------
print("### Steuerkraft --------")


# Wie berechnen?



## Finanzausgleich ---------------------------------------------------------
print("### Finanzausgleich --------")

nested_list$`Staat und Politik`$Finanzausgleich[["Gesamtauswirkung Finanzausgleich (positive Werte: Abschöpfung, negative Werte: Auszahlung) (CHF)"]] <- all_data[["sk-stat-1"]] %>%
  mutate(value = as.numeric(auszahlung_abschoepfung_in_chf)) %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  summarise_bezirk_kanton(type = "sum",bezirk_data = bezirk_data)

nested_list$`Staat und Politik`$Finanzausgleich[["Gesamtauswirkung Finanzausgleich pro Einwohner (positive Werte: Abschöpfung, negative Werte: Auszahlung) (CHF)"]] <- all_data[["sk-stat-1"]] %>%
  mutate(value = as.numeric(auszahlung_abschoepfung_in_chf_pro_einwohner)) %>%
  select(bfs_nr_gemeinde,jahr,value) %>%
  summarise_bezirk_kanton(type = "mean",bezirk_data = bezirk_data)


# Gemeindefinanzkennzahlen ------------------------------------------------
print("### Gemeindefinanzkennzahlen --------")

nested_list$`Staat und Politik`$Gemeindefinanzkennzahlen[["Gemeindefinanzkennzahlen"]] <- themenatlas_data_long[["sk-stat-4"]] %>%
  mutate(filter1 = case_when(
    variable=="selbstfinanzierungsgrad_in"~"Selbstfinanzierungsgrad in %",
    variable=="selbstfinanzierungsanteil_in"~"Selbstfinanzierungsanteil in %",
    variable=="zinsbelastungsanteil_in"~"Zinsbelastungsanteil in %",
    variable=="kapitaldienstanteil_in"~"Kapitaldienstanteil in %",
    variable=="investitionsanteil_in"~"Investitionsanteil in %",
    variable=="bruttoverschuldungsanteil_in"~"Bruttoverschuldungsanteil in %",
    variable=="nettoschuld_nettovermogen_pro_einwohner_in_chf"~"Nettoschuld (-) / Nettovermögen (+) pro Einwohner in Schweizer Franken",
    variable=="nettoverschuldungsquotient_in"~"Nettoverschuldungsquotient in %",
    variable=="bilanzuberschussquotient_in"~"Bilanzüberschussquotient in %"
  )) %>%
  select(jahr,bfs_nr_gemeinde,filter1,value) %>%
  mutate(jahr = as.numeric(jahr)) %>%
  summarise_bezirk_kanton(type = "mean",bezirk_data = bezirk_data)

saveRDS(nested_list,"data/nested_list.rds")
saveRDS(additional_data,"data/additional_data.rds")
saveRDS(data_source_list,"data/data_source_list.rds")







# Probleme/Offene Fragen --------------------------------------------------

# Probleme
# Durchshcnittliche Haushaltsgrösse geht nicht
# Arbeitslosigkeit: WO sind Daten?
# Pendler: Wo sidn Daten? -> Aus Excel von statistik.tg.ch
# Grenzgänger: Wo sind Daten/ Wie berechnet man diese? -> von BFS
# Arbeitsstätten/Beschäftigte: Warum manchmal % und manchmal %Punkte?
# Neu gegründete Unternehmen: Zahlen stimmen nicht mit den Werten im Themenatlas überein -> BFS Cube scheint unvollständig
# Leer stehende Wohnungen nach Angebot: Daten nicht ohne weiteres auffindbar -> Aus Excel von statistik.tg.ch
# Neu erstellte Wohngebäude: Daten für 2022 unvollständig (zu wenig )
# Neu erstellte Wohnungen: 2020 und 2021 sind Duplikate -> Mail an Manuel gesendet
# Drei-Jahres-Veränderung des Bestands an Gebäuden mit Wohnnutzung (%)2023 für Arbon liegt bei 92% -> die Jahre davor bei 1.4% bzw 0.4%
# Fläche:  wie bekommt man Bodensee weg; Unterschiede in Siedlungsfläche (z.B. Arbon)
# Steuerkraft: Wie wird diese berechnet? -> asu statisttil.tg.ch



