import { z } from 'zod'

const coordinateSchema = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
})

const placeTypeSchema = z.enum(['city', 'region', 'country'])
const travelModeSchema = z.enum(['land', 'sea'])

const routeStopSchema = z.object({
  id: z.string().min(1),
  displayNameKo: z.string().min(1),
  displayNameEn: z.string().optional(),
  coordinates: coordinateSchema,
  placeType: placeTypeSchema,
  whyHereKo: z.string().min(1),
  confidence: z.number().min(0).max(1),
})

const routeLegSchema = z.object({
  fromStopId: z.string().min(1),
  toStopId: z.string().min(1),
  travelMode: travelModeSchema,
  noteKo: z.string().min(1).optional(),
})

const christianLandmarkSchema = z.object({
  id: z.string().min(1),
  displayNameKo: z.string().min(1),
  displayNameEn: z.string().optional(),
  coordinates: coordinateSchema,
  placeType: placeTypeSchema.default('city'),
  summaryKo: z.string().min(1),
  confidence: z.number().min(0).max(1),
})

const referenceLabelSchema = z.object({
  id: z.string().min(1),
  labelKo: z.string().min(1),
  coordinates: coordinateSchema,
  kind: z.enum(['sea', 'island', 'country', 'region']),
})

export const geminiBibleMapResponseSchema = z.object({
  normalizedTopicKo: z.string().min(1),
  summaryKo: z.string().min(1),
  bibleVerses: z
    .array(
      z.object({
        reference: z.string().min(1),
        verseTextKo: z.string().min(1),
      }),
    )
    .min(1),
  // New fields (preferred)
  routeStops: z.array(routeStopSchema).default([]),
  routeLegs: z.array(routeLegSchema).default([]),
  christianLandmarks: z.array(christianLandmarkSchema).default([]),
  mapReferenceLabels: z.array(referenceLabelSchema).default([]),

  // Legacy fields (kept for backward compatibility)
  primaryPlaces: z
    .array(
      z.object({
        id: z.string().min(1),
        displayNameKo: z.string().min(1),
        displayNameEn: z.string().optional(),
        coordinates: coordinateSchema,
        whyHereKo: z.string().min(1),
        nearbyLandmarksKo: z.array(z.string().min(1)).default([]),
        confidence: z.number().min(0).max(1),
      }),
    )
    .default([]),
  nearbyPlaces: z
    .array(
      z.object({
        id: z.string().min(1),
        displayNameKo: z.string().min(1),
        displayNameEn: z.string().optional(),
        coordinates: coordinateSchema,
        summaryKo: z.string().min(1),
        confidence: z.number().min(0).max(1),
      }),
    )
    .default([]),
  cautionsKo: z.array(z.string().min(1)).default([]),
})
  .transform((data) => {
    // If model didn't return new fields, derive them from legacy fields.
    const derivedRouteStops =
      data.routeStops.length > 0
        ? data.routeStops
        : data.primaryPlaces.map((p) => ({
            ...p,
            placeType: 'city' as const,
          }))

    const derivedRouteLegs =
      data.routeLegs.length > 0
        ? data.routeLegs
        : derivedRouteStops
            .slice(1)
            .map((stop, idx) => ({
              fromStopId: derivedRouteStops[idx]?.id ?? '',
              toStopId: stop.id,
              travelMode: 'land' as const,
            }))
            .filter((leg) => leg.fromStopId.length > 0)

    const derivedLandmarks =
      data.christianLandmarks.length > 0
        ? data.christianLandmarks
        : data.nearbyPlaces.map((p) => ({
            ...p,
            placeType: 'city' as const,
          }))

    return {
      ...data,
      routeStops: derivedRouteStops,
      routeLegs: derivedRouteLegs,
      christianLandmarks: derivedLandmarks,
    }
  })

export type GeminiBibleMapResponse = z.infer<typeof geminiBibleMapResponseSchema>

