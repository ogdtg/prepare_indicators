library(shiny)
library(bslib)
library(bsicons)
library(dplyr)
library(shinyjs)
library(echarts4r)
library(htmlwidgets)
library(shinyWidgets)
library(jsonlite)

# ══════════════════════════════════════════════════════════════════════════════
# Pfade
# ══════════════════════════════════════════════════════════════════════════════
DATA_DIR <- "nested_data"
GEO_DIR  <- "geojson"   # Verzeichnis mit den GeoJSON-Dateien

# Mapping: areatype  →  tatsächlicher GeoJSON-Dateiname.
# Alle GeoJSON-Dateien haben in den Feature-Properties die Felder
# bfsnr + name und liegen in WGS84 / CRS84 (lon/lat) vor.
GEO_FILES <- list(
  gemeinde              = "gemeinde_small.geojson",
  primarschulgemeinde   = "primarschulgemeinde_small.geojson",
  sekundarschulgemeinde = "sekundarschulgemeinde_small.geojson",
  volksschulgemeinde    = "volksschulgemeinde_small.geojson",
  bezirk                = "bezirk_small.geojson",
  zusatzdaten           =  "gemeinde_small.geojson"
)

# ══════════════════════════════════════════════════════════════════════════════
# Hilfsfunktionen
# ══════════════════════════════════════════════════════════════════════════════

#' NA-sichere Gleichheit
eq <- function(x, y) !is.na(x) & x == y

#' NA-Werte entfernen
stats_na <- function(x) x[!is.na(x)]

#' Beschriftung für Werttyp
value_label <- function(value_col) {
  if (identical(value_col, "share")) "Anteil (%)" else "Wert"
}

#' Sequentielle Farbpalette
seq_palette <- function() {
  c("#deecfd", "#a8c8e6", "#6fa3c8", "#3d7ab5", "#1b5898", "#0c3d6b")
}

#' Tooltip-Formatter (Gemeindename + Wert + Jahr)
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

#' Datensatz auf Jahr/Kategorie filtern und mit Lookup verknüpfen
#' @return data.frame mit Spalten `region` und `wert`
build_plot_df <- function(df, lookup, year, value_col, kat = NULL) {
  d <- df[as.character(df$jahr) == as.character(year), , drop = FALSE]

  if ("filter1" %in% names(d) && !is.null(kat) && nzchar(kat) && kat != "alle") {
    d <- d[as.character(d$filter1) == as.character(kat), , drop = FALSE]
  }

  if (!value_col %in% names(d)) value_col <- "value"

  # Geo-ID-Spalte flexibel erkennen (gemeinde/bezirk/schulgemeinde)
  id_col <- "bfs_nr_gemeinde"

  vals <- data.frame(
    bfsnr = as.character(d[[id_col]]),
    wert  = suppressWarnings(as.numeric(d[[value_col]])),
    stringsAsFactors = FALSE
  )
  vals <- vals[!duplicated(vals$bfsnr), , drop = FALSE]



  m <- merge(lookup, vals, by = "bfsnr", all.x = TRUE)
  data.frame(region = m$region, wert = m$wert, stringsAsFactors = FALSE)
}





init_map <- function(output, input, geo_data, geo_data_geojson) {
  observeEvent(geo_data_geojson(), {
    geojson_str <- geo_data_geojson()
    req(geojson_str)

    sf_obj  <- geo_data()
    df_init <- as.data.frame(sf_obj) %>%
      select(name) %>%
      mutate(value = NA_real_)

    output$map <- echarts4r::renderEcharts4r({
      df_init %>%
        echarts4r::e_charts(name) %>%
        echarts4r::e_map_register("thurgau_init", geojson_str) %>%
        echarts4r::e_map(value, map = "thurgau_init",
                         name = "Gemeinden", nameProperty = "name",
                         itemStyle = list(areaColor = "#cccccc",
                                          borderColor = "white",
                                          borderWidth = 1)) %>%
        echarts4r::e_tooltip(trigger = "item") %>%
        echarts4r::e_on("click", "function(params){ Shiny.setInputValue(this.id + '_clicked_data', params.data, {priority: 'event'}); }")
    })
  })
}


