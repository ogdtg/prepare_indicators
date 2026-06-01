# Gallery-App — Zeigt alle verfuegbaren Komponenten des tgdashboard-Pakets
#
# Starten:
#   shiny::runApp("dev/gallery.R")

library(shiny)
library(bslib)
library(echarts4r)
library(tgdashboard)

# Synthetische Beispieldaten
jahre <- 2015:2023

df_bar <- data.frame(
  jahr           = rep(jahre, each = 3),
  wert           = c(120, 95, 80, 130, 100, 85, 140, 110, 90,
                     150, 115, 95, 145, 120, 100, 160, 125, 105,
                     170, 130, 110, 165, 135, 115, 175, 140, 120),
  kategorie_name = rep(c("Kategorie A", "Kategorie B", "Kategorie C"), length(jahre))
)

df_area <- data.frame(
  jahr           = rep(jahre, each = 2),
  wert           = c(200, 100, 210, 105, 220, 110, 215, 108,
                     225, 112, 230, 115, 240, 120, 235, 118, 245, 122),
  kategorie_name = rep(c("Erneuerbar", "Fossil"), length(jahre))
)

df_map <- data.frame(
  jahr           = rep(2023, 10),
  bfsnr          = c(4001, 4011, 4021, 4031, 4041, 4051, 4061, 4071, 4081, 4091),
  bfsnr_name     = c("Aadorf", "Arbon", "Berg", "Berlingen", "Bettwiesen",
                     "Bichelsee-Balterswil", "Bischofszell", "Bottighofen",
                     "Braunau", "Buerglen"),
  kategorie      = rep("energie", 10),
  kategorie_name = rep("Energieverbrauch", 10),
  wert           = c(120, 95, 110, 87, 134, 102, 115, 98, 128, 107)
)

df_tabelle <- data.frame(
  jahr           = rep(2020:2023, each = 2),
  bfsnr_name     = rep(c("Thurgau", "Arbon"), 4),
  kategorie_name = rep("Energieverbrauch", 8),
  wert           = c(1234567, 234567, 1345678, 245678, 1456789, 256789, 1567890, 267890)
)

ui <- tagList(
  tags$head(tags$style(htmltools::HTML(
    "body { overflow-x: hidden; max-width: 100%; }
     .container-fluid { max-width: 100%; padding-left: 0; padding-right: 0; }"
  ))),
  tg_header(title = "tgdashboard Gallery", subtitle = "Alle verfuegbaren Komponenten"),
  page_fluid(
    theme = bs_theme(brand = system.file("_brand.yml", package = "tgdashboard")),
    add_external_resources(),
    chart_title_inject_css(),
    echarts_map_register_once(),
    tags$div(
      style = "padding: 2rem 0 1rem 0;",
      h1("tgdashboard Gallery"),
      p(class = "lead", "Alle verfuegbaren Plot-Typen und UI-Komponenten.")
    ),
    navset_tab(
      id = "gallery_tabs",
      nav_panel(
        "Balken (gestapelt)",
        tags$div(style = "padding-top: 1rem;",
          h3("Gestapeltes Balkendiagramm"),
          echarts4rOutput("plt_bar_stacked", height = "400px"),
          hr(), h5("R-Code:"), verbatimTextOutput("code_bar_stacked")
        )
      ),
      nav_panel(
        "Flaeche (gestapelt)",
        tags$div(style = "padding-top: 1rem;",
          h3("Gestapeltes Flaechendiagramm"),
          echarts4rOutput("plt_area_stacked", height = "400px"),
          hr(), h5("R-Code:"), verbatimTextOutput("code_area_stacked")
        )
      ),
      nav_panel(
        "Choroplethenkarte",
        tags$div(style = "padding-top: 1rem;",
          h3("Choroplethenkarte Thurgauer Gemeinden"),
          echarts4rOutput("plt_map", height = "500px"),
          hr(), h5("R-Code:"), verbatimTextOutput("code_map")
        )
      ),
      nav_panel(
        "Datentabelle",
        tags$div(style = "padding-top: 1rem;",
          h3("Gestylte Datentabelle"),
          DT::dataTableOutput("tbl_beispiel"),
          hr(), h5("R-Code:"), verbatimTextOutput("code_tabelle")
        )
      ),
      nav_panel(
        "Farbpaletten",
        tags$div(style = "padding-top: 1rem;",
          h3("Thurgau Designsystem-Farbpaletten"),
          fluidRow(
            column(6,
              h5("Standardpalette"), uiOutput("palette_standard"),
              h5("Gestapelte Diagramme"), uiOutput("palette_stacked")
            ),
            column(6,
              h5("Sequentiell (Karten)"), uiOutput("palette_seq"),
              h5("Divergent (Karten)"), uiOutput("palette_div")
            )
          )
        )
      ),
      nav_panel(
        "UI-Komponenten",
        tags$div(style = "padding-top: 1rem;",
          h3("Werte-Boxen"),
          fluidRow(
            column(4, uiOutput("vbox1")),
            column(4, uiOutput("vbox2")),
            column(4, uiOutput("vbox3"))
          ),
          hr(), h5("R-Code:"), verbatimTextOutput("code_valuebox")
        )
      )
    )
  ),
  tg_footer("ftr")
)

