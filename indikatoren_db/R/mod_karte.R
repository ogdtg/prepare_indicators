#' #' karte UI-Funktion
#' #'
#' #' @description Ein Shiny-Modul, das eine Choroplethenkarte der Thurgauer
#' #'   Indikatoren rendert. Die Seitenleiste enthaelt eine kaskadierende
#' #'   Filterkette (level_1 -> level_2 -> level_3 -> geo_unit), gefolgt von
#' #'   Jahr-, Wert-Typ- und (falls vorhanden) Kategorie-Auswahl sowie einem
#' #'   Button, der das Rendern ausloest.
#' #'
#' #' @param id Interne Parameter fuer {shiny}.
#' #'
#' #' @noRd
#' #'
#' #' @importFrom shiny NS tagList selectInput actionButton conditionalPanel
#' mod_karte_ui <- function(id) {
#'   ns <- shiny::NS(id)
#'
#'   bslib::card(
#'     full_screen = TRUE,
#'     bslib::card_header("Indikatorenkarte Kanton Thurgau"),
#'     bslib::layout_sidebar(
#'       sidebar = bslib::sidebar(
#'         title = "Auswahl",
#'         width = 320,
#'         shiny::selectInput(
#'           ns("level_1"),
#'           label   = "Thema",
#'           choices = character(0)
#'         ),
#'         shiny::selectInput(
#'           ns("level_2"),
#'           label   = "Unterthema",
#'           choices = character(0)
#'         ),
#'         shiny::conditionalPanel(
#'           condition = "output.has_level_3 == true",
#'           ns        = ns,
#'           shiny::selectInput(
#'             ns("level_3"),
#'             label   = "Indikator",
#'             choices = character(0)
#'           )
#'         ),
#'         shiny::selectInput(
#'           ns("geo_unit"),
#'           label   = "Raumebene",
#'           choices = character(0)
#'         ),
#'         shiny::selectInput(
#'           ns("jahr"),
#'           label   = "Jahr",
#'           choices = character(0)
#'         ),
#'         shiny::selectInput(
#'           ns("value_type"),
#'           label   = "Werttyp",
#'           choices = c("Wert" = "value")
#'         ),
#'         shiny::conditionalPanel(
#'           condition = "output.has_filter1 == true",
#'           ns        = ns,
#'           shiny::selectInput(
#'             ns("filter1"),
#'             label   = "Kategorie",
#'             choices = character(0)
#'           )
#'         ),
#'         shiny::actionButton(
#'           ns("anzeigen"),
#'           label = "Anzeigen",
#'           class = "btn-primary"
#'         )
#'       ),
#'       echarts4r::echarts4rOutput(ns("map"), height = "600px")
#'     )
#'   )
#' }
#'
#' #' karte Server-Funktion
#' #'
#' #' @noRd
#' #'
#' #' @importFrom shiny moduleServer reactive reactiveVal eventReactive
#' #'   observeEvent updateSelectInput req validate need isolate outputOptions
#' mod_karte_server <- function(id) {
#'   shiny::moduleServer(id, function(input, output, session) {
#'     ns <- session$ns
#'
#'     mapping <- read_mapping()
#'
#'     GEO_FILES <- c(
#'       gemeinde              = "gemeinde_prepared.rds",
#'       primarschulgemeinde   = "primarschulgemeinde_prepared.rds",
#'       sekundarschulgemeinde = "sekundarschulgemeinde_prepared.rds",
#'       volksschulgemeinde    = "volksschulgemeinde_prepared.rds",
#'       zusatzdaten           = "gemeindegrenzen_prepared.rds"
#'     )
#'
#'     has_filter1 <- shiny::reactiveVal(FALSE)
#'     has_level_3 <- shiny::reactiveVal(FALSE)
#'
#'     output$has_filter1 <- shiny::reactive(has_filter1())
#'     output$has_level_3 <- shiny::reactive(has_level_3())
#'     shiny::outputOptions(output, "has_filter1", suspendWhenHidden = FALSE)
#'     shiny::outputOptions(output, "has_level_3", suspendWhenHidden = FALSE)
#'
#'     # --- Kaskade -----------------------------------------------------------
#'
#'     shiny::updateSelectInput(
#'       session, "level_1",
#'       choices = sort(unique(stats_na(mapping$level_1)))
#'     )
#'
#'     shiny::observeEvent(input$level_1, {
#'       rows <- mapping[eq(mapping$level_1, input$level_1), , drop = FALSE]
#'       shiny::updateSelectInput(
#'         session, "level_2",
#'         choices = sort(unique(stats_na(rows$level_2)))
#'       )
#'     })
#'
#'     shiny::observeEvent(input$level_2, {
#'       rows <- mapping[
#'         eq(mapping$level_1, input$level_1) &
#'           eq(mapping$level_2, input$level_2), , drop = FALSE
#'       ]
#'       l3 <- sort(unique(stats_na(rows$level_3)))
#'       if (length(l3) > 0) {
#'         has_level_3(TRUE)
#'         shiny::updateSelectInput(session, "level_3", choices = l3)
#'       } else {
#'         has_level_3(FALSE)
#'         shiny::updateSelectInput(
#'           session, "geo_unit",
#'           choices = sort(unique(stats_na(rows$geo_unit)))
#'         )
#'       }
#'     })
#'
#'     shiny::observeEvent(input$level_3, {
#'       shiny::req(has_level_3())
#'       rows <- mapping[
#'         eq(mapping$level_1, input$level_1) &
#'           eq(mapping$level_2, input$level_2) &
#'           eq(mapping$level_3, input$level_3), , drop = FALSE
#'       ]
#'       shiny::updateSelectInput(
#'         session, "geo_unit",
#'         choices = sort(unique(stats_na(rows$geo_unit)))
#'       )
#'     })
#'
#'     # --- Dataset-ID --------------------------------------------------------
#'
#'     selected_id <- shiny::reactive({
#'       shiny::req(input$level_1, input$level_2, input$geo_unit)
#'       keep <- eq(mapping$level_1, input$level_1) &
#'         eq(mapping$level_2, input$level_2) &
#'         eq(mapping$geo_unit, input$geo_unit)
#'       if (has_level_3()) {
#'         shiny::req(input$level_3)
#'         keep <- keep & eq(mapping$level_3, input$level_3)
#'       }
#'       rows <- mapping[keep, , drop = FALSE]
#'       shiny::req(nrow(rows) > 0)
#'       rows$id[1]
#'     })
#'
#'     # --- Datensatz laden (nur bei Button) ----------------------------------
#'
#'     dataset <- shiny::eventReactive(input$anzeigen, {
#'       id <- selected_id()
#'       shiny::req(id)
#'       path <- file.path(karte_data_dir("nested"), paste0(id, ".rds"))
#'       shiny::validate(shiny::need(file.exists(path), "Datensatz nicht gefunden."))
#'       readRDS(path)
#'     })
#'
#'     # --- Jahr / Werttyp / Kategorie nach Datensatz-Load befüllen ----------
#'
#'     shiny::observeEvent(dataset(), {
#'       df <- dataset()
#'
#'       jahre <- sort(unique(df$jahr), decreasing = TRUE)
#'       shiny::updateSelectInput(session, "jahr",
#'                                choices = jahre, selected = jahre[1])
#'
#'       vt <- c("Wert" = "value")
#'       if ("share" %in% names(df)) vt <- c(vt, "Anteil" = "share")
#'       shiny::updateSelectInput(session, "value_type",
#'                                choices = vt, selected = "value")
#'
#'       if ("filter1" %in% names(df)) {
#'         kat <- as.character(sort(unique(df$filter1)))
#'         has_filter1(TRUE)
#'         shiny::updateSelectInput(session, "filter1",
#'                                  choices = kat, selected = kat[1])
#'       } else {
#'         has_filter1(FALSE)
#'       }
#'     })
#'
#'     # --- Geodaten (gecacht) ------------------------------------------------
#'
#'     geo <- shiny::reactive({
#'       shiny::req(input$geo_unit)
#'       file <- GEO_FILES[[input$geo_unit]]
#'       path <- file.path(karte_data_dir("geo"), file)
#'       message("geo_unit: ", input$geo_unit)
#'       message("file:     ", file)
#'       message("path:     ", path)
#'       message("exists:   ", file.exists(path))
#'       shiny::validate(shiny::need(!is.null(file), "Keine Geometrie verfügbar."))
#'       shiny::validate(shiny::need(file.exists(path), "Geometrie nicht gefunden."))
#'       readRDS(path)
#'     }) |>
#'       shiny::bindCache(input$geo_unit)
#'
#'     # --- Karte: ein einziges renderEcharts4r, reagiert auf alles -----------
#'
#'     map_data <- shiny::reactive({
#'       shiny::req(dataset(), geo(), input$jahr, input$value_type)
#'       df  <- dataset()
#'       g   <- geo()
#'
#'       jahr      <- input$jahr
#'       value_col <- input$value_type
#'       kat       <- if (has_filter1()) input$filter1 else NULL
#'
#'       # Neuestes Jahr als Fallback falls input$jahr noch nicht gesetzt
#'       jahre <- sort(unique(df$jahr), decreasing = TRUE)
#'       if (!jahr %in% df$jahr) jahr <- jahre[1]
#'
#'       list(
#'         plot_df = build_plot_df(df, g$lookup, jahr, value_col, kat),
#'         geojson = g$geojson,
#'         year    = jahr,
#'         label   = value_label(value_col)
#'       )
#'     }) |>
#'       shiny::bindCache(
#'         selected_id(),
#'         input$geo_unit,
#'         input$jahr,
#'         input$value_type,
#'         input$filter1
#'       )
#'
#'     output$map <- echarts4r::renderEcharts4r({
#'       d <- map_data()
#'       shiny::req(d)
#'
#'       title <- paste(
#'         c(input$level_1, input$level_2,
#'           if (has_level_3()) input$level_3),
#'         collapse = " / "
#'       )
#'
#'       make_map(
#'         plot_df  = d$plot_df,
#'         map_name = input$geo_unit,
#'         geojson  = d$geojson,
#'         title    = title,
#'         year     = d$year,
#'         label    = d$label
#'       )
#'     })
#'   })
#' }

