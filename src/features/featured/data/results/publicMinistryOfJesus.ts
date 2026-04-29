import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const publicMinistryOfJesusResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '예수님의 공생애',
  summaryKo:
    '예수님의 공생애는 세례 요한에게 세례를 받으신 후 약 3년 반 동안 갈릴리와 유대 지역을 중심으로 하나님 나라의 복음을 선포하고, 제자들을 훈련하시며, 병든 자를 고치고 죄인을 용서하신 사역의 기간입니다. 십자가의 죽음과 부활로 구원의 사역을 완성하셨습니다.',
  bibleVerses: [
    {
      reference: '마가복음 1:9-11',
      verseTextKo:
        '예수께서 나사렛으로부터 와서 요단강에서 요한에게 세례를 받으시고… 하늘로부터 소리가 나기를 “너는 내 사랑하는 아들이라” 하시니라.',
    },
    {
      reference: '마태복음 4:23',
      verseTextKo:
        '예수께서 온 갈릴리에 두루 다니사… 천국 복음을 전파하시며 모든 병과 약한 것을 고치시니.',
    },
    {
      reference: '누가복음 19:10',
      verseTextKo: '인자가 온 것은 잃어버린 자를 찾아 구원하려 함이니라.',
    },
  ],
  routeStops: [
    {
      id: 'route-baptism-jordan',
      displayNameKo: '유대 광야(요단강, 세례터)',
      coordinates: { lat: 31.81, lng: 35.55 },
      placeType: 'region',
      whyHereKo: '세례 요한에게 세례를 받으신 사건의 무대입니다.',
      confidence: 0.75,
    },
    {
      id: 'route-nazareth',
      displayNameKo: '나사렛',
      coordinates: { lat: 32.6996, lng: 35.3035 },
      placeType: 'city',
      whyHereKo: '갈릴리의 도시로, 예수님의 성장 배경과 초기 사역과 연결됩니다.',
      confidence: 0.7,
    },
    {
      id: 'route-capernaum',
      displayNameKo: '가버나움',
      coordinates: { lat: 32.88, lng: 35.58 },
      placeType: 'city',
      whyHereKo: '갈릴리 사역의 거점으로 자주 언급되는 장소입니다.',
      confidence: 0.7,
    },
    {
      id: 'route-sea-of-galilee',
      displayNameKo: '갈릴리 호수',
      coordinates: { lat: 32.83, lng: 35.59 },
      placeType: 'region',
      whyHereKo: '제자 부르심과 가르침, 기적 사건이 집중된 지역입니다.',
      confidence: 0.75,
    },
    {
      id: 'route-tyre-sidon',
      displayNameKo: '두로와 시돈 지역',
      coordinates: { lat: 33.2, lng: 35.25 },
      placeType: 'region',
      whyHereKo: '갈릴리 북서쪽 이방 지역으로의 이동이 언급됩니다.',
      confidence: 0.55,
    },
    {
      id: 'route-caesarea-philippi',
      displayNameKo: '가이사랴 빌립보',
      coordinates: { lat: 33.25, lng: 35.69 },
      placeType: 'city',
      whyHereKo: '베드로의 신앙 고백(“주는 그리스도…”)이 나온 지역으로 유명합니다.',
      confidence: 0.7,
    },
    {
      id: 'route-transfiguration',
      displayNameKo: '변화산',
      coordinates: { lat: 32.73, lng: 35.39 },
      placeType: 'region',
      whyHereKo: '예수님이 영광스러운 모습으로 변화되신 사건과 연결됩니다(전통적으로 다볼산 추정).',
      confidence: 0.5,
    },
    {
      id: 'route-jericho',
      displayNameKo: '여리고',
      coordinates: { lat: 31.87, lng: 35.45 },
      placeType: 'city',
      whyHereKo: '예루살렘으로 올라가는 여정 중 언급되는 요충지입니다.',
      confidence: 0.65,
    },
    {
      id: 'route-bethany',
      displayNameKo: '베다니',
      coordinates: { lat: 31.77, lng: 35.27 },
      placeType: 'city',
      whyHereKo: '예루살렘 동쪽의 마을로, 마지막 주간과 연결되는 사건들이 언급됩니다.',
      confidence: 0.7,
    },
    {
      id: 'route-jerusalem',
      displayNameKo: '예루살렘',
      coordinates: { lat: 31.778, lng: 35.235 },
      placeType: 'city',
      whyHereKo: '공생애의 절정(성전, 십자가, 부활 사건)이 집중되는 도시입니다.',
      confidence: 0.8,
    },
  ],
  routeLegs: [
    { fromStopId: 'route-baptism-jordan', toStopId: 'route-nazareth', travelMode: 'land' },
    { fromStopId: 'route-nazareth', toStopId: 'route-capernaum', travelMode: 'land' },
    { fromStopId: 'route-capernaum', toStopId: 'route-sea-of-galilee', travelMode: 'land' },
    { fromStopId: 'route-sea-of-galilee', toStopId: 'route-tyre-sidon', travelMode: 'land' },
    { fromStopId: 'route-tyre-sidon', toStopId: 'route-caesarea-philippi', travelMode: 'land' },
    { fromStopId: 'route-caesarea-philippi', toStopId: 'route-transfiguration', travelMode: 'land' },
    { fromStopId: 'route-transfiguration', toStopId: 'route-jericho', travelMode: 'land' },
    { fromStopId: 'route-jericho', toStopId: 'route-bethany', travelMode: 'land' },
    { fromStopId: 'route-bethany', toStopId: 'route-jerusalem', travelMode: 'land' },
  ],
  christianLandmarks: [],
  mapReferenceLabels: [
    { id: 'ref-israel', labelKo: '이스라엘', coordinates: { lat: 31.9, lng: 34.9 }, kind: 'country' },
    { id: 'ref-jordan', labelKo: '요르단', coordinates: { lat: 31.3, lng: 36.3 }, kind: 'country' },
    { id: 'ref-mediterranean', labelKo: '지중해', coordinates: { lat: 32.4, lng: 34.2 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [],
}

