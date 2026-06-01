#' Externe Ressourcen laden
#'
#' Bindet CSS, Schriften und JavaScript-Bindings aus diesem Paket ein.
#' Wird in app_ui() aufgerufen.
#' @importFrom htmltools htmlDependency tagList
#' @noRd
add_external_resources <- function() {
  tagList(
    htmlDependency(
      name      = "raw.db",
      version   = "1.0.0",
      src       = c(file = system.file("app/www", package = "raw.db")),
      all_files = TRUE
    ),
    htmlDependency(
      name      = "raw.db.maps",
      version   = "1.0.0",
      src       = c(file = system.file("extdata", package = "tgdashboard")),
      all_files = TRUE
    ),
    htmlDependency(
      name    = "cardVisibility",
      version = "1.0.0",
      src     = c(file = system.file("packer", package = "raw.db")),
      script  = "cardVisibility.js"
    ),
    htmlDependency(
      name    = "tg_header",
      version = "1.0.0",
      src     = c(file = system.file("packer", package = "raw.db")),
      script  = "tg_header.js"
    ),
    htmlDependency(
      name    = "tg_footer",
      version = "1.0.0",
      src     = c(file = system.file("packer", package = "raw.db")),
      script  = "tg_footer.js"
    ),
    htmlDependency(
      name    = "mapInput",
      version = "1.0.0",
      src     = c(file = system.file("packer", package = "raw.db")),
      script  = "mapInput.js"
    )
  )
}

