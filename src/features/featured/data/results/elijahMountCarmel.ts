import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const elijahMountCarmelResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '엘리야 갈멜산',
  summaryKo:
    '엘리야 선지자가 갈멜산에서 바알과 아세라 선지자 850명과 대결하여 여호와 하나님만이 참 신임을 증명하고, 이스라엘 백성에게 회개를 촉구한 사건입니다. 하늘에서 불이 내려 제물을 태우는 기적이 일어났고, 이후 바알 선지자들이 기손 시내에서 처형되었습니다. 엘리야의 간절한 기도로 3년 6개월간의 가뭄이 끝나고 큰 비가 내렸습니다.',
  bibleVerses: [
    {
      reference: '열왕기상 18:24',
      verseTextKo:
        '너희는 너희 신의 이름을 부르라 나는 여호와의 이름을 부르리니 이에 불로 응답하는 신 그가 하나님이니라 백성이 다 말하되 그 말이 옳도다 하니라',
    },
    {
      reference: '열왕기상 18:38',
      verseTextKo: '이에 여호와의 불이 내려서 번제물과 나무와 돌과 흙을 태우고 또 도랑의 물을 핥은지라',
    },
    {
      reference: '열왕기상 18:45',
      verseTextKo: '조금 후에 구름과 바람이 일어나서 하늘이 캄캄하여지며 큰 비가 내리는지라 아합이 마차를 타고 이스르엘로 가니',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '갈멜산',
      displayNameEn: 'Mount Carmel',
      coordinates: { lat: 32.678, lng: 35.034 },
      placeType: 'region',
      whyHereKo: '엘리야가 바알 선지자들과 대결하고 하늘에서 불이 내려 제물을 태운 기적이 일어난 장소입니다.',
      confidence: 1,
    },
    {
      id: 'route-2',
      displayNameKo: '기손 시내',
      displayNameEn: 'Kishon Brook',
      coordinates: { lat: 32.67, lng: 35.05 },
      placeType: 'region',
      whyHereKo: '갈멜산 대결 후, 바알과 아세라 선지자들이 엘리야의 명령에 따라 처형된 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-3',
      displayNameKo: '이스르엘',
      displayNameEn: 'Jezreel',
      coordinates: { lat: 32.562, lng: 35.295 },
      placeType: 'city',
      whyHereKo: '갈멜산 사건 이후 엘리야가 아합 왕의 마차보다 앞서 달려 도착한 도시입니다.',
      confidence: 1,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'route-1',
      toStopId: 'route-2',
      travelMode: 'land',
      noteKo: '갈멜산에서 기손 시내로 이동하여 바알 선지자들을 처형함',
    },
    {
      fromStopId: 'route-2',
      toStopId: 'route-3',
      travelMode: 'land',
      noteKo: '엘리야가 아합 왕의 마차보다 앞서 이스르엘로 달려감',
    },
  ],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo: '유대교와 기독교의 중심지이자 수많은 성경적 사건의 배경이 된 도시입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-2',
      displayNameKo: '갈릴리 바다',
      displayNameEn: 'Sea of Galilee',
      coordinates: { lat: 32.8333, lng: 35.5833 },
      placeType: 'region',
      summaryKo: '예수님의 주요 사역지 중 하나로, 많은 기적과 가르침이 일어난 곳입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-3',
      displayNameKo: '요단 강',
      displayNameEn: 'Jordan River',
      coordinates: { lat: 32.42, lng: 35.56 },
      placeType: 'region',
      summaryKo: '이스라엘과 요르단의 경계를 이루는 강으로, 세례 요한이 예수님께 세례를 베푼 곳입니다.',
      confidence: 1,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-label-1', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-label-2', labelKo: '요르단', coordinates: { lat: 31, lng: 36.5 }, kind: 'country' },
    { id: 'map-label-3', labelKo: '지중해', coordinates: { lat: 33, lng: 33 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [],
}

