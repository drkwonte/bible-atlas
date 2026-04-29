import {
  geminiBibleMapResponseSchema,
  type GeminiBibleMapResponse,
} from './schemas'
import { GEMINI_OUTPUT_MIME_TYPE } from './promptConfig'

const ANALYZE_API_PATH = '/api/analyze'
const DEFAULT_TRAVEL_MODE = 'land' as const
const MAX_ROUTE_STOPS = 20
const MAX_CONTEXT_LANDMARKS = 12

function isValidLatLng(coords: { lat: number; lng: number }): boolean {
  if (!Number.isFinite(coords.lat) || !Number.isFinite(coords.lng)) return false
  if (coords.lat < -90 || coords.lat > 90) return false
  if (coords.lng < -180 || coords.lng > 180) return false
  return true
}

function dedupeByNormalizedName<T extends { displayNameKo: string }>(items: readonly T[]): T[] {
  const byName = new Map<string, T>()
  for (const item of items) {
    const key = item.displayNameKo.trim().toLowerCase()
    if (!key) continue
    if (!byName.has(key)) byName.set(key, item)
  }
  return [...byName.values()]
}

function sanitizeResult(result: GeminiBibleMapResponse): GeminiBibleMapResponse {
  const routeStops = dedupeByNormalizedName(
    result.routeStops.filter((s) => isValidLatLng(s.coordinates)),
  ).slice(0, MAX_ROUTE_STOPS)

  const stopIds = new Set(routeStops.map((s) => s.id))
  const routeLegsFromModel = result.routeLegs.filter(
    (l) => stopIds.has(l.fromStopId) && stopIds.has(l.toStopId) && l.fromStopId !== l.toStopId,
  )

  const routeLegs =
    routeLegsFromModel.length > 0
      ? routeLegsFromModel
      : routeStops
          .slice(1)
          .map((stop, idx) => ({
            fromStopId: routeStops[idx]!.id,
            toStopId: stop.id,
            travelMode: DEFAULT_TRAVEL_MODE,
          }))

  const christianLandmarks = dedupeByNormalizedName(
    result.christianLandmarks.filter((p) => isValidLatLng(p.coordinates)),
  ).slice(0, MAX_CONTEXT_LANDMARKS)

  const mapReferenceLabels = result.mapReferenceLabels.filter((l) => isValidLatLng(l.coordinates))

  return {
    ...result,
    routeStops,
    routeLegs,
    christianLandmarks,
    mapReferenceLabels,
  }
}

export async function analyzeBibleTopic(topic: string): Promise<GeminiBibleMapResponse> {
  const response = await fetch(ANALYZE_API_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': GEMINI_OUTPUT_MIME_TYPE,
    },
    body: JSON.stringify({ topic }),
  })
  if (!response.ok) {
    throw new Error('분석 요청 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.')
  }
  const json: unknown = await response.json()

  const parsed = geminiBibleMapResponseSchema.safeParse(json)
  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message).join(' | ')
    throw new Error(`Gemini response schema mismatch: ${issues}`)
  }
  return sanitizeResult(parsed.data)
}

