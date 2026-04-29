import maplibregl, { LngLatBounds } from 'maplibre-gl'
import { useEffect, useMemo, useRef } from 'react'
import type { GeminiBibleMapResponse } from '../../../services/gemini/schemas'
import { getAttributionHtml, getMapStyle } from './mapStyle'

const INITIAL_ZOOM = 5
const INITIAL_CENTER: [number, number] = [35.2, 31.8] // [lng, lat] roughly Israel area
const MARKER_FIT_PADDING_PX = 56
const MARKER_FIT_MAX_ZOOM = 12

const MAP_CLASSNAME =
  'h-[min(70svh,720px)] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 lg:h-[calc(100dvh-7rem)] lg:max-h-none'

const PLACES_SOURCE_ID = 'bible-atlas-places'
const ROUTE_SOURCE_ID = 'bible-atlas-route'
const REFERENCE_SOURCE_ID = 'bible-atlas-reference'
const PRIMARY_CIRCLE_LAYER_ID = 'bible-atlas-primary-circles'
const SELECTED_CIRCLE_LAYER_ID = 'bible-atlas-selected-circle'
const NEARBY_CIRCLE_LAYER_ID = 'bible-atlas-nearby-circles'
const LABEL_LAYER_ID = 'bible-atlas-labels'
const SELECTED_LABEL_LAYER_ID = 'bible-atlas-selected-label'
const ROUTE_LAYER_ID = 'bible-atlas-route-line'
const ROUTE_SEA_LAYER_ID = 'bible-atlas-route-sea-line'
const REGION_LABEL_LAYER_ID = 'bible-atlas-region-labels'
const REFERENCE_LABEL_LAYER_ID = 'bible-atlas-reference-labels'

type PlaceMarker = {
  id: string
  kind: 'routeStop' | 'context'
  placeType: 'city' | 'region' | 'country'
  displayNameKo: string
  coordinates: { lat: number; lng: number }
}

function normalizePlaceType(placeType: PlaceMarker['placeType']): 'city' | 'region' {
  // Some model responses incorrectly return "country" here.
  // Treat it as a "region" for rendering purposes.
  return placeType === 'city' ? 'city' : 'region'
}

function toMarkers(result: GeminiBibleMapResponse | null): PlaceMarker[] {
  if (!result) return []
  const routeStops = result.routeStops.map((p) => ({
    id: p.id,
    kind: 'routeStop' as const,
    placeType: p.placeType,
    displayNameKo: p.displayNameKo,
    coordinates: p.coordinates,
  }))
  const landmarks = result.christianLandmarks.map((p) => ({
    id: p.id,
    kind: 'context' as const,
    placeType: p.placeType,
    displayNameKo: p.displayNameKo,
    coordinates: p.coordinates,
  }))
  return [...routeStops, ...landmarks]
}

function buildPlacesGeoJson(markers: PlaceMarker[]) {
  return {
    type: 'FeatureCollection',
    features: markers.map((m) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [m.coordinates.lng, m.coordinates.lat],
      },
      properties: {
        id: m.id,
        kind: m.kind,
            placeType: normalizePlaceType(m.placeType),
        nameKo: m.displayNameKo,
      },
    })),
  } as const
}

function buildRouteGeoJson(result: GeminiBibleMapResponse | null) {
  const stops = result?.routeStops ?? []
  const stopById = new Map(stops.map((s) => [s.id, s] as const))
  const legs = result?.routeLegs ?? []
  const features = legs
    .map((leg) => {
      const from = stopById.get(leg.fromStopId)
      const to = stopById.get(leg.toStopId)
      if (!from || !to) return null
      return {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [from.coordinates.lng, from.coordinates.lat],
            [to.coordinates.lng, to.coordinates.lat],
          ],
        },
        properties: {
          travelMode: leg.travelMode,
        },
      } as const
    })
    .filter(Boolean) as any[]

  return {
    type: 'FeatureCollection',
    features,
  } as const
}

function buildReferenceGeoJson(result: GeminiBibleMapResponse | null) {
  const labels = result?.mapReferenceLabels ?? []
  const merged = labels.map((l) => ({
    id: `gemini-${l.id}`,
    labelKo: l.labelKo,
    coordinates: l.coordinates,
    kind: l.kind,
  }))

  const uniqueByLabel = new Map<string, (typeof merged)[number]>()
  for (const l of merged) {
    uniqueByLabel.set(l.labelKo, l)
  }
  const uniq = [...uniqueByLabel.values()]

  return {
    type: 'FeatureCollection',
    features: uniq.map((l) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [l.coordinates.lng, l.coordinates.lat],
      },
      properties: {
        id: l.id,
        kind: l.kind,
        labelKo: l.labelKo,
      },
    })),
  } as const
}

