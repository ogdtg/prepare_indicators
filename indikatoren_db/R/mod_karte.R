#' karte UI-Funktion
#'
#' @description Ein Shiny-Modul, das eine Choroplethenkarte der Thurgauer
#'   Indikatoren rendert. Die Seitenleiste enthaelt eine kaskadierende
#'   Filterkette (level_1 -> level_2 -> level_3 -> geo_unit), gefolgt von
#'   Jahr-, Wert-Typ- und (falls vorhanden) Kategorie-Auswahl sowie einem
#'   Button, der das Rendern ausloest.
#'
#' @param id Interne Parameter fuer {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList selectInput actionButton conditionalPanel
mod_karte_ui <- function(id) {
  ns <- shiny::NS(id)

  bslib::card(
    full_screen = TRUE,
    bslib::card_header("Indikatorenkarte Kanton Thurgau"),
    bslib::layout_sidebar(
      sidebar = bslib::sidebar(
        title = "Auswahl",
        width = 320,
        shiny::selectInput(
          ns("level_1"),
          label   = "Thema",
          choices = character(0)
        ),
        shiny::selectInput(
          ns("level_2"),
          label   = "Unterthema",
          choices = character(0)
        ),
        shiny::conditionalPanel(
          condition = "output.has_level_3 == true",
          ns        = ns,
          shiny::selectInput(
            ns("level_3"),
            label   = "Indikator",
            choices = character(0)
          )
        ),
        shiny::selectInput(
          ns("geo_unit"),
          label   = "Raumebene",
          choices = character(0)
        ),
        shiny::selectInput(
          ns("jahr"),
          label   = "Jahr",
          choices = character(0)
        ),
        shiny::selectInput(
          ns("value_type"),
          label   = "Werttyp",
          choices = c("Wert" = "value")
        ),
        shiny::conditionalPanel(
          condition = "output.has_filter1 == true",
          ns        = ns,
          shiny::selectInput(
            ns("filter1"),
            label   = "Kategorie",
            choices = character(0)
          )
        ),
        shiny::actionButton(
          ns("anzeigen"),
          label = "Anzeigen",
          class = "btn-primary"
        )
      ),
      echarts4r::echarts4rOutput(ns("map"), height = "600px")
    )
  )
}

