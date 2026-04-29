import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const patmosIslandResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '발모섬',
  summaryKo:
    '발모섬은 에게해에 위치한 작은 섬으로, 신약성경 요한계시록의 저자인 사도 요한이 로마 황제 도미티아누스에 의해 유배되어 환상을 보고 계시를 기록한 곳으로 알려져 있습니다. 기독교 역사에서 매우 중요한 순례지 중 하나입니다.',
  bibleVerses: [
    {
      reference: '요한계시록 1:9',
      verseTextKo:
        '나 요한은 너희 형제요 예수의 환난과 나라와 참음에 동참하는 자라 하나님의 말씀과 예수를 증언하였음으로 말미암아 밧모라 하는 섬에 있었더니',
    },
  ],
  routeStops: [
    {
      id: 'ephesus',
      displayNameKo: '에베소',
      displayNameEn: 'Ephesus',
      coordinates: { lat: 37.9497, lng: 27.3678 },
      placeType: 'city',
      whyHereKo: '사도 요한이 사역했던 주요 도시이자 발모섬으로 유배되기 전의 거점으로 추정됩니다.',
      confidence: 1,
    },
    {
      id: 'patmos',
      displayNameKo: '발모섬',
      displayNameEn: 'Patmos',
      coordinates: { lat: 37.3, lng: 26.55 },
      placeType: 'region',
      whyHereKo: '사도 요한이 유배되어 요한계시록을 기록한 곳입니다.',
      confidence: 1,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'ephesus',
      toStopId: 'patmos',
      travelMode: 'sea',
      noteKo: '사도 요한이 에베소에서 발모섬으로 유배된 경로를 나타냅니다.',
    },
  ],
  christianLandmarks: [
    {
      id: 'patmos-island',
      displayNameKo: '발모섬',
      displayNameEn: 'Patmos Island',
      coordinates: { lat: 37.3, lng: 26.55 },
      placeType: 'region',
      summaryKo:
        "사도 요한이 요한계시록을 기록한 성스러운 섬으로, '계시의 동굴'과 '성 요한 수도원' 등 중요한 기독교 유적지가 있습니다.",
      confidence: 1,
    },
    {
      id: 'ephesus-city',
      displayNameKo: '에베소',
      displayNameEn: 'Ephesus',
      coordinates: { lat: 37.9497, lng: 27.3678 },
      placeType: 'city',
      summaryKo:
        '초기 기독교의 중요한 중심지 중 하나로, 사도 바울과 요한이 사역했으며 요한계시록에 언급된 일곱 교회 중 하나입니다.',
      confidence: 1,
    },
  ],
  mapReferenceLabels: [
    { id: 'greece', labelKo: '그리스', coordinates: { lat: 39.0742, lng: 21.8243 }, kind: 'country' },
    { id: 'turkey', labelKo: '튀르키예', coordinates: { lat: 38.9637, lng: 35.2433 }, kind: 'country' },
    { id: 'aegean-sea', labelKo: '에게해', coordinates: { lat: 38, lng: 25 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [],
}

