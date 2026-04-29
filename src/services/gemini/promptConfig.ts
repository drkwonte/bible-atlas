const PROMPT_LANGUAGE = 'ko'

export const GEMINI_OUTPUT_MIME_TYPE = 'application/json'

export const GEMINI_SYSTEM_INSTRUCTIONS = [
  'You are a Bible geography assistant.',
  'Return ONLY valid JSON that matches the requested schema. No markdown, no prose.',
  'All user-facing strings must be in Korean unless explicitly marked as English fields.',
  'All place names must be in Korean for displayNameKo. English can be in displayNameEn.',
  'Coordinates must be real-world WGS84 lat/lng.',
  'If the topic is ambiguous, still choose the most likely interpretation and add cautionsKo.',
].join('\n')

export function buildGeminiUserPrompt(topic: string): string {
  return [
    `Language: ${PROMPT_LANGUAGE}`,
    `Topic: ${topic}`,
    '',
    'Schema (JSON):',
    `{
  "normalizedTopicKo": string,
  "summaryKo": string,
  "bibleVerses": Array<{
    "reference": string,
    "verseTextKo": string,
  }>,
  "routeStops": Array<{
    "id": string,
    "displayNameKo": string,
    "displayNameEn"?: string,
    "coordinates": { "lat": number, "lng": number },
    "placeType": "city" | "region",
    "whyHereKo": string,
    "confidence": number
  }>,
  "routeLegs": Array<{
    "fromStopId": string,
    "toStopId": string,
    "travelMode": "land" | "sea",
    "noteKo"?: string
  }>,
  "christianLandmarks": Array<{
    "id": string,
    "displayNameKo": string,
    "displayNameEn"?: string,
    "coordinates": { "lat": number, "lng": number },
    "placeType": "city" | "region",
    "summaryKo": string,
    "confidence": number
  }>,
  "mapReferenceLabels": Array<{
    "id": string,
    "labelKo": string,
    "coordinates": { "lat": number, "lng": number },
    "kind": "sea" | "island" | "country" | "region"
  }>,
  "cautionsKo": string[]
}`,
    '',
    'Rules:',
    '- Use stable ids like "route-1", "context-2" etc.',
    '- routeStops: 1-20 items. If the topic is a journey/travel, routeStops MUST include the actual visited places (including ports) in travel sequence.',
    '- routeLegs: if journey/travel, MUST connect the routeStops using the correct travelMode ("land" or "sea"). Example: returning by ship must be "sea" even if it looks like a shortcut line.',
    '- IMPORTANT: For journeys like the Exodus, many stops are not cities. Still include them in routeStops with placeType="region" and still connect them in routeLegs. The UI must always show dots and lines for the full journey.',
    '- christianLandmarks: 0-8 items. These are NOT part of the route. Only include well-known, Christian/Biblical significant landmarks (e.g., Jerusalem, Bethlehem, Nazareth, Sea of Galilee, Mount Sinai, Jordan River). Do NOT include generic geography like "지중해" unless it is central to the biblical narrative being asked.',
    '- mapReferenceLabels: MUST be exactly 3 items. These are the only map-reading landmarks to show, so pick the most helpful ones.',
    '  - Include at least 2 country labels that help the user locate the area (kind="country").',
    '  - The 3rd item should be the single best regional anchor (major sea, major region, or major capital; kind="sea"|"region").',
    '  - Do NOT include small local features (rivers, small towns) here. Keep them high-level so they remain useful when zoomed out.',
    '  - Example for Persia/Susa: "이란"(country), "이라크"(country), "페르시아만"(sea) or "수산"(region).',
    '- bibleVerses must include 1-3 items. verseTextKo should be short.',
    '- confidence is 0..1. If uncertain, lower it and mention in cautionsKo.',
    '- placeType MUST be only "city" or "region". NEVER use "country" for placeType. If the stop is a country-level concept (e.g., "애굽"), still set placeType="region".',
    '- placeType "region" is for a region name (e.g., "구브로") that contains cities; regions should be labeled differently and should NOT be treated as a route stop unless explicitly traveled through as a region segment.',
  ].join('\n')
}

