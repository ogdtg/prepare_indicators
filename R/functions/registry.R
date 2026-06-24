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
  .registry_env$items         <- list()
  .registry_env$report        <- list()
  .registry_env$failed_groups <- list()
  invisible(NULL)
}

# Umgebung, in der die Indikatoren gesammelt werden
.registry_env <- new.env(parent = emptyenv())
.registry_env$items         <- list()
.registry_env$report        <- list()
.registry_env$failed_groups <- list()

#' Ergebnis eines Indikator-Versuchs protokollieren
#'
#' @param name      Voller Indikatorname (Hierarchie mit " > " verbunden)
#' @param geo_unit  Geo-Einheit
#' @param status    z.B. "Erfolg", "Fehler", "Fehler (alte Daten verwendet)"
#' @param message   Fehlermeldung (bei Erfolg `NA`)
.record <- function(name, geo_unit, status, message = NA_character_) {
  idx <- length(.registry_env$report) + 1L
  .registry_env$report[[idx]] <- list(
    name     = name,
    geo_unit = geo_unit,
    status   = status,
    message  = as.character(message)
  )
  invisible(NULL)
}

#' Status eines Berichtseintrags aktualisieren (oder neu anlegen)
#'
#' Wird von `save_indicators()` genutzt, um bei fehlgeschlagenen Indikatoren zu
#' vermerken, ob die bestehenden Daten beibehalten werden konnten.
.update_report <- function(name, geo_unit, status, message = NA_character_) {
  rep   <- .registry_env$report
  found <- FALSE
  for (i in seq_along(rep)) {
    if (identical(rep[[i]]$name, name) && identical(rep[[i]]$geo_unit, geo_unit)) {
      rep[[i]]$status  <- status
      rep[[i]]$message <- as.character(message)
      found <- TRUE
    }
  }
  if (!found) {
    rep[[length(rep) + 1L]] <- list(name = name, geo_unit = geo_unit,
                                    status = status, message = as.character(message))
  }
  .registry_env$report <- rep
  invisible(NULL)
}

#' Einen Indikator registrieren
#'
#' Die Berechnung der Daten erfolgt – dank verzögerter Auswertung von R – erst
#' beim Auswerten des `data`-Arguments innerhalb dieser Funktion. Schlägt sie
#' fehl (z.B. weil das BFS einen Datensatz von STAT-TAB in den Swiss Stats
#' Explorer verschoben hat), wird der Indikator als fehlgeschlagen registriert
#' (Daten `NULL`). Beim Speichern werden dann die bereits vorliegenden Daten
#' beibehalten, statt den Datensatz zu verlieren (siehe `save_indicators()`).
#'
#' @param data data.frame des Indikators (wird bei NULL stillschweigend ignoriert)
#' @param ... Hierarchie-Ebenen von oben nach unten, z.B.
#'   "Bevölkerung und Soziales", "Bevölkerungsstand", "Gesamtbevölkerung"
#' @param geo_unit Geo-Einheit (Default "gemeinde")
#' @param source_ids Vektor der Quell-Datensatz-IDs (Metadaten)
register_indicator <- function(data, ..., geo_unit = "gemeinde",
                               source_ids = character(0)) {

  levels <- as.character(c(...))
  levels <- levels[!is.na(levels) & nzchar(levels)]
  name   <- paste(levels, collapse = " > ")

  # Daten-Promise auswerten und Fehler abfangen
  result  <- tryCatch(data, error = function(e) e)
  failed  <- FALSE
  message <- NA_character_

  if (inherits(result, "error")) {
    failed <- TRUE; message <- conditionMessage(result); result <- NULL
  } else if (is.null(result)) {
    return(invisible(NULL))                       # bewusst übersprungen
  } else if (is.data.frame(result) && nrow(result) == 0) {
    failed <- TRUE; message <- "leerer Datensatz"; result <- NULL
  }

  idx <- length(.registry_env$items) + 1L
  .registry_env$items[[idx]] <- list(
    geo_unit   = geo_unit,
    levels     = levels,
    source_ids = source_ids,
    data       = result,                          # NULL bei Fehler -> Altdaten beibehalten
    failed     = failed,
    message    = message
  )
  .record(name, geo_unit, if (failed) "Fehler" else "Erfolg", message)
  invisible(NULL)
}