#' @noRd
mod_karte_ui <- function(id) {
  ns <- shiny::NS(id)

  bslib::card(
    full_screen = TRUE,
    bslib::card_header("Indikatorenkarte Kanton Thurgau"),
    bslib::layout_sidebar(
      sidebar = bslib::sidebar(
        title = "Auswahl",
        width = 300,
        shiny::selectInput(ns("level_1"), "Thema",      choices = character(0)),
        shiny::selectInput(ns("level_2"), "Unterthema", choices = character(0)),
        shiny::conditionalPanel(
          condition = "output.has_level_3 == true",
          ns = ns,
          shiny::selectInput(ns("level_3"), "Indikator", choices = character(0))
        ),
        shiny::selectInput(ns("jahr"),       "Jahr",    choices = character(0)),
        shiny::selectInput(ns("value_type"), "Werttyp", choices = c("Wert" = "value")),
        shiny::conditionalPanel(
          condition = "output.has_filter1 == true",
          ns = ns,
          shiny::selectInput(ns("filter1"), "Kategorie", choices = character(0))
        ),
        shiny::actionButton(
          ns("anzeigen"), "Anzeigen",
          class = "btn-primary w-100 mt-2"
        )
      ),
      echarts4r::echarts4rOutput(ns("map"), height = "600px")
    )
  )
}