server <- function(input, output, session) {
  output$plt_bar_stacked <- renderEcharts4r({
    echarts_bar_stacked(
      df       = df_bar,
      title    = "Beispiel: Gestapeltes Balkendiagramm",
      subtitle = "Synthetische Daten (Kategorie A, B, C)"
    )
  })
  output$code_bar_stacked <- renderText(paste0(
    'echarts_bar_stacked(\n',
    '  df       = df_bar,  # data.frame: jahr, wert, kategorie_name\n',
    '  title    = "...", subtitle = "..."\n',
    ')'
  ))

  output$plt_area_stacked <- renderEcharts4r({
    echarts_area_stacked(
      df        = df_area,
      title     = "Beispiel: Gestapeltes Flaechendiagramm",
      subtitle  = "Mit Prognosegrenze ab 2021",
      year_pred = 2021
    )
  })
  output$code_area_stacked <- renderText(paste0(
    'echarts_area_stacked(\n',
    '  df        = df_area,  # data.frame: jahr, wert, kategorie_name\n',
    '  year_pred = 2021      # gestrichelte Trennlinie\n',
    ')'
  ))

  output$plt_map <- renderEcharts4r({
    echarts_map(
      df           = df_map,
      jahr         = 2023,
      kategorie    = "energie",
      title        = "Gemeindedaten Thurgau 2023",
      subtitle     = "Energieverbrauch (Beispieldaten)",
      use_shiny_ui = TRUE
    )
  })
  output$code_map <- renderText(paste0(
    'echarts_map(\n',
    '  df = df_map, jahr = 2023, kategorie = "energie",\n',
    '  use_shiny_ui = TRUE\n',
    ')'
  ))

  output$tbl_beispiel <- DT::renderDataTable(
    datatables_table(df_tabelle)
  )
  output$code_tabelle <- renderText(
    "datatables_table(df)  # data.frame: jahr, bfsnr_name, kategorie_name, wert"
  )

  render_swatches <- function(colors) {
    renderUI({
      tags$div(
        style = "display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;",
        lapply(colors, function(col) {
          tags$div(title = col, style = paste0(
            "width:40px;height:40px;background-color:", col,
            ";border:1px solid #ccc;border-radius:4px;"
          ))
        })
      )
    })
  }
  output$palette_standard <- render_swatches(tg_theme_colors("standard"))
  output$palette_stacked  <- render_swatches(tg_theme_colors("stacked"))
  output$palette_seq      <- render_swatches(tg_choro_seq()$blue_green_6)
  output$palette_div      <- render_swatches(tg_choro_div()$blue_orange_8)

  output$vbox1 <- renderUI(bslib::value_box(
    title    = "Gesamtemissionen",
    value    = "1 234 kt CO2",
    showcase = bsicons::bs_icon("bar-chart-fill"),
    theme    = bslib::value_box_theme(bg = "#f5f5f5", fg = "#333")
  ))
  output$vbox2 <- renderUI(bslib::value_box(
    title    = "Veraenderung",
    value    = "-12.3%",
    showcase = bsicons::bs_icon("arrow-down-circle-fill"),
    theme    = bslib::value_box_theme(bg = "#f5f5f5", fg = "#1F6F3F")
  ))
  output$vbox3 <- renderUI(bslib::value_box(
    title    = "Gemeinden erfasst",
    value    = "80 / 80",
    showcase = bsicons::bs_icon("geo-alt-fill"),
    theme    = bslib::value_box_theme(bg = "#f5f5f5", fg = "#333")
  ))
  output$code_valuebox <- renderText(paste0(
    'bslib::value_box(\n',
    '  title    = "Gesamtemissionen",\n',
    '  value    = "1 234 kt CO2",\n',
    '  showcase = bsicons::bs_icon("bar-chart-fill"),\n',
    '  theme    = bslib::value_box_theme(bg = "#f5f5f5", fg = "#333")\n',
    ')'
  ))
}

shinyApp(ui, server)