#' karte Server-Funktion
#'
#' @noRd
#'
#' @importFrom shiny moduleServer reactive reactiveVal eventReactive
#'   observeEvent updateSelectInput req validate need isolate outputOptions
mod_karte_server <- function(id) {
  shiny::moduleServer(id, function(input, output, session) {
    ns <- session$ns

    # ------------------------------------------------------------------
    # Mapping einmalig laden (kleine Datei)
    # ------------------------------------------------------------------
    mapping <- read_mapping()

    # geo_unit -> Datei in daten/geo (data/geo)
    GEO_FILES <- c(
      gemeinde              = "gemeindegrenzen.rds",
      primarschulgemeinde   = "psg.rds",
      sekundarschulgemeinde = "ssg.rds",
      volksschulgemeinde    = "vsg.rds",
      zusatzdaten           = "gemeindegrenzen.rds"
    )

    # Hat der aktuelle Datensatz eine filter1-Kategorie?
    has_filter1 <- shiny::reactiveVal(FALSE)
    # Hat die aktuelle level_2-Auswahl Indikatoren (level_3)?
    has_level_3 <- shiny::reactiveVal(FALSE)

    output$has_filter1 <- shiny::reactive(has_filter1())
    output$has_level_3 <- shiny::reactive(has_level_3())
    shiny::outputOptions(output, "has_filter1", suspendWhenHidden = FALSE)
    shiny::outputOptions(output, "has_level_3", suspendWhenHidden = FALSE)

    # Titel der Karte aus der aktuellen Auswahl
    map_title <- shiny::reactive({
      parts <- c(input$level_1, input$level_2)
      if (has_level_3()) parts <- c(parts, input$level_3)
      paste(parts[nzchar(parts)], collapse = " / ")
    })

    # ------------------------------------------------------------------
    # Kaskade: level_1 -> level_2 -> level_3 -> geo_unit
    #   Es wird ausschliesslich beim Wechsel des Eltern-Inputs aktualisiert.
    # ------------------------------------------------------------------

    # Startwerte fuer level_1
    shiny::updateSelectInput(
      session, "level_1",
      choices = sort(unique(stats_na(mapping$level_1)))
    )

    shiny::observeEvent(input$level_1, {
      rows <- mapping[eq(mapping$level_1, input$level_1), , drop = FALSE]
      shiny::updateSelectInput(
        session, "level_2",
        choices = sort(unique(stats_na(rows$level_2)))
      )
    })

    shiny::observeEvent(input$level_2, {
      rows <- mapping[
        eq(mapping$level_1, input$level_1) &
          eq(mapping$level_2, input$level_2), , drop = FALSE
      ]
      l3 <- sort(unique(stats_na(rows$level_3)))

      if (length(l3) > 0) {
        has_level_3(TRUE)
        shiny::updateSelectInput(session, "level_3", choices = l3)
        # geo_unit wird durch den level_3-Observer aktualisiert
      } else {
        has_level_3(FALSE)
        # Kein Indikator -> geo_unit direkt aus level_1 + level_2 ableiten
        shiny::updateSelectInput(
          session, "geo_unit",
          choices = sort(unique(stats_na(rows$geo_unit)))
        )
      }
    })

    shiny::observeEvent(input$level_3, {
      rows <- mapping[
        eq(mapping$level_1, input$level_1) &
          eq(mapping$level_2, input$level_2) &
          eq(mapping$level_3, input$level_3), , drop = FALSE
      ]
      shiny::updateSelectInput(
        session, "geo_unit",
        choices = sort(unique(stats_na(rows$geo_unit)))
      )
    })

    # ------------------------------------------------------------------
    # Aktuell ausgewaehlte Datensatz-ID (rein aus dem Mapping, ohne Laden)
    # ------------------------------------------------------------------
    selected_id <- shiny::reactive({
      shiny::req(input$level_1, input$level_2, input$geo_unit)
      keep <- eq(mapping$level_1, input$level_1) &
        eq(mapping$level_2, input$level_2) &
        eq(mapping$geo_unit, input$geo_unit)
      if (has_level_3()) {
        shiny::req(input$level_3)
        keep <- keep & eq(mapping$level_3, input$level_3)
      }
      rows <- mapping[keep, , drop = FALSE]
      shiny::req(nrow(rows) > 0)
      rows$id[1]
    })

    # ------------------------------------------------------------------
    # Datensatz erst beim Klick auf "Anzeigen" laden (eventReactive)
    # ------------------------------------------------------------------
    dataset <- shiny::eventReactive(input$anzeigen, {
      id <- selected_id()
      shiny::req(id)
      path <- file.path(karte_data_dir("nested"), paste0(id, ".rds"))
      shiny::validate(shiny::need(file.exists(path), "Datensatz nicht gefunden."))
      readRDS(path)
    })

    # Nach dem Laden: Jahr, Werttyp und (optional) Kategorie befuellen
    shiny::observeEvent(dataset(), {
      df <- dataset()

      jahre <- sort(unique(df$jahr), decreasing = TRUE)
      shiny::updateSelectInput(
        session, "jahr",
        choices = jahre, selected = jahre[1]
      )

      vt <- c("Wert" = "value")
      if ("share" %in% names(df)) vt <- c(vt, "Anteil" = "share")
      shiny::updateSelectInput(
        session, "value_type",
        choices = vt, selected = "value"
      )

      if ("filter1" %in% names(df)) {
        kat <- as.character(sort(unique(df$filter1)))
        has_filter1(TRUE)
        shiny::updateSelectInput(
          session, "filter1",
          choices = kat, selected = kat[1]
        )
      } else {
        has_filter1(FALSE)
      }
    })

    # ------------------------------------------------------------------
    # Geodaten nur bei Wechsel der Raumebene laden und cachen
    # ------------------------------------------------------------------
    geo <- shiny::reactive({
      shiny::req(input$geo_unit)
      file <- GEO_FILES[[input$geo_unit]]
      shiny::validate(shiny::need(!is.null(file), "Keine Geometrie verfuegbar."))
      path <- file.path(karte_data_dir("geo"), file)
      shiny::validate(shiny::need(file.exists(path), "Geometrie nicht gefunden."))
      g <- readRDS(path)
      list(
        geojson = sf_to_geojson(g),
        lookup  = data.frame(
          bfsnr  = as.character(g$bfsnr),
          region = as.character(g$name),
          stringsAsFactors = FALSE
        )
      )
    }) |>
      shiny::bindCache(input$geo_unit)

    # ------------------------------------------------------------------
    # Vollstaendiges Rendern: nur bei Datensatz- oder Geometriewechsel
    #   (ausgeloest durch den "Anzeigen"-Button via dataset()).
    #   Jahr / Werttyp / Kategorie werden isoliert gelesen.
    # ------------------------------------------------------------------
    output$map <- echarts4r::renderEcharts4r({
      df <- dataset()
      # Geometrie isoliert lesen: ein reiner geo_unit-Wechsel soll kein
      # Full-Re-Render gegen einen veralteten Datensatz ausloesen. Das
      # Voll-Rendern wird ausschliesslich durch den Button (dataset()) ge-
      # triggert; die Geometrie wird per bindCache(input$geo_unit) gecacht.
      g  <- shiny::isolate(geo())

      year       <- shiny::isolate(input$jahr)
      value_col  <- shiny::isolate(input$value_type)
      kat        <- shiny::isolate(input$filter1)

      # Falls die selectInputs noch nicht befuellt sind, sinnvolle Defaults
      if (is.null(year) || !nzchar(year)) {
        year <- as.character(max(df$jahr, na.rm = TRUE))
      }
      if (is.null(value_col) || !nzchar(value_col)) value_col <- "value"

      plot_df <- build_plot_df(df, g$lookup, year, value_col, kat)

      make_map(
        plot_df  = plot_df,
        map_name = input$geo_unit,
        geojson  = g$geojson,
        title    = map_title(),
        year     = year,
        label    = value_label(value_col),
        proxy    = NULL
      )
    })

    # ------------------------------------------------------------------
    # Partielles Update via echartProxy: nur Jahr / Werttyp / Kategorie
    #   (Geometrie bleibt registriert -> kein Full-Re-Render).
    # ------------------------------------------------------------------
    shiny::observeEvent(
      list(input$jahr, input$value_type, input$filter1),
      {
        df <- dataset()
        g  <- geo()
        shiny::req(df, g, input$jahr, input$value_type)

        plot_df <- build_plot_df(
          df, g$lookup, input$jahr, input$value_type, input$filter1
        )

        make_map(
          plot_df  = plot_df,
          map_name = input$geo_unit,
          geojson  = g$geojson,
          title    = map_title(),
          year     = input$jahr,
          label    = value_label(input$value_type),
          proxy    = ns("map")
        )
      },
      ignoreInit = TRUE
    )
  })
}

