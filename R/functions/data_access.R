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


get_pendler_data <- function(raw_url = "https://dam-api.bfs.admin.ch/hub/api/dam/assets/27885394/master") {

  raw <- readr::read_csv(raw_url, show_col_types = FALSE)
  tg_gemeinden <- bezirk_data$bfs_nr_gemeinde

  zupendler <- raw |>
    dplyr::filter(
      PERSPECTIVE == "W",
      GEO_CANT_WORK == 20,
      GEO_COMM_WORK %in% tg_gemeinden,
      GEO_COMM_RESID != GEO_COMM_WORK
    ) |>
    dplyr::group_by(bfs_nr_gemeinde = GEO_COMM_WORK, jahr = REF_YEAR) |>
    dplyr::summarise(value = sum(VALUE, na.rm = TRUE), .groups = "drop")

  wegpendler <- raw |>
    dplyr::filter(
      PERSPECTIVE == "R",
      GEO_CANT_RESID == 20,
      GEO_COMM_RESID %in% tg_gemeinden,
      GEO_COMM_RESID != GEO_COMM_WORK
    ) |>
    dplyr::group_by(bfs_nr_gemeinde = GEO_COMM_RESID, jahr = REF_YEAR) |>
    dplyr::summarise(value = sum(VALUE, na.rm = TRUE), .groups = "drop")

  binnenpendler <- raw |>
    dplyr::filter(
      PERSPECTIVE == "R",
      GEO_CANT_RESID == 20,
      GEO_COMM_RESID %in% tg_gemeinden,
      GEO_COMM_RESID == GEO_COMM_WORK
    ) |>
    dplyr::group_by(bfs_nr_gemeinde = GEO_COMM_RESID, jahr = REF_YEAR) |>
    dplyr::summarise(value = sum(VALUE, na.rm = TRUE), .groups = "drop")

  pendlersaldo <- zupendler |>
    dplyr::rename(zu = value) |>
    dplyr::left_join(wegpendler  |> dplyr::rename(weg    = value), by = c("jahr", "bfs_nr_gemeinde")) |>
    dplyr::left_join(binnenpendler |> dplyr::rename(binnen = value), by = c("jahr", "bfs_nr_gemeinde")) |>
    dplyr::mutate(
      pendlersaldo       = zu - weg,
      pendlersaldo_quote = pendlersaldo / (binnen + weg) * 100,
      wegpendler_quote   = weg          / (binnen + weg) * 100,
      zupendler_quote    = zu           / (binnen + zu)  * 100
    )

  list(
    anzahl_binnenpendler = binnenpendler |> dplyr::arrange(bfs_nr_gemeinde, jahr),
    anzahl_zupendler    = zupendler |> dplyr::arrange(bfs_nr_gemeinde, jahr),
    anzahl_wegpendler   = wegpendler |> dplyr::arrange(bfs_nr_gemeinde, jahr),
    zupendlerquote      = pendlersaldo |> dplyr::select(bfs_nr_gemeinde, jahr, value = zupendler_quote),
    wegpendlerquote     = pendlersaldo |> dplyr::select(bfs_nr_gemeinde, jahr, value = wegpendler_quote),
    pendlersaldoquote   = pendlersaldo |> dplyr::select(bfs_nr_gemeinde, jahr, value = pendlersaldo_quote)
  )
}

