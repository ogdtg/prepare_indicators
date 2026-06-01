#' Die Shiny-Applikation Server-Logik
#'
#' @param input,output,session Interne Shiny-Parameter
#' @noRd
app_server <- function(input, output, session) {
  # Module einbinden
  mod_karte_server("karte")
}