#' Choroplethenkarte erstellen.
#' `geojson_str` ist der rohe JSON-String (von load_geo gecacht).
#' e_map_register wird bei jedem Render aufgerufen — das ist ok, weil der
#' String im R-Speicher liegt (kein Disk-Read). nameProperty = "name" ist
#' entscheidend: es sagt echarts, welche Feature-Property für den Daten-
#' Abgleich genutzt werden soll (properties.name == region-Spalte).
make_map <- function(plot_df, map_name, geojson_str, title, year, label) {
  plot_df |>
    echarts4r::e_charts(region) |>
    echarts4r::e_map_register(map_name, geojson_str) |>
    echarts4r::e_map(
      wert,
      map          = map_name,
      name         = label,
      nameProperty = "name",
      itemStyle    = list(borderColor = "white", borderWidth = 1)
    ) |>
    echarts4r::e_visual_map(
      wert,
      inRange    = list(color = seq_palette()),
      calculable = TRUE
    ) |>
    echarts4r::e_tooltip(
      trigger   = "item",
      formatter = tooltip_formatter(year, label)
    ) |>
    echarts4r::e_title(text = title, subtext = paste("Jahr", year))
}

# ══════════════════════════════════════════════════════════════════════════════
# Katalog laden
# ══════════════════════════════════════════════════════════════════════════════
catalogue <- readRDS(file.path(DATA_DIR, "mapping.rds")) |>
  rename(
    areatype  = geo_unit,
    topic     = level_1,
    subtopic  = level_2,
    indicator = level_3
  ) |>
  filter(!is.na(indicator), nzchar(indicator))

# ══════════════════════════════════════════════════════════════════════════════
# Datensatz laden
# ══════════════════════════════════════════════════════════════════════════════
load_dataset <- function(ds_id) {
  path <- file.path(DATA_DIR, paste0(ds_id, ".rds"))
  if (!file.exists(path)) return(NULL)
  readRDS(path)
}

# ══════════════════════════════════════════════════════════════════════════════
# Geodaten laden (gecacht via Umgebung)
# Das GeoJSON wird einmalig pro Gebietstyp beim ersten Render im Chart
# registriert (siehe make_map / renderEcharts4r). R parst die Datei nur einmal.
# R lädt nur das winzige Lookup-RDS (bfsnr → name) für den Join.
# ══════════════════════════════════════════════════════════════════════════════
.geo_cache <- new.env(parent = emptyenv())

load_geo <- function(geo_unit) {
  if (exists(geo_unit, envir = .geo_cache))
    return(get(geo_unit, envir = .geo_cache))

  fname <- GEO_FILES[[geo_unit]]
  if (is.null(fname)) return(NULL)
  path <- file.path(GEO_DIR, fname)
  if (!file.exists(path)) return(NULL)

  # Rohen JSON-Text lesen — e_map_register() erwartet einen JSON-STRING
  # (kein geparstes R-Objekt), sonst: "is.character(txt) is not TRUE".
  raw <- paste(readLines(path, warn = FALSE, encoding = "UTF-8"),
               collapse = "\n")

  # Separat parsen, nur um den Lookup bfsnr → name abzuleiten
  parsed <- jsonlite::fromJSON(raw, simplifyVector = FALSE)
  feats  <- parsed$features

  lookup <- data.frame(
    bfsnr  = vapply(feats, function(f)
      as.character(f$properties$bfsnr %||% NA_character_), character(1)),
    region = vapply(feats, function(f)
      as.character(f$properties$name %||% NA_character_), character(1)),
    stringsAsFactors = FALSE
  )
  lookup <- lookup[!is.na(lookup$bfsnr) & !is.na(lookup$region), , drop = FALSE]

  # geojson = roher String (für e_map_register), lookup = data.frame
  geo <- list(geojson = raw, lookup = lookup)
  assign(geo_unit, geo, envir = .geo_cache)
  geo
}

