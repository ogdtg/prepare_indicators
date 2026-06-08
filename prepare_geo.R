# prepare_geodata.R
# Einmalig ausführen um sf-Objekte in optimierte GeoJSON-Dateien zu konvertieren
# und Lookup-Tabellen als RDS zu speichern.
#
# Danach braucht die App:
#   - geojson/*.geojson   (statisch via addResourcePath)
#   - geojson/*.lookup.rds (bfsnr → name, klein, schnell ladbar)

library(sf)
library(jsonlite)

# ── Konfiguration ─────────────────────────────────────────────────────────────
# Passe diese Pfade an deine Projektstruktur an

SF_OBJECTS <- list(
  gemeinde = list(
    sf       = readRDS("data/geo/gemeindegrenzen.rds"),  # <- dein sf-Objekt
    name_col = "name",                  # <- Spalte mit Anzeigename
    bfs_col  = "bfsnr"                  # <- Spalte mit BFS-Nummer
  ),
  primarschulgemeinde = list(
    sf       = readRDS("data/geo/psg.rds"),  # <- dein sf-Objekt
    name_col = "name",                  # <- Spalte mit Anzeigename
    bfs_col  = "bfsnr"
  ),
  sekundarschulgemeinde = list(
    sf       = readRDS("data/geo/ssg.rds"),  # <- dein sf-Objekt
    name_col = "name",                  # <- Spalte mit Anzeigename
    bfs_col  = "bfsnr"
  ),
  volksschulgemeinde = list(
    sf       = readRDS("data/geo/vsg.rds"),  # <- dein sf-Objekt
    name_col = "name",                  # <- Spalte mit Anzeigename
    bfs_col  = "bfsnr"
  ),
  bezirk = list(
    sf       = readRDS("data/geo/bezirksgrenzen.rds"),  # <- dein sf-Objekt
    name_col = "name",                  # <- Spalte mit Anzeigename
    bfs_col  = "bfsnr"
  )
)

OUT_DIR <- "geojson"
dir.create(OUT_DIR, showWarnings = FALSE)

# ── Konvertierung ─────────────────────────────────────────────────────────────
for (geo_unit in names(SF_OBJECTS)) {
  cfg <- SF_OBJECTS[[geo_unit]]
  sf_obj  <- cfg$sf
  name_col <- cfg$name_col
  bfs_col  <- cfg$bfs_col

  message("Verarbeite: ", geo_unit)

  # Sicherstellen dass name_col und bfs_col existieren
  stopifnot(name_col %in% names(sf_obj))
  stopifnot(bfs_col  %in% names(sf_obj))

  # Auf WGS84 transformieren (echarts4r erwartet EPSG:4326)
  sf_wgs84 <- sf::st_transform(sf_obj, crs = 4326)

  # Geometrie vereinfachen (optional, reduziert Dateigrösse stark)
  # sf_wgs84 <- sf::st_simplify(sf_wgs84, dTolerance = 0.0001, preserveTopology = TRUE)

  # Nur relevante Spalten behalten
  if ("geometry" %in% names(sf_wgs84)){
    sf_clean <- sf_wgs84[, c(bfs_col, name_col, "geometry")]
  } else {
    sf_clean <- sf_wgs84[, c(bfs_col, name_col, "msGeometry")]
  }

  # Einheitliche Spaltennamen: bfsnr, name
  names(sf_clean)[names(sf_clean) == bfs_col]  <- "bfsnr"
  names(sf_clean)[names(sf_clean) == name_col] <- "name"

  # GeoJSON schreiben
  geojson_path <- file.path(OUT_DIR, paste0(geo_unit, ".geojson"))
  sf::st_write(
    sf_clean,
    geojson_path,
    driver     = "GeoJSON",
    layer_options = c("COORDINATE_PRECISION=6"),  # 6 Dezimalstellen reichen
    delete_dsn = TRUE,
    quiet      = TRUE
  )
  message("  GeoJSON: ", geojson_path, " (", round(file.size(geojson_path)/1024), " KB)")

  # Lookup-Tabelle speichern (bfsnr → name, kein sf, kein geometry)
  lookup <- data.frame(
    bfsnr  = as.character(sf_clean$bfsnr),
    region = as.character(sf_clean$name),
    stringsAsFactors = FALSE
  )
  lookup_path <- file.path(OUT_DIR, paste0(geo_unit, ".lookup.rds"))
  saveRDS(lookup, lookup_path)
  message("  Lookup:  ", lookup_path, " (", nrow(lookup), " Zeilen)")
}

message("\nFertig! Dateien in: ", OUT_DIR)
message("Nächster Schritt: app_thurgau.R starten")
