import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const queenEstherResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '에스더 왕비',
  summaryKo:
    "에스더 왕비는 페르시아 제국의 아하수에로 왕의 왕비가 되어 유대 민족을 하만의 음모로부터 구원한 용감한 여인입니다. 그녀는 모르드개의 사촌이자 양녀로, '죽으면 죽으리라'는 결단으로 왕 앞에 나아가 유대인 학살을 막고 부림절의 기원을 마련했습니다.",
  bibleVerses: [
    {
      reference: '에스더 2:17',
      verseTextKo:
        '왕이 모든 여자보다 에스더를 더 사랑하므로 그가 모든 처녀보다 왕 앞에 더 은총을 얻은지라 왕이 그의 머리에 왕후의 관을 씌우고 와스디를 대신하여 왕후로 삼으니라.',
    },
    {
      reference: '에스더 4:14',
      verseTextKo:
        '이 때에 네가 만일 잠잠하여 말이 없으면 유다인은 다른 데로 말미암아 구원을 얻으려니와 너와 네 아버지 집은 멸망하리라 네가 왕후의 위를 얻은 것이 이 때를 위함이 아닌지 누가 알겠느냐 하니',
    },
    {
      reference: '에스더 8:7-8',
      verseTextKo:
        '아하수에로 왕이 왕후 에스더와 유다인 모르드개에게 이르되 하만이 유다인을 해하려 하므로 나무에 매달렸고 내가 하만의 집을 에스더에게 주었으니 너희는 왕의 이름으로 유다인에게 조서를 뜻대로 쓰고 왕의 반지로 인을 칠지어다 왕의 이름으로 쓰고 왕의 반지로 인친 조서는 누구든지 철회할 수 없음이니라 하니라.',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '수산',
      displayNameEn: 'Susa',
      coordinates: { lat: 32.1936, lng: 48.2469 },
      placeType: 'city',
      whyHereKo: '에스더 왕비의 이야기가 전개된 페르시아 제국의 수도이자 왕궁이 있던 곳입니다.',
      confidence: 1,
    },
  ],
  routeLegs: [],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo: '유대 민족의 영적 수도이자 고향으로, 에스더가 구원한 유대인들의 정체성과 신앙의 중심지입니다.',
      confidence: 0.9,
    },
  ],
  mapReferenceLabels: [
    { id: 'label-1', labelKo: '이란', coordinates: { lat: 32, lng: 53 }, kind: 'country' },
    { id: 'label-2', labelKo: '이라크', coordinates: { lat: 33, lng: 44 }, kind: 'country' },
    { id: 'label-3', labelKo: '페르시아만', coordinates: { lat: 26, lng: 51 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    '에스더 왕비의 이야기는 주로 페르시아의 수도 수산에서 전개되므로, 특정 여정이나 이동 경로가 명확하지 않습니다. 주요 배경지인 수산과 유대 민족의 고향인 예루살렘을 중심으로 정보를 제공합니다.',
  ],
}

