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

#' Stabiler Identitäts-Schlüssel eines Indikators
#'
#' Ein Indikator wird über seine Geo-Einheit und seine Hierarchie-Ebenen
#' eindeutig identifiziert. Solange sich diese nicht ändern, behält der
#' Indikator beim erneuten Speichern seine bestehende Datensatz-ID.
.indicator_key <- function(geo_unit, levels) {
  levels <- as.character(levels)
  levels <- levels[!is.na(levels) & nzchar(levels)]
  # Unit-Separator (0x1f) als Trenner, der in den Hierarchie-Texten nicht vorkommt
  paste(c(geo_unit, levels), collapse = "")
}

#' Identitäts-Schlüssel je Zeile einer bestehenden Mapping-Tabelle
.mapping_keys <- function(mapping_tbl) {
  level_cols <- grep("^level_", names(mapping_tbl), value = TRUE)
  vapply(seq_len(nrow(mapping_tbl)), function(i) {
    lv <- as.character(unlist(mapping_tbl[i, level_cols], use.names = FALSE))
    .indicator_key(mapping_tbl$geo_unit[i], lv)
  }, character(1))
}

#' Neue Daten mit dem bestehenden Datensatz zusammenführen
#'
#' Bestehende Werte zu Schlüsseln, die in den neuen Daten nicht mehr vorkommen
#' (z.B. weil die Quelle ältere Jahre nicht mehr ausliefert), bleiben erhalten.
#' Schlüssel, die in den neuen Daten vorhanden sind, werden vollständig durch
#' die neuen Werte ersetzt. Zusammengeführt wird über die vorhandenen
#' Schlüsselspalten `bfs_nr_gemeinde`, `jahr` und `filter1`.
#'
#' Statt eines `anti_join` mit anschliessendem `bind_rows` wäre prinzipiell auch
#' `dplyr::rows_upsert()` denkbar; dieses setzt jedoch identische Spalten und
#' eindeutige Schlüssel voraus. Da die Indikatoren unterschiedliche Spalten
#' (mit/ohne `share`, `filter1`, ...) und teils mehrere Zeilen je Schlüssel
#' besitzen, ist der `anti_join`-Ansatz hier robuster und bleibt der Weg der Wahl.
#'
#' @param new_data neu berechneter data.frame des Indikators
#' @param old_path Pfad zum bestehenden `ds_XXXX.rds` (kann fehlen)
merge_with_old <- function(new_data, old_path) {
  if (is.null(new_data) || !file.exists(old_path)) return(new_data)

  old_data <- tryCatch(readRDS(old_path), error = function(e) NULL)
  if (is.null(old_data) || nrow(old_data) == 0) return(new_data)

  keys <- Reduce(intersect, list(c("bfs_nr_gemeinde", "jahr", "filter1"),
                                 names(new_data), names(old_data)))
  if (length(keys) == 0) return(new_data)

  # Schlüsseltypen angleichen, damit der Join nicht an unterschiedlichen
  # Spaltentypen (z.B. jahr als character vs. numeric) scheitert.
  for (k in keys) {
    if (!identical(class(old_data[[k]]), class(new_data[[k]]))) {
      old_data[[k]] <- methods::as(old_data[[k]], class(new_data[[k]])[1])
    }
  }

  retained_old <- dplyr::anti_join(old_data, new_data, by = keys)
  dplyr::bind_rows(new_data, retained_old)
}

#' Alle registrierten Indikatoren als flache Datensätze speichern
#'
#' Erzeugt `ds_XXXX.rds` je Indikator sowie `mapping.rds` / `mapping.csv`
#' mit den Hierarchie-Ebenen, der Geo-Einheit und den Quellenangaben.
#'
#' Datensätze, die bereits beim letzten Lauf existierten (identische
#' Geo-Einheit und Hierarchie-Ebenen), behalten ihre bestehende ID. Neue
#' Indikatoren erhalten fortlaufende neue IDs oberhalb der bisher höchsten ID.
#' Ist `merge_old = TRUE`, werden die neuen Daten zudem mit dem bestehenden
#' Datensatz zusammengeführt, sodass nicht mehr gelieferte (z.B. ältere) Jahre
#' erhalten bleiben (siehe `merge_with_old()`).
#'
#' @param base_dir Zielverzeichnis der flachen Datensätze
#' @param catalog OGD-Katalog für die Quellen-Auflösung
#' @param merge_old neue Daten mit dem bestehenden Datensatz zusammenführen?
#' @return (unsichtbar) die Mapping-Tabelle
save_indicators <- function(base_dir, catalog = NULL, merge_old = TRUE) {

  items <- ordered_items()

  # Bestehendes Mapping einlesen, um IDs stabil zu halten und alte Daten
  # wiederzufinden (vor dem Löschen der alten Datensätze).
  mapping_path <- file.path(base_dir, "mapping.rds")
  old_mapping  <- if (file.exists(mapping_path)) readRDS(mapping_path) else NULL

  if (!is.null(old_mapping) && nrow(old_mapping) > 0) {
    old_id_num        <- as.integer(sub("^ds_", "", old_mapping$id))
    names(old_id_num) <- .mapping_keys(old_mapping)
    max_id            <- max(old_id_num, 0L)
  } else {
    old_id_num <- integer(0)
    max_id     <- 0L
  }

  # IDs zuweisen: bestehende Indikatoren behalten ihre ID, neue erhalten
  # fortlaufende IDs oberhalb der bisher höchsten ID.
  next_id <- max_id
  ids_num <- integer(length(items))
  for (i in seq_along(items)) {
    key <- .indicator_key(items[[i]]$geo_unit, items[[i]]$levels)
    if (key %in% names(old_id_num)) {
      ids_num[i] <- old_id_num[[key]]
    } else {
      next_id    <- next_id + 1L
      ids_num[i] <- next_id
    }
  }
  ids <- sprintf("ds_%04d", ids_num)

  # Daten (ggf. mit Altdaten zusammengeführt) in den Speicher laden, bevor die
  # bestehenden Datensätze entfernt werden.
  data_list <- vector("list", length(items))
  for (i in seq_along(items)) {
    new_data <- items[[i]]$data
    data_list[[i]] <- if (merge_old) {
      merge_with_old(new_data, file.path(base_dir, paste0(ids[i], ".rds")))
    } else {
      new_data
    }
  }

  if (dir.exists(base_dir)) {
    old <- list.files(base_dir, pattern = "^ds_\\d+\\.rds$", full.names = TRUE)
    file.remove(old)
  }
  dir.create(base_dir, recursive = TRUE, showWarnings = FALSE)

  max_depth <- max(vapply(items, function(x) length(x$levels), integer(1)))

  rows <- vector("list", length(items))

  for (i in seq_along(items)) {
    item <- items[[i]]
    id   <- ids[i]

    saveRDS(data_list[[i]], file = file.path(base_dir, paste0(id, ".rds")))

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
