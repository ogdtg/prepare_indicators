inddb_map_register_once <- function() {
  geo_dir <- app_sys("extdata/geo")

  shiny::addResourcePath("inddb_geo", geo_dir)

  shiny::tagList(
    echarts4r::e_map_register_ui(
      "inddb_gemeinde_tg",
      file.path("inddb_geo", "gemeinde_tg.geojson")
    ),
    echarts4r::e_map_register_ui(
      "inddb_primarschulgemeinde_tg",
      file.path("inddb_geo", "primarschulgemeinde_tg.geojson")
    ),
    echarts4r::e_map_register_ui(
      "inddb_sekundarschulgemeinde_tg",
      file.path("inddb_geo", "sekundarschulgemeinde_tg.geojson")
    ),
    echarts4r::e_map_register_ui(
      "inddb_volksschulgemeinde_tg",
      file.path("inddb_geo", "volksschulgemeinde_tg.geojson")
    )
  ) |>
    shiny::singleton()
}

#' Die Shiny-Applikation UI
#'
#' @param request Interner Shiny-Parameter
#' @noRd
app_ui <- function(request) {
  tagList(
    tgdashboard::tg_header(
      title    = "raw_db",
      subtitle = "Ein Dashboard im Thurgauer Designstil"
    ),
    bslib::page_fixed(
      title = "raw_db",
      theme = bslib::bs_theme(
        brand = system.file("_brand.yml", package = "raw.db")
      ),
      add_external_resources(),
      tgdashboard::chart_title_inject_css(),
      inddb_map_register_once(),

      # ---------------------
      # Inhalt hier einfuegen
      # ---------------------
      shiny::h2("Willkommen"),
      shiny::p("Bearbeite app_ui.R und app_server.R um das Dashboard zu befuellen."),
      shiny::tags$pre('shiny::runApp("dev/gallery.R")  # alle Komponenten anzeigen')
    ),
    tgdashboard::tg_footer("ftr")
  )
}

