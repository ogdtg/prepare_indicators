# Indikator-Register -------------------------------------------------------
#
# Statt einer verschachtelten Liste (nested_list) wird jeder Indikator als
# eigenständiger Datensatz registriert. Jeder Eintrag besteht aus
#   * den Hierarchie-Ebenen (Hauptkategorie / Unterkategorie / Indikator)
#   * der Geo-Einheit (gemeinde, primarschulgemeinde, ..., zusatzdaten)
#   * den Quell-Datensatz-IDs (Metadaten)
#   * dem eigentlichen data.frame
#
# Beim Speichern wird daraus eine flache Sammlung `ds_XXXX.rds` plus eine
# Mapping-Tabelle erzeugt, über die jeder Datensatz gefunden werden kann.
# Neue Indikatoren werden durch einen zusätzlichen `register_indicator()`-
# Aufruf hinzugefügt, nicht mehr gewünschte durch Entfernen des Aufrufs.

# Reihenfolge der Geo-Einheiten in der Mapping-Tabelle
.geo_unit_order <- c("gemeinde", "zusatzdaten",
                     "primarschulgemeinde", "sekundarschulgemeinde",
                     "volksschulgemeinde")

#' Register (neu) initialisieren
reset_registry <- function() {
  .registry_env$items <- list()
  invisible(NULL)
}

# Umgebung, in der die Indikatoren gesammelt werden
.registry_env <- new.env(parent = emptyenv())
.registry_env$items <- list()

#' Einen Indikator registrieren
#'
#' @param data data.frame des Indikators (wird bei NULL ignoriert)
#' @param ... Hierarchie-Ebenen von oben nach unten, z.B.
#'   "Bevölkerung und Soziales", "Bevölkerungsstand", "Gesamtbevölkerung"
#' @param geo_unit Geo-Einheit (Default "gemeinde")
#' @param source_ids Vektor der Quell-Datensatz-IDs (Metadaten)
register_indicator <- function(data, ..., geo_unit = "gemeinde",
                               source_ids = character(0)) {
  if (is.null(data)) return(invisible(NULL))

  levels <- as.character(c(...))
  levels <- levels[!is.na(levels) & nzchar(levels)]

  idx <- length(.registry_env$items) + 1L
  .registry_env$items[[idx]] <- list(
    geo_unit   = geo_unit,
    levels     = levels,
    source_ids = source_ids,
    data       = data
  )
  invisible(NULL)
}

#' Registrierte Indikatoren in definierter Reihenfolge zurückgeben
#'
#' Gruppiert nach Geo-Einheit (siehe `.geo_unit_order`), innerhalb der Gruppe
#' wird die Registrierungsreihenfolge beibehalten.
ordered_items <- function() {
  items <- .registry_env$items
  if (length(items) == 0) {
    stop("Es wurden keine Indikatoren registriert.")
  }
  geo <- vapply(items, `[[`, character(1), "geo_unit")
  items[order(match(geo, .geo_unit_order), seq_along(items))]
}

#' Alle registrierten Indikatoren als flache Datensätze speichern
#'
#' Erzeugt `ds_XXXX.rds` je Indikator sowie `mapping.rds` / `mapping.csv`
#' mit den Hierarchie-Ebenen, der Geo-Einheit und den Quellenangaben.
#'
#' @return (unsichtbar) die Mapping-Tabelle
save_indicators <- function(base_dir, catalog = NULL) {

  items <- ordered_items()

  if (dir.exists(base_dir)) {
    old <- list.files(base_dir, pattern = "^ds_\\d+\\.rds$", full.names = TRUE)
    file.remove(old)
  }
  dir.create(base_dir, recursive = TRUE, showWarnings = FALSE)

  max_depth <- max(vapply(items, function(x) length(x$levels), integer(1)))

  rows <- vector("list", length(items))

  for (i in seq_along(items)) {
    item <- items[[i]]
    id   <- sprintf("ds_%04d", i)

    saveRDS(item$data, file = file.path(base_dir, paste0(id, ".rds")))

    lvl <- item$levels
    length(lvl) <- max_depth                       # NA-Auffüllung

    src <- create_data_source_element(item$source_ids, catalog)

    rows[[i]] <- c(
      list(id = id, geo_unit = item$geo_unit),
      setNames(as.list(lvl), paste0("level_", seq_len(max_depth))),
      list(source_ids  = paste(src$id, collapse = ", "),
           source_urls = paste(src$url, collapse = ", "))
    )
  }

  mapping_tbl <- dplyr::bind_rows(lapply(rows, tibble::as_tibble))

  saveRDS(mapping_tbl, file = file.path(base_dir, "mapping.rds"))
  readr::write_csv(mapping_tbl, file = file.path(base_dir, "mapping.csv"))

  invisible(mapping_tbl)
}

#' README-Tabelle aus den registrierten Indikatoren erzeugen
#'
#' @param catalog OGD-Katalog für die Titelauflösung der Quellen
#' @param path Zielpfad der README-Datei
write_readme <- function(catalog = NULL, path = "README.md") {

  items <- ordered_items()

  lines <- vapply(items, function(item) {
    lvl       <- item$levels
    topic     <- lvl[1]
    indicator <- lvl[length(lvl)]
    subtopic  <- if (length(lvl) >= 3) lvl[2] else ""

    src <- create_data_source_element(item$source_ids, catalog)
    src_str <- if (length(src$id) > 0) {
      paste0("[", src$id, "](", src$url, ")", collapse = ", ")
    } else {
      ""
    }

    paste(topic, subtopic, indicator, src_str, sep = "|")
  }, character(1))

  header <- paste0("| Hauptkategorie | Unterkategorie | Indikator | Datensatz ID |\n",
                   "|---------------|---------------|-----------|----------------|\n")

  writeLines(paste0(header, paste(lines, collapse = "\n")), path)
  invisible(path)
}
