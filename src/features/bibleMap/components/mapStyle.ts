import type { StyleSpecification } from 'maplibre-gl'
import { env } from '../../../shared/config/env'

const DEFAULT_OSM_ATTRIBUTION_HTML =
  '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'

const DEFAULT_RASTER_TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

const DEFAULT_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: [DEFAULT_RASTER_TILE_URL],
      tileSize: 256,
      attribution: DEFAULT_OSM_ATTRIBUTION_HTML,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
    },
  ],
}

export function getMapStyle(): string | StyleSpecification {
  return env.mapStyleUrl() ?? DEFAULT_STYLE
}

export function getAttributionHtml(): string {
  return env.mapAttributionHtml() ?? DEFAULT_OSM_ATTRIBUTION_HTML
}