export function MapView(props: {
  result: GeminiBibleMapResponse | null
  selectedPlaceId: string | null
  onSelectPlaceId: (placeId: string) => void
  isIdle: boolean
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const latestGeoJsonRef = useRef<{
    places: unknown
    route: unknown
    reference: unknown
  }>({ places: null, route: null, reference: null })

  const markers = useMemo(() => toMarkers(props.result), [props.result])
  const placesGeoJson = useMemo(() => buildPlacesGeoJson(markers), [markers])
  const routeGeoJson = useMemo(() => buildRouteGeoJson(props.result), [props.result])
  const referenceGeoJson = useMemo(() => {
    return buildReferenceGeoJson(props.result)
  }, [props.result, markers])

  function syncSources(map: maplibregl.Map) {
    const placesSource = map.getSource(PLACES_SOURCE_ID) as maplibregl.GeoJSONSource | undefined
    const routeSource = map.getSource(ROUTE_SOURCE_ID) as maplibregl.GeoJSONSource | undefined
    const referenceSource = map.getSource(REFERENCE_SOURCE_ID) as
      | maplibregl.GeoJSONSource
      | undefined
    if (!placesSource || !routeSource || !referenceSource) return

    placesSource.setData(latestGeoJsonRef.current.places as any)
    routeSource.setData(latestGeoJsonRef.current.route as any)
    referenceSource.setData(latestGeoJsonRef.current.reference as any)
  }

  useEffect(() => {
    if (!containerRef.current) return
    if (mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: getMapStyle(),
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
      attributionControl: false,
    })

    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
        customAttribution: getAttributionHtml(),
      }),
      'bottom-right',
    )
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right')

    map.on('load', () => {
      map.addSource(PLACES_SOURCE_ID, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      })
      map.addSource(ROUTE_SOURCE_ID, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      })
      map.addSource(REFERENCE_SOURCE_ID, {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
      })

      map.addLayer({
        id: ROUTE_LAYER_ID,
        type: 'line',
        source: ROUTE_SOURCE_ID,
        filter: ['==', ['get', 'travelMode'], 'land'],
        paint: {
          'line-color': '#7c3aed',
          'line-width': 3,
          'line-opacity': 0.75,
        },
      })

      map.addLayer({
        id: ROUTE_SEA_LAYER_ID,
        type: 'line',
        source: ROUTE_SOURCE_ID,
        filter: ['==', ['get', 'travelMode'], 'sea'],
        paint: {
          'line-color': '#2563eb',
          'line-width': 3,
          'line-opacity': 0.7,
          'line-dasharray': [2, 2],
        },
      })

      map.addLayer({
        id: PRIMARY_CIRCLE_LAYER_ID,
        type: 'circle',
        source: PLACES_SOURCE_ID,
        filter: ['==', ['get', 'kind'], 'routeStop'],
        paint: {
          'circle-radius': ['case', ['==', ['get', 'placeType'], 'region'], 6, 5],
          'circle-color': '#7c3aed',
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': ['case', ['==', ['get', 'placeType'], 'region'], 3, 2],
        },
      })

      map.addLayer({
        id: NEARBY_CIRCLE_LAYER_ID,
        type: 'circle',
        source: PLACES_SOURCE_ID,
        filter: ['all', ['==', ['get', 'kind'], 'context'], ['==', ['get', 'placeType'], 'city']],
        paint: {
          'circle-radius': 5,
          'circle-color': '#c8a24a',
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 2,
        },
      })

      map.addLayer({
        id: LABEL_LAYER_ID,
        type: 'symbol',
        source: PLACES_SOURCE_ID,
        filter: ['!=', ['get', 'kind'], 'context'],
        layout: {
          'text-field': ['get', 'nameKo'],
          'text-size': 12,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
          'text-allow-overlap': false,
          'text-ignore-placement': false,
        },
        paint: {
          'text-color': '#111827',
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.2,
        },
      })

      map.addLayer({
        id: REGION_LABEL_LAYER_ID,
        type: 'symbol',
        source: PLACES_SOURCE_ID,
        filter: ['==', ['get', 'placeType'], 'region'],
        layout: {
          'text-field': ['get', 'nameKo'],
          'text-size': 18,
          'text-offset': [0, 0.2],
          'text-anchor': 'center',
          'text-allow-overlap': false,
          'text-ignore-placement': false,
        },
        paint: {
          'text-color': '#1f2937',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
        },
      })

      map.addLayer({
        id: REFERENCE_LABEL_LAYER_ID,
        type: 'symbol',
        source: REFERENCE_SOURCE_ID,
        layout: {
          'text-field': ['get', 'labelKo'],
          'text-size': 16,
          'text-anchor': 'center',
          'text-allow-overlap': false,
          'text-ignore-placement': false,
        },
        paint: {
          'text-color': '#6b7280',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
          'text-opacity': 0.55,
        },
      })

      map.on('click', PRIMARY_CIRCLE_LAYER_ID, (e) => {
        const feature = e.features?.[0]
        const id = feature?.properties?.id
        if (typeof id === 'string') props.onSelectPlaceId(id)
      })
      map.on('click', NEARBY_CIRCLE_LAYER_ID, (e) => {
        const feature = e.features?.[0]
        const id = feature?.properties?.id
        if (typeof id === 'string') props.onSelectPlaceId(id)
      })

      map.on('mouseenter', PRIMARY_CIRCLE_LAYER_ID, () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', PRIMARY_CIRCLE_LAYER_ID, () => {
        map.getCanvas().style.cursor = ''
      })
      map.on('mouseenter', NEARBY_CIRCLE_LAYER_ID, () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', NEARBY_CIRCLE_LAYER_ID, () => {
        map.getCanvas().style.cursor = ''
      })

      // Selected layers MUST be top-most and ignore label collision.
      map.addLayer({
        id: SELECTED_CIRCLE_LAYER_ID,
        type: 'circle',
        source: PLACES_SOURCE_ID,
        filter: ['==', ['get', 'id'], '__none__'],
        paint: {
          'circle-radius': 8,
          'circle-color': '#7c3aed',
          'circle-opacity': 0.95,
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 3,
        },
      })

      map.addLayer({
        id: SELECTED_LABEL_LAYER_ID,
        type: 'symbol',
        source: PLACES_SOURCE_ID,
        filter: ['==', ['get', 'id'], '__none__'],
        layout: {
          'text-field': ['get', 'nameKo'],
          'text-size': 14,
          'text-offset': [0, 1.35],
          'text-anchor': 'top',
          'text-allow-overlap': true,
          'text-ignore-placement': true,
        },
        paint: {
          'text-color': '#111827',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
        },
      })

      // Critical: handle race between React state updates and map load.
      // If data was computed before the style loaded, push the latest data now.
      syncSources(map)
    })

    mapRef.current = map
    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    latestGeoJsonRef.current = {
      places: placesGeoJson,
      route: routeGeoJson,
      reference: referenceGeoJson,
    }

    syncSources(map)

    if (markers.length > 0) {
      const bounds = new LngLatBounds()
      for (const marker of markers) {
        bounds.extend([marker.coordinates.lng, marker.coordinates.lat])
      }
      map.fitBounds(bounds, {
        padding: MARKER_FIT_PADDING_PX,
        maxZoom: MARKER_FIT_MAX_ZOOM,
        duration: 650,
      })
      return
    }

    if (referenceGeoJson.features.length > 0) {
      const bounds = new LngLatBounds()
      for (const f of referenceGeoJson.features) {
        const coords = (f as any)?.geometry?.coordinates as unknown
        if (!Array.isArray(coords) || coords.length !== 2) continue
        const [lng, lat] = coords
        if (typeof lng !== 'number' || typeof lat !== 'number') continue
        bounds.extend([lng, lat])
      }

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, {
          padding: MARKER_FIT_PADDING_PX,
          maxZoom: Math.min(MARKER_FIT_MAX_ZOOM, 9),
          duration: 650,
        })
      }
    }
  }, [markers, placesGeoJson, routeGeoJson, referenceGeoJson])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const selected = props.selectedPlaceId
    const selectedFilter: any =
      typeof selected === 'string' && selected.length > 0
        ? (['==', ['get', 'id'], selected] as const)
        : (['==', ['get', 'id'], '__none__'] as const)

    if (map.getLayer(SELECTED_CIRCLE_LAYER_ID)) {
      map.setFilter(SELECTED_CIRCLE_LAYER_ID, selectedFilter)
    }
    if (map.getLayer(SELECTED_LABEL_LAYER_ID)) {
      map.setFilter(SELECTED_LABEL_LAYER_ID, selectedFilter)
    }

    if (!selected) return
    const feature = placesGeoJson.features.find((f) => (f as any)?.properties?.id === selected)
    const coords = feature?.geometry?.coordinates
    if (!Array.isArray(coords) || coords.length !== 2) return
    map.easeTo({ center: [coords[0], coords[1]], duration: 450 })
  }, [props.selectedPlaceId, placesGeoJson])

  return (
    <div className="relative">
      <div
        className={`${MAP_CLASSNAME} ${props.isIdle ? 'opacity-70 blur-[1px]' : ''}`.trim()}
        ref={containerRef}
      />
      {props.isIdle ? (
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3 text-xs font-bold tracking-[0.3em] text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 dark:text-zinc-300">
            WAITING FOR EXPLORATION INPUT
          </div>
        </div>
      ) : null}
    </div>
  )
}