#' Einen fehlgeschlagenen Indikator registrieren (ohne Daten)
#'
#' Für Helfer, die den Datenbezug ausserhalb von `register_indicator()` machen
#' (z.B. Sektor- oder Schulgemeinde-Indikatoren). Beim Speichern werden die
#' bestehenden Daten beibehalten, sofern vorhanden.
register_failed <- function(geo_unit, levels, source_ids = character(0),
                            message = NA_character_) {
  levels <- as.character(levels)
  levels <- levels[!is.na(levels) & nzchar(levels)]
  name   <- paste(levels, collapse = " > ")

  idx <- length(.registry_env$items) + 1L
  .registry_env$items[[idx]] <- list(
    geo_unit   = geo_unit,
    levels     = levels,
    source_ids = source_ids,
    data       = NULL,
    failed     = TRUE,
    message    = as.character(message)
  )
  .record(name, geo_unit, "Fehler", message)
  invisible(NULL)
}

#' Eine ganze (datengetriebene) Indikator-Gruppe als fehlgeschlagen markieren
#'
#' Wird genutzt, wenn die einzelnen Indikatoren nicht aufzählbar sind, weil sie
#' erst aus den (nicht bezogenen) Daten entstehen – z.B. Abstimmungen. Beim
#' Speichern werden alle bestehenden Datensätze beibehalten, deren Hierarchie zur
#' Gruppe passt (`level_1 == topic` und `level_2` endet auf ": <label>").
#'
#' @param topic Hauptkategorie (level_1)
#' @param label Suffix der Unterkategorie (level_2), z.B. "Eidg. Abstimmungen"
register_failed_group <- function(topic, label, message = NA_character_) {
  idx <- length(.registry_env$failed_groups) + 1L
  .registry_env$failed_groups[[idx]] <- list(
    topic = topic, label = label, message = as.character(message)
  )
  invisible(NULL)
}