# ══════════════════════════════════════════════════════════════════════════════
# UI
# ══════════════════════════════════════════════════════════════════════════════
ui <- page_sidebar(
  title = "Thurgauer Gemeindedaten",
  useShinyjs(),
  theme = bs_theme(version = 5, bootswatch = "flatly", primary = "#2C6FAC"),

  sidebar = sidebar(
    width = 320,

    # ── Freitext-Suche ─────────────────────────────────────────────────────
    card(
      class = "border-primary mb-2",
      card_header(
        class = "bg-primary text-white py-2",
        bs_icon("search"), " Indikator suchen"
      ),
      card_body(
        class = "p-2",
        textInput("search_text", NULL,
                  placeholder = "z.B. Steuerfuss, Leerstand, Konfession…"),
        uiOutput("search_results_ui")
      )
    ),

    # ── Navigations-Kaskade ────────────────────────────────────────────────
    card(
      class = "border-secondary",
      card_header(
        class = "bg-secondary text-white py-2",
        bs_icon("list-nested"), " Oder navigieren"
      ),
      card_body(
        class = "p-2",
        selectInput("areatype", "Gebietstyp",
                    choices = c("— wählen —" = "",
                                sort(unique(catalogue$areatype)))),
        uiOutput("topic_ui"),
        uiOutput("subtopic_ui"),
        uiOutput("indicator_ui")
      )
    ),

    # ── Aktive Auswahl ─────────────────────────────────────────────────────
    uiOutput("selected_indicator_badge"),

    # ── Darstellungs-Controls ──────────────────────────────────────────────
    uiOutput("data_controls_ui")
  ),

  uiOutput("main_ui")
)

