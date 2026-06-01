# raw_db

<!-- badges: start -->
<!-- badges: end -->

Ein Shiny-Dashboard im Thurgauer Designstil, erstellt mit dem
[`tgdashboard`](https://github.com/ogdtg/tgdashboard)-Paket.

## Projektstruktur

```
raw.db/
├── R/
│   ├── app_ui.R          # UI-Funktion (Thurgau-Header, bslib-Layout)
│   ├── app_server.R      # Server-Logik
│   ├── run_app.R         # run_app()-Einstiegspunkt (von golem)
│   ├── app_config.R      # golem-Konfiguration
│   └── add_resources.R   # CSS/JS-Ressourcen-Loader
├── inst/
│   ├── _brand.yml        # Thurgau-Branding (anpassbar)
│   ├── app/www/          # Favicon, Schriften
│   ├── golem-config.yml
│   └── packer/           # JavaScript-Bindings
├── dev/
│   ├── 01_start.R        # Einmalige Initialisierung
│   ├── 02_dev.R          # Entwicklungs-Workflow
│   ├── 03_deploy.R       # Deployment
│   └── gallery.R         # Alle tgdashboard-Komponenten
├── DESCRIPTION
└── README.md
```

## Erste Schritte

```r
# 1. Pakete laden
devtools::load_all()

# 2. App starten
run_app()

# 3. Gallery starten (alle verfuegbaren Komponenten)
shiny::runApp("dev/gallery.R")
```

## Neues Modul hinzufuegen

```r
# Modul-Dateien erzeugen (erstellt R/mod_mein_modul.R)
golem::add_module(name = "mein_modul")
```

Modul in `R/app_ui.R` und `R/app_server.R` einbinden:

```r
# In app_ui.R:
mod_mein_modul_ui("modul1")

# In app_server.R:
mod_mein_modul_server("modul1")
```

## CSS / Design anpassen

Das Thurgauer Branding wird ueber `inst/_brand.yml` gesteuert.
Eigenes CSS in `inst/app/www/custom.css` ablegen — wird automatisch
geladen, da `add_external_resources()` den gesamten `app/www/`-Ordner
einbindet.

```r
tgdashboard::tg_theme_colors()           # Standardpalette
tgdashboard::tg_theme_colors("stacked") # Gestapelte Diagramme
tgdashboard::tg_choro_seq()             # Sequentielle Kartenpaletten
tgdashboard::tg_choro_div()             # Divergente Kartenpaletten
```

## Deployment

```r
# Dockerfile erstellen:
golem::add_dockerfile()

# Auf shinyapps.io deployen:
rsconnect::deployApp()

# Paket bauen:
devtools::build()
```

## Dokumentation

```r
vignette("einstieg",       package = "tgdashboard")  # Schnellstart
vignette("plots",          package = "tgdashboard")  # Plot-Funktionen
vignette("shiny-struktur", package = "tgdashboard")  # Dashboard-Architektur
vignette("gallery",        package = "tgdashboard")  # Gallery-App
```

