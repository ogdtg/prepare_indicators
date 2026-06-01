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
      tgdashboard::echarts_map_register_once(),

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