# ══════════════════════════════════════════════════════════════════════════════
# Server
# ══════════════════════════════════════════════════════════════════════════════
server <- function(input, output, session) {

  # ── Shared state ───────────────────────────────────────────────────────────
  selected_ind   <- reactiveVal(NULL)   # 1-row tibble aus catalogue
  cascade_locked <- reactiveVal(FALSE)  # verhindert Doppel-Fire nach Suche
  dataset        <- reactiveVal(NULL)   # geladener Datensatz (tibble)

  # ── SUCHE ──────────────────────────────────────────────────────────────────
  search_results <- reactive({
    q <- trimws(input$search_text)
    if (nchar(q) < 2) return(NULL)
    catalogue |>
      filter(
        grepl(q, indicator, ignore.case = TRUE) |
          grepl(q, subtopic,  ignore.case = TRUE) |
          grepl(q, topic,     ignore.case = TRUE)
      ) |>
      head(8)
  })

  output$search_results_ui <- renderUI({
    res <- search_results()
    if (is.null(res)) return(NULL)
    if (nrow(res) == 0)
      return(tags$p(class = "text-muted small mt-1", "Keine Treffer."))

    tagList(
      tags$p(class = "text-muted small mb-1", nrow(res), " Treffer:"),
      tags$div(
        class = "d-grid gap-1",
        lapply(seq_len(nrow(res)), function(i) {
          r <- res[i, ]
          actionButton(
            paste0("search_pick_", i),
            class = "btn btn-outline-primary btn-sm text-start",
            tags$span(
              tags$small(class = "text-muted d-block",
                         r$areatype, " › ", r$topic, " › ", r$subtopic),
              r$indicator
            )
          )
        })
      )
    )
  })

  observe({
    res <- search_results()
    if (is.null(res) || nrow(res) == 0) return()
    lapply(seq_len(nrow(res)), function(i) {
      local({
        idx <- i
        observeEvent(input[[paste0("search_pick_", idx)]], {
          r <- res[idx, ]
          cascade_locked(TRUE)
          selected_ind(r)
          updateSelectInput(session, "areatype", selected = r$areatype)
          shinyjs::delay(100, {
            updateSelectInput(session, "topic",     selected = r$topic)
            shinyjs::delay(100, {
              updateSelectInput(session, "subtopic", selected = r$subtopic)
              shinyjs::delay(100, {
                updateSelectInput(session, "indicator", selected = r$indicator)
                shinyjs::delay(50, cascade_locked(FALSE))
              })
            })
          })
        }, ignoreInit = TRUE)
      })
    })
  })

  # ── KASKADE ────────────────────────────────────────────────────────────────
  output$topic_ui <- renderUI({
    req(nzchar(input$areatype))
    choices <- catalogue |>
      filter(areatype == input$areatype) |>
      pull(topic) |> unique() |> sort()
    selectInput("topic", "Thema", choices = c("— wählen —" = "", choices))
  })

  output$subtopic_ui <- renderUI({
    req(input$topic, nzchar(input$topic))
    choices <- catalogue |>
      filter(areatype == input$areatype, topic == input$topic) |>
      pull(subtopic) |> unique() |> sort()
    selectInput("subtopic", "Unterthema", choices = c("— wählen —" = "", choices))
  })

  output$indicator_ui <- renderUI({
    req(input$subtopic, nzchar(input$subtopic))
    choices <- catalogue |>
      filter(areatype  == input$areatype,
             topic     == input$topic,
             subtopic  == input$subtopic) |>
      pull(indicator) |> unique() |> sort()
    selectInput("indicator", "Indikator", choices = c("— wählen —" = "", choices))
  })

  # Kaskade → selected_ind (Lock + Deduplizierung)
  observeEvent(input$indicator, {
    req(nzchar(input$indicator))
    if (isTRUE(cascade_locked())) return()
    r <- catalogue |>
      filter(areatype  == input$areatype,
             topic     == input$topic,
             subtopic  == input$subtopic,
             indicator == input$indicator)
    if (nrow(r) != 1) return()
    cur <- selected_ind()
    if (!is.null(cur) &&
        identical(cur$id,       r$id) &&
        identical(cur$areatype, r$areatype)) return()
    selected_ind(r)
  })

  # ── BADGE ──────────────────────────────────────────────────────────────────
  output$selected_indicator_badge <- renderUI({
    ind <- selected_ind()
    if (is.null(ind)) return(NULL)
    card(
      class = "border-success mt-2",
      card_header(class = "bg-success text-white py-1 small",
                  bs_icon("check-circle"), " Ausgewählt"),
      card_body(
        class = "p-2",
        tags$p(class = "mb-0 small",
               tags$span(class = "badge bg-secondary me-1", ind$areatype),
               tags$span(class = "badge bg-info text-dark me-1", ind$subtopic)),
        tags$p(class = "fw-bold mb-0 small mt-1", ind$indicator),
        tags$p(class = "text-muted mb-0 small", ind$id),
        actionLink("clear_selection", "Auswahl aufheben",
                   class = "small text-danger")
      )
    )
  })

  observeEvent(input$clear_selection, {
    selected_ind(NULL)
    dataset(NULL)
    updateSelectInput(session, "areatype", selected = "")
    updateTextInput(session, "search_text", value = "")
  })

  # ── DATEN LADEN ────────────────────────────────────────────────────────────
  observeEvent(selected_ind(), {
    ind <- selected_ind()
    if (is.null(ind)) { dataset(NULL); return() }
    df <- load_dataset(ind$id)
    dataset(df)
    # Switch zurücksetzen (sicher auch wenn noch nicht gerendert)
    shinyWidgets::updateSwitchInput(session, "use_share", value = FALSE)
  })

  # ── DARSTELLUNGS-CONTROLS ──────────────────────────────────────────────────
  # Werden nach Datenladen gerendert; befüllen Jahr/Kategorie/Werttyp
  output$data_controls_ui <- renderUI({
    df  <- dataset()
    ind <- selected_ind()
    if (is.null(df) || is.null(ind)) return(NULL)

    jahre     <- sort(unique(df$jahr), decreasing = TRUE)
    has_filter <- "filter1" %in% names(df) && any(!is.na(df$filter1))
    has_share  <- "share" %in% names(df)

    card(
      class = "border-info mt-2",
      card_header(class = "bg-info text-white py-1 small",
                  bs_icon("sliders"), " Darstellung"),
      card_body(
        class = "p-2",
        selectInput("sel_jahr", "Jahr",
                    choices = jahre, selected = jahre[1]),
        if (has_filter) {
          dims <- sort(unique(df$filter1[!is.na(df$filter1)]))
          selectInput("sel_dim", "Kategorie",
                      choices  = c("Alle" = "alle", dims),
                      selected = "alle")
        },
        if (has_share)
          input_switch("use_share", "Prozentwerte anzeigen", value = FALSE)
      )
    )
  })

  # ── GEFILTERTER DATENSATZ (für Tabelle) ────────────────────────────────────
  filtered_data <- reactive({
    df <- dataset()
    req(df, input$sel_jahr)
    df <- df |> filter(jahr == input$sel_jahr)
    if ("filter1" %in% names(df) &&
        !is.null(input$sel_dim) &&
        input$sel_dim != "alle") {
      df <- df |> filter(filter1 == input$sel_dim)
    }
    df
  })

  # ── HAUPTBEREICH ───────────────────────────────────────────────────────────
  output$main_ui <- renderUI({
    df  <- dataset()
    ind <- selected_ind()

    if (is.null(df)) {
      return(card(card_body(
        class = "text-center py-5 text-muted",
        bs_icon("map", size = "3em"),
        tags$h5(class = "mt-3", "Bitte wählen Sie links einen Indikator aus."),
        tags$p("Nutzen Sie die Suche oder navigieren Sie über die Themen.")
      )))
    }

    layout_column_wrap(
      width = 1,
      # Value-Boxes
      layout_column_wrap(
        width = 1/3, fill = FALSE,
        value_box(
          title    = "Indikator",
          value    = tags$span(style = "font-size:.85rem; font-weight:600",
                               ind$indicator),
          theme    = "primary",
          showcase = bs_icon("bar-chart-line")
        ),
        value_box(
          title    = "Gebietstyp",
          value    = ind$areatype,
          theme    = "info",
          showcase = bs_icon("map")
        ),
        value_box(
          title    = "Datensatz-ID",
          value    = ind$id,
          theme    = "secondary",
          showcase = bs_icon("database")
        )
      ),
      # Karte + Tabelle
      layout_column_wrap(
        width = 1/2,
        card(
          full_screen = TRUE,
          card_header(bs_icon("map"), " Karte Thurgauer Gemeinden"),
          card_body(
            class = "p-0",
            echarts4r::echarts4rOutput("map", height = "520px")
          )
        ),
        card(
          full_screen = TRUE,
          card_header(bs_icon("table"), " Daten"),
          card_body(DT::DTOutput("data_table"))
        )
      )
    )
  })

  # ── KARTE ──────────────────────────────────────────────────────────────────
  output$map <- echarts4r::renderEcharts4r({
    df  <- dataset()
    ind <- selected_ind()
    req(df, ind, input$sel_jahr)

    geo <- load_geo(ind$areatype)
    # validate(need(
    #   !is.null(geo),
    #   paste0("Keine Geodaten für \u00ab", ind$areatype, "\u00bb gefunden.\n",
    #          "Erwartet: ",
    #          file.path(GEO_DIR, GEO_FILES[[ind$areatype]] %||% "?"))
    # ))

    value_col <- if (isTRUE(input$use_share) && "share" %in% names(df))
      "share" else "value"

    # Jahr validieren (Fallback auf neuestes)
    jahre <- sort(unique(df$jahr), decreasing = TRUE)
    jahr  <- if (isTRUE(input$sel_jahr %in% jahre)) input$sel_jahr else jahre[1]

    # Kategorie
    kat <- if (!is.null(input$sel_dim) && input$sel_dim != "alle")
      input$sel_dim else NULL

    plot_df <- build_plot_df(df, geo$lookup, jahr, value_col, kat)
    # Titel aus den Kaskaden-Ebenen zusammensetzen
    title_parts <- stats_na(c(ind$topic, ind$subtopic, ind$indicator))
    title <- if (length(title_parts) > 1)
      paste(title_parts[-length(title_parts)], collapse = " / ")
    else
      title_parts[1]
    subtitle <- tail(title_parts, 1)

    make_map(
      plot_df     = plot_df,
      map_name    = ind$areatype,
      geojson_str = geo$geojson,
      title       = title,
      year        = jahr,
      label       = value_label(value_col)
    ) |>
      echarts4r::e_title(text = title, subtext = paste(subtitle, "| Jahr", jahr))
  })

  # ── DATENTABELLE ───────────────────────────────────────────────────────────
  output$data_table <- DT::renderDT({
    df  <- filtered_data()
    ind <- selected_ind()
    req(df, ind)

    use_share <- isTRUE(input$use_share) && "share" %in% names(df)

    geo_col <- intersect(c("bfs_nr_gemeinde", "geo_unit_id", "id_unit"),
                         names(df))[1]
    val_col <- if (use_share) "share" else "value"

    display_cols <- c(geo_col, "jahr")
    if ("filter1" %in% names(df)) display_cols <- c(display_cols, "filter1")
    display_cols <- c(display_cols, val_col)
    display_cols <- intersect(display_cols, names(df))

    col_labels <- display_cols
    col_labels[col_labels == geo_col]   <- "BFS-Nr."
    col_labels[col_labels == "jahr"]    <- "Jahr"
    col_labels[col_labels == "filter1"] <- ind$subtopic
    col_labels[col_labels == "value"]   <- "Wert"
    col_labels[col_labels == "share"]   <- "Anteil (%)"

    DT::datatable(
      df[, display_cols],
      rownames = FALSE,
      colnames = col_labels,
      filter   = "top",
      options  = list(pageLength = 15, dom = "ftp", scrollX = TRUE)
    )
  })
}

shinyApp(ui, server)
