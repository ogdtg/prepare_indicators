# Datenbezug ---------------------------------------------------------------
#
# Funktionen für den Zugriff auf die OGD-Plattform data.tg.ch sowie die
# STAT-TAB-/PX-Schnittstellen des BFS.

#' Kompletten OGD-Katalog von data.tg.ch beziehen
get_ogd_catalog <- function(domain = "data.tg.ch") {
  res <- httr::GET(paste0("https://", domain, "/api/explore/",
                          "v2.1", "/catalog/exports/json"))
  if (res$status_code != 200) {
    stop(paste0("The API returned an error (HTTP ERROR ",
                res$status_code, ") . Please visit ", domain,
                " for more information"))
  }
  jsonlite::fromJSON(rawToChar(res$content), flatten = TRUE)
}

#' Einen einzelnen Datensatz von data.tg.ch beziehen
get_data_from_ogd <- function(dataset_id, domain = "data.tg.ch") {
  res <- httr::GET(glue::glue("https://{domain}/api/v2/catalog/datasets/{dataset_id}/exports/json"))
  jsonlite::fromJSON(rawToChar(res$content), flatten = TRUE)
}

#' Dataset-ID anhand des Titels im Katalog nachschlagen
lookup_dataset_id <- function(title, catalog) {
  catalog %>%
    filter(metas.default.title == title) %>%
    pull(dataset_id)
}

#' BFS-Daten beziehen (mit kurzer Pause, um die API nicht zu überlasten)
bfs_get_data <- function(...) {
  Sys.sleep(5)
  BFS::bfs_get_data(...)
}

#' STAT-TAB-Metadaten in eine lange Tabelle (code | value | text) umformen
reshape_metadata <- function(metadata) {
  names(metadata$values)     <- metadata$code
  names(metadata$valueTexts) <- metadata$code

  df1 <- purrr::map2_df(names(metadata$values), metadata$values,
                        ~ tibble(code = .x, value = .y))
  df2 <- purrr::map2_df(names(metadata$valueTexts), metadata$valueTexts,
                        ~ tibble(text = .y))

  bind_cols(df1, df2)
}

#' Quellen-URL zu einer Datensatz-ID konstruieren
#'
#' Erkennt automatisch BFS-PX-Datensätze ("px...") und data.tg.ch-Datensätze.
source_url <- function(id) {
  ifelse(str_detect(id, "px"),
         paste0("https://www.pxweb.bfs.admin.ch/pxweb/de/", id, "/-/", id, ".px/"),
         paste0("https://data.tg.ch/explore/dataset/", id, "/table/"))
}

#' Quellenangaben (id / url / titel) zu einem oder mehreren Datensätzen erzeugen
#'
#' @param ids Vektor von Datensatz-IDs
#' @param ods_catalog OGD-Katalog für die Titelauflösung von tg.ch-Datensätzen
#' @param fetch_titles Titel ergänzen? Für BFS-Datensätze ist dazu ein
#'   Netzwerkzugriff nötig; standardmässig aus.
create_data_source_element <- function(ids, ods_catalog = NULL,
                                       fetch_titles = FALSE) {

  url_vec <- if (length(ids)) source_url(ids) else character(0)

  title_vec <- vapply(ids, function(id) {
    if (!fetch_titles) return(id)
    if (str_detect(id, "px")) {
      tryCatch(BFS::bfs_get_catalog_data(order_nr = id)$title,
               error = function(e) id)
    } else if (!is.null(ods_catalog)) {
      ods_catalog$metas.default.title[which(ods_catalog$dataset_id == id)]
    } else {
      id
    }
  }, character(1))

  list(id = as.character(ids), url = url_vec, title = unname(title_vec))
}
