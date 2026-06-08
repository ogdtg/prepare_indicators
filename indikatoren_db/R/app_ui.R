#' #' Die Shiny-Applikation UI
#' #'
#' #' @param request Interner Shiny-Parameter
#' #' @noRd
#' #' @importFrom shiny tagList
#' app_ui <- function(request) {
#'   shiny::tagList(
#'     tgdashboard::tg_header(
#'       title    = "indikatoren_db",
#'       subtitle = "Ein Dashboard im Thurgauer Designstil"
#'     ),
#'     bslib::page_fixed(
#'       title = "indikatoren_db",
#'       theme = bslib::bs_theme(
#'         brand = system.file("_brand.yml", package = "indikatoren.db")
#'       ),
#'       add_external_resources(),
#'       tgdashboard::chart_title_inject_css(),
#'       tgdashboard::echarts_map_register_once(),
#'
#'       # ---------------------
#'       # Inhalt hier einfuegen
#'       # ---------------------
#'       bslib::navset_tab(
#'         id = "main_tabs",
#'         bslib::nav_panel(
#'           title = "Karte",
#'           mod_karte_ui("karte")
#'         )
#'       )
#'     ),
#'     tgdashboard::tg_footer("ftr")
#'   )
#' }
#'

#' @noRd
#' @importFrom shiny tagList
app_ui <- function(request) {
  shiny::tagList(
    tgdashboard::tg_header(
      title    = "Thurgauer Themenatlas",
      subtitle = "Statistische Indikatoren der Thurgauer Gemeinden"
    ),
    bslib::page_fixed(
      title = "indikatoren_db",
      theme = bslib::bs_theme(
        brand = system.file("_brand.yml", package = "indikatoren.db")
      ),
      add_external_resources(),
      tgdashboard::chart_title_inject_css(),
      inddb_map_register_once(),
      bslib::navset_tab(
        id = "main_tabs",
        bslib::nav_panel(
          title = "Karte",
          mod_karte_ui("karte")
        )
      )
    ),
    tgdashboard::tg_footer("ftr")
  )
}