#' Eine Folge von Top-Level-Ausdrücken einzeln und fehlertolerant ausführen
#'
#' Jeder Ausdruck (z.B. ein Datenbezug oder ein `register_indicator()`-Aufruf)
#' wird in einem eigenen `tryCatch` ausgeführt. Schlägt einer fehl, wird der
#' Fehler ausgegeben und mit dem nächsten Ausdruck fortgefahren – ein einzelner
#' nicht mehr verfügbarer Datensatz legt damit nicht die ganze Pipeline lahm.
#' Die Erfolgs-/Fehlerbuchhaltung je Indikator erfolgt in `register_indicator()`.
#'
#' @param block Ein in `quote({ ... })` gefasster Block von Ausdrücken
#' @param env   Auswertungsumgebung (Default: aufrufende Umgebung)
run_indicator_steps <- function(block, env = parent.frame()) {
  exprs <- as.list(block)
  if (length(exprs) && identical(exprs[[1]], as.name("{"))) {
    exprs <- exprs[-1]
  }
  for (e in exprs) {
    tryCatch(
      eval(e, envir = env),
      error = function(cond)
        message("Schritt übersprungen (", conditionMessage(cond), ")")
    )
  }
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

#' Hierarchie-Ebenen einer Mapping-Zeile (ohne NA/leer) auslesen
.row_levels <- function(mapping_tbl, i) {
  level_cols <- grep("^level_", names(mapping_tbl), value = TRUE)
  lv <- as.character(unlist(mapping_tbl[i, level_cols], use.names = FALSE))
  lv[!is.na(lv) & nzchar(lv)]
}

#' Quell-Datensatz-IDs einer Mapping-Zeile als Vektor auslesen
.row_sources <- function(mapping_tbl, i) {
  s <- mapping_tbl$source_ids[i]
  if (is.na(s) || !nzchar(s)) return(character(0))
  trimws(strsplit(s, ",")[[1]])
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
#' Schlug der Datenbezug eines Indikators fehl, werden die bereits vorliegenden
#' Daten unverändert beibehalten (gleiche ID, gleicher Inhalt). Im Bericht wird
#' dies als "Fehler (alte Daten verwendet)" festgehalten; existieren keine alten
#' Daten, als "Fehler (keine Daten)". Indikatoren, die gar nicht mehr registriert
#' werden (bewusst entfernt), werden hingegen verworfen.
#'
#' @param base_dir Zielverzeichnis der flachen Datensätze
#' @param catalog OGD-Katalog für die Quellen-Auflösung
#' @param merge_old neue Daten mit dem bestehenden Datensatz zusammenführen?
#' @return (unsichtbar) die Mapping-Tabelle
save_indicators <- function(base_dir, catalog = NULL, merge_old = TRUE) {

  items         <- ordered_items()
  success_items <- Filter(function(x) !isTRUE(x$failed), items)
  failed_items  <- Filter(function(x)  isTRUE(x$failed), items)
  failed_groups <- .registry_env$failed_groups

  # Bestehendes Mapping einlesen, um IDs stabil zu halten und alte Daten
  # wiederzufinden (vor dem Löschen der alten Datensätze).
  mapping_path <- file.path(base_dir, "mapping.rds")
  old_mapping  <- if (file.exists(mapping_path)) readRDS(mapping_path) else NULL

  if (!is.null(old_mapping) && nrow(old_mapping) > 0) {
    old_keys          <- .mapping_keys(old_mapping)
    old_id_num        <- as.integer(sub("^ds_", "", old_mapping$id))
    names(old_id_num) <- old_keys
    max_id            <- max(old_id_num, 0L)
  } else {
    old_keys <- character(0); old_id_num <- integer(0); max_id <- 0L
  }

  success_keys <- vapply(success_items,
                         function(x) .indicator_key(x$geo_unit, x$levels), character(1))

  read_old <- function(id_num) {
    f <- file.path(base_dir, sprintf("ds_%04d.rds", id_num))
    if (!file.exists(f)) return(NULL)
    tryCatch(readRDS(f), error = function(e) NULL)
  }

  # Schreib-Einträge sammeln: list(id_num, geo_unit, levels, source_ids, data)
  entries <- list()
  add_entry <- function(id_num, geo_unit, levels, source_ids, data) {
    entries[[length(entries) + 1L]] <<- list(
      id_num = id_num, geo_unit = geo_unit, levels = levels,
      source_ids = source_ids, data = data
    )
  }

  # 1) Erfolgreiche Indikatoren: stabile IDs, ggf. mit Altdaten zusammengeführt
  next_id <- max_id
  for (it in success_items) {
    key <- .indicator_key(it$geo_unit, it$levels)
    if (key %in% old_keys) {
      id_num <- old_id_num[[key]]
    } else {
      next_id <- next_id + 1L; id_num <- next_id
    }
    data <- if (merge_old) {
      merge_with_old(it$data, file.path(base_dir, sprintf("ds_%04d.rds", id_num)))
    } else {
      it$data
    }
    add_entry(id_num, it$geo_unit, it$levels, it$source_ids, data)
  }

  # 2) Fehlgeschlagene Indikatoren: bestehende Daten unverändert beibehalten
  for (it in failed_items) {
    key  <- .indicator_key(it$geo_unit, it$levels)
    name <- paste(it$levels, collapse = " > ")
    data <- if (key %in% old_keys) read_old(old_id_num[[key]]) else NULL
    if (!is.null(data)) {
      add_entry(old_id_num[[key]], it$geo_unit, it$levels, it$source_ids, data)
      .update_report(name, it$geo_unit, "Fehler (alte Daten verwendet)", it$message)
    } else {
      .update_report(name, it$geo_unit, "Fehler (keine Daten)", it$message)
    }
  }

  # 3) Gruppen-Fehler (z.B. Abstimmungen): alle passenden Altdatensätze beibehalten
  for (grp in failed_groups) {
    suffix     <- paste0(": ", grp$label)
    match_rows <- integer(0)
    if (!is.null(old_mapping) && "level_2" %in% names(old_mapping)) {
      lvl1 <- as.character(old_mapping$level_1)
      lvl2 <- as.character(old_mapping$level_2)
      match_rows <- which(!is.na(lvl1) & lvl1 == grp$topic &
                          !is.na(lvl2) & endsWith(lvl2, suffix))
    }
    n_ret <- 0L
    for (j in match_rows) {
      k <- old_keys[j]
      if (k %in% success_keys) next
      data <- read_old(old_id_num[[k]])
      if (is.null(data)) next
      lvls <- .row_levels(old_mapping, j)
      add_entry(old_id_num[[k]], old_mapping$geo_unit[j], lvls,
                .row_sources(old_mapping, j), data)
      .update_report(paste(lvls, collapse = " > "), old_mapping$geo_unit[j],
                     "Fehler (alte Daten verwendet)", grp$message)
      n_ret <- n_ret + 1L
    }
    if (n_ret == 0L) {
      .update_report(paste(grp$topic, grp$label, sep = " > "), "gemeinde",
                     "Fehler (keine Daten)", grp$message)
    }
  }

  if (length(entries) == 0) {
    warning("save_indicators: keine Datensätze zum Speichern.")
    return(invisible(NULL))
  }

  ids       <- vapply(entries, function(e) sprintf("ds_%04d", e$id_num), character(1))
  data_list <- lapply(entries, `[[`, "data")

  # Bestehende Datensätze entfernen (Daten liegen bereits im Speicher vor)
  if (dir.exists(base_dir)) {
    old <- list.files(base_dir, pattern = "^ds_\\d+\\.rds$", full.names = TRUE)
    file.remove(old)
  }
  dir.create(base_dir, recursive = TRUE, showWarnings = FALSE)

  max_depth <- max(vapply(entries, function(e) length(e$levels), integer(1)))

  rows <- vector("list", length(entries))
  for (i in seq_along(entries)) {
    e  <- entries[[i]]
    id <- ids[i]

    saveRDS(data_list[[i]], file = file.path(base_dir, paste0(id, ".rds")))

    lvl <- e$levels
    length(lvl) <- max_depth                       # NA-Auffüllung

    src <- create_data_source_element(e$source_ids, catalog)

    rows[[i]] <- c(
      list(id = id, geo_unit = e$geo_unit),
      setNames(as.list(lvl), paste0("level_", seq_len(max_depth))),
      list(source_ids  = paste(src$id, collapse = ", "),
           source_urls = paste(src$url, collapse = ", "))
    )
  }

  data_list |>
    setNames(ids) |>
    purrr::map(function(df) {
      # Fehlende Spalten ergänzen
      if (!"filter1" %in% names(df)) df$filter1 <- NA_character_
      if (!"share"   %in% names(df)) df$share   <- NA_real_

      df |>
        dplyr::mutate(
          jahr            = as.character(jahr),
          bfs_nr_gemeinde = as.character(bfs_nr_gemeinde),
          filter1         = as.character(filter1),
          value           = as.numeric(value),
          share           = as.numeric(share)
        )
    }) |>
    dplyr::bind_rows(.id = "dataset_id") |>
    saveRDS(file.path(base_dir, "full.rds"))

  mapping_tbl <- dplyr::bind_rows(lapply(rows, tibble::as_tibble))

  # Nach ID sortieren, damit Reihenfolge stabil und lesbar bleibt
  mapping_tbl <- mapping_tbl[order(as.integer(sub("^ds_", "", mapping_tbl$id))), , drop = FALSE]

  saveRDS(mapping_tbl, file = file.path(base_dir, "mapping.rds"))
  readr::write_csv(mapping_tbl, file = file.path(base_dir, "mapping.csv"))

  invisible(mapping_tbl)
}

#' README-Tabelle aus der gespeicherten Mapping-Tabelle erzeugen
#'
#' Liest die tatsächlich gespeicherte Mapping-Tabelle, damit das README genau
#' die vorhandenen Datensätze widerspiegelt – inklusive solcher, deren Daten bei
#' einem fehlgeschlagenen Lauf unverändert beibehalten wurden.
#'
#' @param catalog (unbenutzt; aus Kompatibilität beibehalten)
#' @param path Zielpfad der README-Datei
#' @param mapping_path Pfad zur gespeicherten Mapping-Tabelle
write_readme <- function(catalog = NULL, path = "README.md",
                         mapping_path = "nested_data/mapping.rds") {

  if (!file.exists(mapping_path)) {
    stop("write_readme: Mapping-Tabelle nicht gefunden: ", mapping_path)
  }
  m <- readRDS(mapping_path)

  lines <- vapply(seq_len(nrow(m)), function(i) {
    lvl       <- .row_levels(m, i)
    topic     <- if (length(lvl) >= 1) lvl[1]           else ""
    indicator <- if (length(lvl) >= 1) lvl[length(lvl)] else ""
    subtopic  <- if (length(lvl) >= 3) lvl[2]           else ""

    ids  <- .row_sources(m, i)
    urls <- {
      u <- m$source_urls[i]
      if (is.na(u) || !nzchar(u)) character(0) else trimws(strsplit(u, ",")[[1]])
    }
    src_str <- if (length(ids) > 0 && length(urls) == length(ids)) {
      paste0("[", ids, "](", urls, ")", collapse = ", ")
    } else if (length(ids) > 0) {
      paste(ids, collapse = ", ")
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

#' Erfolgs-/Fehlerbericht der Indikator-Erstellung als Tabelle
#'
#' @return tibble mit `name`, `geo_unit`, `status` ("Erfolg",
#'   "Fehler (alte Daten verwendet)" oder "Fehler (keine Daten)") und `message`
#'   (Fehlermeldung bzw. `NA`)
indicator_report <- function() {
  rep <- .registry_env$report
  if (length(rep) == 0) {
    return(tibble::tibble(name = character(), geo_unit = character(),
                          status = character(), message = character()))
  }
  dplyr::bind_rows(lapply(rep, tibble::as_tibble))
}

#' Fehlerbericht speichern (RDS) und ans README anhängen
#'
#' Hält fest, welche Indikatoren erfolgreich erstellt werden konnten und welche
#' nicht (inkl. Fehlermeldung). Die fehlgeschlagenen Indikatoren werden als
#' Tabelle prominent ausgewiesen, die erfolgreichen in einem aufklappbaren
#' Abschnitt. `write_readme()` sollte vorher laufen, da diese Funktion den
#' Bericht an das bestehende README anhängt.
#'
#' @param rds_path Zielpfad des RDS-Berichts
#' @param readme_path README, an das der Bericht angehängt wird (NULL = kein README)
#' @return (unsichtbar) die Bericht-Tabelle
save_indicator_report <- function(rds_path    = "nested_data/indicator_report.rds",
                                   readme_path = "README.md") {

  report <- indicator_report()

  dir.create(dirname(rds_path), recursive = TRUE, showWarnings = FALSE)
  saveRDS(report, rds_path)

  if (is.null(readme_path)) return(invisible(report))

  is_ok       <- report$status == "Erfolg"
  is_retained <- report$status == "Fehler (alte Daten verwendet)"
  is_missing  <- !is_ok & !is_retained          # kein Erfolg, keine Altdaten

  n_ok       <- sum(is_ok)
  n_retained <- sum(is_retained)
  n_missing  <- sum(is_missing)

  fail_tbl <- report[!is_ok, , drop = FALSE]
  ok_tbl   <- report[is_ok,  , drop = FALSE]

  # Pipe-Zeichen und Zeilenumbrüche entschärfen, damit die Tabelle gültig bleibt
  clean <- function(x) gsub("\\|", "/", gsub("[\r\n]+", " ", x))

  lines <- c(
    "",
    "## Fehlerbericht Indikator-Erstellung",
    "",
    sprintf("Stand: %s", format(Sys.time(), "%Y-%m-%d %H:%M")),
    "",
    sprintf("- Erfolgreich aktualisiert: **%d**", n_ok),
    sprintf("- Fehlgeschlagen, bestehende Daten beibehalten: **%d**", n_retained),
    sprintf("- Fehlgeschlagen, keine Daten vorhanden: **%d**", n_missing),
    ""
  )

  if (nrow(fail_tbl) > 0) {
    lines <- c(lines,
      "### Nicht aktualisierte Indikatoren",
      "",
      "| Indikator | Geo-Einheit | Status | Fehler |",
      "|-----------|-------------|--------|--------|",
      sprintf("| %s | %s | %s | %s |",
              clean(fail_tbl$name), clean(fail_tbl$geo_unit),
              clean(fail_tbl$status), clean(fail_tbl$message)),
      "")
  } else {
    lines <- c(lines, "Alle Indikatoren konnten erfolgreich aktualisiert werden.", "")
  }

  if (nrow(ok_tbl) > 0) {
    lines <- c(lines,
      "<details><summary>Erfolgreich erstellte Indikatoren</summary>",
      "",
      "| Indikator | Geo-Einheit |",
      "|-----------|-------------|",
      sprintf("| %s | %s |", clean(ok_tbl$name), clean(ok_tbl$geo_unit)),
      "",
      "</details>",
      "")
  }

  cat(paste(lines, collapse = "\n"), file = readme_path, append = TRUE)
  invisible(report)
}