get_maps_indicator <- function(base_url,indic, dataset, view, start_jahr = NULL) {

  safe_get <- function(url) {
    res <- httr::GET(url)
    if (httr::status_code(res) != 200) {
      message("API-Fehler (", httr::status_code(res), ") für URL: ", url)
      return(NULL)
    }
    httr::content(res)
  }


  if (grepl("themenatlas",base_url)){
    data_geo <- safe_get(
      "https://themenatlas-tg.ch/GC_refdata.php?nivgeo=gde&extent=extent0&lang=de"
    )
    filter_name <- "jahr"
  } else {
    data_geo <- safe_get(
      "https://mapexplorer.bfs.admin.ch/GC_refdata.php?nivgeo=polg2024_01_01&extent=ch&lang=de&obs=main"
    )
    filter_name <- "annee"

  }




  build_url <- function(jahr = NULL) {
    filter_param <- if (!is.null(jahr)) paste0("&filters=",filter_name,"=", jahr) else ""
    paste0(
      base_url,
      "?indic=", indic,
      "&dataset=", dataset,
      "&view=", view,
      filter_param,
      "&lang=de&obs=main"
    )
  }




  # Geodaten einmal holen

  if (is.null(data_geo)) return(NULL)

  values_geo <- data_geo$content$territories$codgeo |> unlist()

  # Hilfsfunktion: Daten für einen Mod holen
  fetch_mod <- function(data, mod = NULL, col_name = "zeitraum") {
    values <- data$content$distribution$values |> unlist()
    df <- dplyr::tibble(
      bfs_nr_gemeinde = values_geo,
      value           = values
    ) |>
      dplyr::filter(bfs_nr_gemeinde %in% bezirk_data$bfs_nr_gemeinde)

    if (!is.null(mod)) df[[col_name]] <- as.character(mod)
    df
  }

  # Kein Jahresfilter – einmaliger Call, kein Jahr im Output
  if (is.null(start_jahr)) {
    data <- safe_get(build_url())
    if (is.null(data)) return(NULL)
    return(fetch_mod(data))
  }

  # Mit Jahresfilter – ersten Call mit start_jahr
  data_first <- safe_get(build_url(start_jahr))

  # Fallback ohne Jahr wenn start_jahr nicht funktioniert
  if (is.null(data_first)) {
    message("Kein Jahresfilter verfügbar für '", indic, "' – versuche ohne Jahr.")
    data_first <- safe_get(build_url())
    if (is.null(data_first)) return(NULL)
    return(fetch_mod(data_first))
  }

  # Verfügbare Mods auslesen
  alle_mods <- data_first$content$options$axisAvailableMods[[filter_name]] |>
    unlist() |>
    trimws()

  verfuegbare_jahre <- alle_mods |>
    (\(x) x[!is.na(suppressWarnings(as.integer(x)))])() |>
    as.integer() |>
    (\(x) x[x >= start_jahr])()

  perioden <- alle_mods[is.na(suppressWarnings(as.integer(alle_mods)))]

  # Nur Perioden vorhanden (z.B. "2010-2020")
  if (length(verfuegbare_jahre) == 0 && length(perioden) > 0) {
    message("Indikator: ", indic, " | Verfügbare Perioden: ", paste(perioden, collapse = ", "))

    result <- purrr::map(perioden, function(periode) {
      data <- if (periode == perioden[1]) {
        data_first
      } else {
        safe_get(build_url(URLencode(periode)))
      }
      if (is.null(data)) return(NULL)
      fetch_mod(data, mod = periode)
    })

    if (any(purrr::map_lgl(result, is.null))) return(NULL)
    return(dplyr::bind_rows(result))
  }

  # Keine Mods gefunden – einmaliger Call ohne Filter
  if (length(verfuegbare_jahre) == 0) {
    message("Keine verfügbaren Mods für '", indic, "' – versuche ohne Filter.")
    data_noyear <- safe_get(build_url())
    if (is.null(data_noyear)) return(NULL)
    return(fetch_mod(data_noyear))
  }

  # Jahreswerte iterieren
  message("Indikator: ", indic, " | Verfügbare Jahre: ", paste(verfuegbare_jahre, collapse = ", "))

  result <- purrr::map(verfuegbare_jahre, function(jahr) {
    data <- if (jahr == verfuegbare_jahre[1]) {
      data_first
    } else {
      safe_get(build_url(jahr))
    }
    if (is.null(data)) return(NULL)
    fetch_mod(data, mod = jahr, col_name = "zeitraum")
  })

  if (any(purrr::map_lgl(result, is.null))) return(NULL)
  dplyr::bind_rows(result)
}



get_swiss_maps_indicator <- function(...) {

  get_maps_indicator(base_url = "https://mapexplorer.bfs.admin.ch/GC_indic.php",...)
}


get_tg_maps_indicator <- function(...) {

  get_maps_indicator(base_url = "https://themenatlas-tg.ch/GC_indic.php",...)
}




parse_indicator <- function(ind) {
  dplyr::tibble(
    id_indicator = ind$c_id_indicateur  %||% NA_character_,
    id_dataset   = ind$c_id_dataset     %||% NA_character_,
    name         = ind$c_lib_indicateur %||% NA_character_,
    beschreibung = ind$c_desc_indicateur %||% NA_character_,
    datenquelle  = ind$c_source          %||% NA_character_,
    mods         = list(unlist(ind$mods)),
    nivgeos      = list(unlist(ind$nivgeos)),
    views        = list(unlist(ind$c_id_view)),
    pie          = if (is.null(ind$isPie)) 0L else ind$isPie
  )
}





get_all_gemeinde_indicators <- function(type){

  if (type=="bfs"){
    base_url <- "https://mapexplorer.bfs.admin.ch/GC_listIndics.php?lang=de&obs=main"
    geo <- "polg2024_01_01"
  } else if (type == "tg"){
    base_url <- "https://themenatlas-tg.ch/GC_listIndics.php?lang=de&obs=main"
    geo <- "gde"

  }

  res <- httr::GET(base_url)
  all_indic <- httr::content(res)



  purrr::map(all_indic$content$indics, parse_indicator) |>
    dplyr::bind_rows() |>
    dplyr::filter(purrr::map_lgl(nivgeos, ~ geo %in% .x))
}