# ====================================================================
# Hilfsfunktionen (intern)
# ====================================================================

#' Verzeichnis der gebuendelten Daten ermitteln
#'
#' Bevorzugt die im Paket gebuendelten Daten (inst/extdata), faellt aber
#' auf projekt-relative Pfade zurueck, damit die App auch direkt aus dem
#' Repository (run_dev) funktioniert.
#'
#' @param which "nested" oder "geo"
#' @noRd
karte_data_dir <- function(which = c("nested", "geo")) {
  which <- match.arg(which)
  candidates <- if (which == "nested") {
    c(
      app_sys("extdata/nested_data"),
      "nested_data",
      "../nested_data"
    )
  } else {
    c(
      app_sys("extdata/geo"),
      "data/geo",
      "../data/geo",
      "daten/geo",
      "../daten/geo"
    )
  }
  for (p in candidates) {
    if (nzchar(p) && dir.exists(p)) return(p)
  }
  candidates[[which.max(nchar(candidates))]]
}

#' Mapping-Tabelle laden
#' @noRd
read_mapping <- function() {
  path <- file.path(karte_data_dir("nested"), "mapping.csv")
  utils::read.csv(
    path,
    stringsAsFactors = FALSE,
    check.names      = FALSE,
    encoding         = "UTF-8",
    na.strings       = c("NA", "")
  )
}

#' NA-sichere Gleichheit fuer das Filtern des Mappings
#' @noRd
eq <- function(x, y) {
  !is.na(x) & x == y
}

#' NA-Werte entfernen (Hilfsfunktion fuer Choices)
#' @noRd
stats_na <- function(x) {
  x[!is.na(x)]
}

#' Beschriftung fuer den gewaehlten Werttyp
#' @noRd
value_label <- function(value_col) {
  if (identical(value_col, "share")) "Anteil" else "Wert"
}

