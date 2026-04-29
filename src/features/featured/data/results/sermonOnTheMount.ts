import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const sermonOnTheMountResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '산상수훈',
  summaryKo:
    '산상수훈은 마태복음 5-7장에 기록된 예수님의 가장 중요한 가르침 중 하나입니다. 팔복, 주기도문, 그리고 살인, 간음, 맹세, 보복, 사랑 등 다양한 윤리적, 영적 원리에 대한 가르침을 포함하며, 기독교 윤리의 기초로 여겨집니다.',
  bibleVerses: [
    {
      reference: '마태복음 5:1-2',
      verseTextKo: '예수께서 무리를 보시고 산에 올라가 앉으시니 제자들이 나아온지라 입을 열어 가르쳐 이르시되',
    },
    {
      reference: '마태복음 5:3',
      verseTextKo: '심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요',
    },
    {
      reference: '마태복음 7:28-29',
      verseTextKo:
        '예수께서 이 말씀을 마치시매 무리가 그의 가르치심에 놀라니 이는 그 가르치시는 것이 권위 있는 자와 같고 그들의 서기관들과 같지 아니함일러라',
    },
  ],
  routeStops: [
    {
      id: 'stop-1',
      displayNameKo: '팔복산',
      displayNameEn: 'Mount of Beatitudes',
      coordinates: { lat: 32.8808, lng: 35.5497 },
      placeType: 'region',
      whyHereKo: '예수님께서 산상수훈을 가르치신 전통적인 장소입니다. 갈릴리 호수를 내려다보는 언덕에 위치해 있습니다.',
      confidence: 1,
    },
  ],
  routeLegs: [],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '갈릴리 호수',
      displayNameEn: 'Sea of Galilee',
      coordinates: { lat: 32.8333, lng: 35.5833 },
      placeType: 'region',
      summaryKo: '예수님의 주요 사역지 중 하나이며, 산상수훈이 선포된 팔복산과 인접해 있습니다.',
      confidence: 1,
    },
    {
      id: 'landmark-2',
      displayNameKo: '가버나움',
      displayNameEn: 'Capernaum',
      coordinates: { lat: 32.8808, lng: 35.5608 },
      placeType: 'city',
      summaryKo: '예수님께서 갈릴리 사역의 중심지로 삼으셨던 도시로, 산상수훈이 선포된 장소와 가깝습니다.',
      confidence: 1,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-label-1', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-label-2', labelKo: '요르단', coordinates: { lat: 31, lng: 36 }, kind: 'country' },
    { id: 'map-label-3', labelKo: '지중해', coordinates: { lat: 33, lng: 33 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    '산상수훈이 선포된 정확한 산의 위치는 성경에 명시되어 있지 않으며, 팔복산은 전통적으로 알려진 장소입니다.',
  ],
}

