# Aggregationsfunktionen ---------------------------------------------------
#
# Hilfsfunktionen, um Gemeindewerte auf Bezirks- und Kantonsebene zu
# aggregieren. Sie erwarten ein langes Datenformat mit den Spalten
# `jahr`, `bfs_nr_gemeinde`, `value` und optional `share` / `filter1`.

#' Symmetrische Differenz zweier Vektoren
outersect <- function(x, y) {
  sort(c(setdiff(x, y),
         setdiff(y, x)))
}

#' Gemeindewerte auf Bezirksebene aggregieren
#'
#' @param data data.frame mit `jahr`, `bfs_nr_gemeinde`, `value`
#' @param type "sum" oder "mean"
#' @param bezirk_data Zuordnung Gemeinde -> Bezirk
summarise_bezirk <- function(data, type = "sum", bezirk_data) {

  share <- "share" %in% colnames(data)

  data_mod <- data %>%
    left_join(bezirk_data, "bfs_nr_gemeinde")

  if ("filter1" %in% colnames(data)) {
    data_mod <- data_mod %>%
      group_by(jahr, bfs_nr_bezirk, filter1)
  } else {
    data_mod <- data_mod %>%
      group_by(jahr, bfs_nr_bezirk)
  }

  if (type == "sum") {
    data_mod <- data_mod %>%
      summarise(value = sum(value, na.rm = TRUE)) %>%
      ungroup()

    if (share) {
      if ("filter1" %in% colnames(data)) {
        data_mod <- data_mod %>%
          group_by(jahr, bfs_nr_bezirk) %>%
          mutate(share = value / sum(value) * 100) %>%
          ungroup()
      } else {
        data_mod <- data_mod %>%
          group_by(jahr) %>%
          mutate(share = value / sum(value) * 100) %>%
          ungroup()
      }
    }
  } else if (type == "mean") {
    data_mod <- data_mod %>%
      summarise(value = mean(value, na.rm = TRUE)) %>%
      ungroup()
  }

  data_mod %>%
    rename(bfs_nr_gemeinde = "bfs_nr_bezirk")
}

#' Gemeindewerte auf Kantonsebene aggregieren (bfs_nr_gemeinde == "20")
summarise_kanton <- function(data, type = "sum") {

  share <- "share" %in% colnames(data)

  if ("filter1" %in% colnames(data)) {
    data_mod <- data %>%
      group_by(jahr, filter1)
  } else {
    data_mod <- data %>%
      group_by(jahr)
  }

  if (type == "sum") {
    data_mod <- data_mod %>%
      summarise(value = sum(value, na.rm = TRUE)) %>%
      ungroup() %>%
      mutate(bfs_nr_bezirk = "20")

    if (share) {
      if ("filter1" %in% colnames(data)) {
        data_mod <- data_mod %>%
          group_by(jahr, bfs_nr_bezirk) %>%
          mutate(share = value / sum(value) * 100) %>%
          ungroup()
      } else {
        data_mod <- data_mod %>%
          mutate(share = 1) %>%
          ungroup()
      }
    }
  } else if (type == "mean") {
    data_mod <- data_mod %>%
      summarise(value = mean(value, na.rm = TRUE)) %>%
      ungroup() %>%
      mutate(bfs_nr_bezirk = "20")
  }

  data_mod %>%
    rename(bfs_nr_gemeinde = "bfs_nr_bezirk")
}

#' Gemeinde-, Bezirks- und Kantonswerte zusammenführen
summarise_bezirk_kanton <- function(data, type = "sum", bezirk_data) {
  data_bez <- summarise_bezirk(data, type, bezirk_data)
  data_kt  <- summarise_kanton(data, type)

  data %>%
    bind_rows(data_bez) %>%
    bind_rows(data_kt) %>%
    arrange(jahr)
}