#' Datensatz auf Jahr/Kategorie filtern und mit Geometrie verknuepfen
#'
#' @return data.frame mit Spalten `region` (Gemeindename) und `wert`.
#' @noRd
build_plot_df <- function(df, lookup, year, value_col, kat) {
  d <- df[as.character(df$jahr) == as.character(year), , drop = FALSE]

  if ("filter1" %in% names(df) && !is.null(kat) && nzchar(kat)) {
    d <- d[as.character(d$filter1) == as.character(kat), , drop = FALSE]
  }

  if (!value_col %in% names(d)) value_col <- "value"

  vals <- data.frame(
    bfsnr = as.character(d$bfs_nr_gemeinde),
    wert  = suppressWarnings(as.numeric(d[[value_col]])),
    stringsAsFactors = FALSE
  )
  # Doppelte bfsnr (z.B. fehlende Kategorie) zusammenfassen
  vals <- vals[!duplicated(vals$bfsnr), , drop = FALSE]

  m <- merge(lookup, vals, by = "bfsnr", all.x = TRUE)
  data.frame(region = m$region, wert = m$wert, stringsAsFactors = FALSE)
}

#' Sequentielle Farbpalette aus tgdashboard (mit Fallback)
#' @noRd
seq_palette <- function() {
  pal <- tryCatch(tgdashboard::tg_choro_seq()$blue_green_6,
                  error = function(e) NULL)
  if (is.null(pal) || !length(pal)) {
    pal <- c("#deecfd", "#a8c8e6", "#6fa3c8", "#327a1e", "#1b6b2b", "#12531b")
  }
  pal
}

#' Tooltip-Formatter (Gemeindename + Wert + Jahr)
#' @noRd
tooltip_formatter <- function(year, label) {
  htmlwidgets::JS(sprintf(
    paste0(
      "function(params){",
      "var v = (params.value === null || params.value === undefined || ",
      "(typeof params.value === 'number' && isNaN(params.value))) ? ",
      "'k. A.' : (typeof params.value === 'number' ? ",
      "params.value.toLocaleString('de-CH') : params.value);",
      "return '<b>' + params.name + '</b><br/>%s: ' + v + '<br/>Jahr: %s';}"
    ),
    label, year
  ))
}

#' Choroplethenkarte erstellen (Voll-Render oder Proxy-Update)
#'
#' @param proxy NULL fuer vollstaendiges Rendern, sonst die (namespaced)
#'   Output-ID fuer ein partielles Update via echartProxy.
#' @noRd
make_map <- function(plot_df, map_name, geojson, title, year, label,
                     proxy = NULL) {
  pal <- seq_palette()

  if (is.null(proxy)) {
    # Vollstaendiges Rendern inkl. Registrierung der Geometrie
    plot_df |>
      echarts4r::e_charts(region) |>
      echarts4r::e_map_register(map_name, geojson) |>
      echarts4r::e_map(wert, map = map_name, name = label) |>
      echarts4r::e_visual_map(
        wert,
        inRange    = list(color = pal),
        calculable = TRUE
      ) |>
      echarts4r::e_tooltip(
        trigger   = "item",
        formatter = tooltip_formatter(year, label)
      ) |>
      echarts4r::e_title(text = title, subtext = paste("Jahr", year))
  } else {
    # Partielles Update: Geometrie ist bereits client-seitig registriert
    echarts4r::echarts4rProxy(proxy, data = plot_df, x = region) |>
      echarts4r::e_map(wert, map = map_name, name = label) |>
      echarts4r::e_visual_map(
        wert,
        inRange    = list(color = pal),
        calculable = TRUE
      ) |>
      echarts4r::e_tooltip(
        trigger   = "item",
        formatter = tooltip_formatter(year, label)
      ) |>
      echarts4r::e_title(text = title, subtext = paste("Jahr", year)) |>
      echarts4r::e_execute()
  }
}

#' sf-Objekt in eine GeoJSON-Liste (FeatureCollection) konvertieren
#'
#' Nutzt den GeoJSON-Treiber von {sf} und parst das Ergebnis mit
#' {jsonlite}; vermeidet so zusaetzliche Konvertierungspakete.
#' @noRd
sf_to_geojson <- function(x) {
  tmp <- tempfile(fileext = ".geojson")
  on.exit(unlink(tmp), add = TRUE)
  sf::st_write(x, tmp, driver = "GeoJSON", quiet = TRUE, delete_dsn = TRUE)
  jsonlite::read_json(tmp)
}