#' @noRd
mod_karte_server <- function(id) {
  shiny::moduleServer(id, function(input, output, session) {
    ns <- session$ns

    # Mapping einmalig laden, nur Gemeinde-Datensätze
    mapping <- read_mapping()
    mapping <- mapping[mapping$geo_unit == "gemeinde", , drop = FALSE]

    # Lookup einmalig laden
    gemeinde_lookup <- local({
      path <- file.path(app_sys("extdata/geo"), "gemeinde_prepared.rds")
      if (file.exists(path)) readRDS(path)$lookup else NULL
    })

    has_filter1 <- shiny::reactiveVal(FALSE)
    has_level_3 <- shiny::reactiveVal(FALSE)

    output$has_filter1 <- shiny::reactive(has_filter1())
    output$has_level_3 <- shiny::reactive(has_level_3())
    shiny::outputOptions(output, "has_filter1", suspendWhenHidden = FALSE)
    shiny::outputOptions(output, "has_level_3", suspendWhenHidden = FALSE)

    # --- Kaskade -----------------------------------------------------------

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
      } else {
        has_level_3(FALSE)
      }
    })

    shiny::observeEvent(input$level_3, {
      shiny::req(has_level_3())
    })

    # --- Dataset-ID --------------------------------------------------------

    selected_id <- shiny::reactive({
      shiny::req(input$level_1, input$level_2)
      keep <- eq(mapping$level_1, input$level_1) &
        eq(mapping$level_2, input$level_2)
      if (has_level_3()) {
        shiny::req(input$level_3)
        keep <- keep & eq(mapping$level_3, input$level_3)
      }
      rows <- mapping[keep, , drop = FALSE]
      shiny::req(nrow(rows) > 0)
      rows$id[1]
    })

    # --- Datensatz laden (nur bei Button) ----------------------------------

    dataset <- shiny::eventReactive(input$anzeigen, {
      id <- selected_id()
      shiny::req(id)
      path <- file.path(app_sys("extdata/nested_data"), paste0(id, ".rds"))
      shiny::validate(shiny::need(file.exists(path), "Datensatz nicht gefunden."))
      readRDS(path)
    })

    # --- Inputs nach Datenladen befüllen -----------------------------------

    shiny::observeEvent(dataset(), {
      df <- dataset()

      jahre <- sort(unique(df$jahr), decreasing = TRUE)
      shiny::updateSelectInput(session, "jahr",
                               choices = jahre, selected = jahre[1])

      vt <- c("Wert" = "value")
      if ("share" %in% names(df)) vt <- c(vt, "Anteil" = "share")
      shiny::updateSelectInput(session, "value_type",
                               choices = vt, selected = "value")

      if ("filter1" %in% names(df)) {
        kat <- as.character(sort(unique(df$filter1)))
        has_filter1(TRUE)
        shiny::updateSelectInput(session, "filter1",
                                 choices = kat, selected = kat[1])
      } else {
        has_filter1(FALSE)
      }
    })

    # --- Karte -------------------------------------------------------------

    output$map <- echarts4r::renderEcharts4r({
      shiny::req(dataset(), gemeinde_lookup, input$jahr, input$value_type)

      df        <- dataset()
      jahr      <- input$jahr
      value_col <- input$value_type
      kat       <- if (has_filter1()) input$filter1 else NULL

      print(df)
      # Fallback neuestes Jahr
      jahre <- sort(unique(df$jahr), decreasing = TRUE)
      if (!isTRUE(jahr %in% df$jahr)) jahr <- jahre[1]

      plot_df <- build_plot_df(df, gemeinde_lookup, jahr, value_col, kat)

      title <- paste(
        stats_na(c(
          input$level_1,
          input$level_2,
          if (has_level_3()) input$level_3 else NULL
        )),
        collapse = " / "
      )

      plot_df |>
        echarts4r::e_charts(region) |>
        echarts4r::e_map(
          wert,
          map  = "inddb_gemeinde_tg",
          name = value_label(value_col)
        ) |>
        echarts4r::e_visual_map(
          wert,
          inRange    = list(color = seq_palette()),
          calculable = TRUE
        ) |>
        echarts4r::e_tooltip(
          trigger   = "item",
          formatter = tooltip_formatter(jahr, value_label(value_col))
        ) |>
        echarts4r::e_title(text = title, subtext = paste("Jahr", jahr))
    })
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
make_map <- function(plot_df, map_name, geojson, title, year, label) {
  pal <- seq_palette()

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


#' @noRd
inddb_map_register_once <- function() {
  geo_dir <- app_sys("extdata/geo")
  shiny::addResourcePath("inddb_geo", geo_dir)
  shiny::tagList(
    echarts4r::e_map_register_ui(
      "inddb_gemeinde_tg",
      file.path("inddb_geo", "gemeinde_tg.geojson")
    )
  ) |>
    shiny::singleton()
}

#' @noRd
read_mapping <- function() {
  path <- file.path(app_sys("extdata/nested_data"), "mapping.csv")
  utils::read.csv(
    path,
    stringsAsFactors = FALSE,
    check.names      = FALSE,
    encoding         = "UTF-8",
    na.strings       = c("NA", "")
  )
}

#' @noRd
eq <- function(x, y) !is.na(x) & x == y

#' @noRd
stats_na <- function(x) x[!is.na(x)]

#' @noRd
value_label <- function(value_col) {
  if (identical(value_col, "share")) "Anteil (%)" else "Wert"
}

#' @noRd
build_plot_df <- function(df, lookup, year, value_col, kat = NULL) {
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
  vals <- vals[!duplicated(vals$bfsnr), , drop = FALSE]

  m <- merge(lookup, vals, by = "bfsnr", all.x = TRUE)
  data.frame(region = m$region, wert = m$wert, stringsAsFactors = FALSE)
}

#' @noRd
seq_palette <- function() {
  pal <- tryCatch(
    tgdashboard::tg_choro_seq()$blue_green_6,
    error = function(e) NULL
  )
  if (is.null(pal) || !length(pal)) {
    pal <- c("#deecfd", "#a8c8e6", "#6fa3c8", "#3d7ab5", "#1b5898", "#0c3d6b")
  }
  pal
}

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
