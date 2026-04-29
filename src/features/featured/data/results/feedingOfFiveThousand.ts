import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const feedingOfFiveThousandResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '오병이어',
  summaryKo:
    '오병이어는 예수님께서 보리빵 다섯 개와 물고기 두 마리로 남자 오천 명을 먹이시고도 남은 조각이 열두 바구니에 가득 찼던 기적을 말합니다. 이 기적은 갈릴리 바다 동편의 한적한 곳에서 일어났으며, 예수님의 신성과 능력을 보여주는 중요한 사건입니다.',
  bibleVerses: [
    {
      reference: '요한복음 6:9-11',
      verseTextKo:
        '여기 한 아이가 있어 보리떡 다섯 개와 물고기 두 마리를 가지고 있나이다 그러나 이것이 이 많은 사람에게 얼마나 되겠사옵나이까 예수께서 이르시되 이 사람들로 앉게 하라 하시니 그 곳에 잔디가 많은지라 사람들이 앉으니 수효가 오천 명쯤 되더라 예수께서 떡을 가져 축사하신 후에 앉아 있는 자들에게 나눠 주시고 또 물고기도 그렇게 그들의 원대로 주시니라',
    },
    {
      reference: '마태복음 14:19-20',
      verseTextKo:
        '무리를 명하여 잔디 위에 앉히시고 떡 다섯 개와 물고기 두 마리를 가지사 하늘을 우러러 축사하시고 떡을 떼어 제자들에게 주시매 제자들이 무리에게 주니 다 배불리 먹고 남은 조각을 열두 바구니에 차게 거두었으며',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '갈릴리 서쪽 해안',
      displayNameEn: 'Western Shore of Galilee',
      coordinates: { lat: 32.85, lng: 35.55 },
      placeType: 'region',
      whyHereKo: '예수님과 제자들이 오병이어 기적 장소로 떠나기 전 머물렀던 갈릴리 서편의 일반적인 지역입니다. 아마도 가버나움 근처였을 것입니다.',
      confidence: 0.8,
    },
    {
      id: 'route-2',
      displayNameKo: '오병이어 기적 장소',
      displayNameEn: 'Site of Feeding the Five Thousand',
      coordinates: { lat: 32.87, lng: 35.63 },
      placeType: 'region',
      whyHereKo:
        "예수님께서 오천 명을 먹이신 기적이 일어난 곳입니다. 성경은 '한적한 곳' 또는 '벳새다라는 고을로' 가셨다고 기록하며, 갈릴리 바다 동편, 벳새다 율리아스 근처로 추정됩니다.",
      confidence: 0.75,
    },
    {
      id: 'route-3',
      displayNameKo: '가버나움',
      displayNameEn: 'Capernaum',
      coordinates: { lat: 32.8805, lng: 35.5605 },
      placeType: 'city',
      whyHereKo:
        '오병이어 기적 후 예수님께서 제자들을 먼저 보내어 건너편으로 가게 하셨는데, 요한복음에는 그들이 가버나움으로 가고 있었다고 기록되어 있습니다.',
      confidence: 0.9,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'route-1',
      toStopId: 'route-2',
      travelMode: 'sea',
      noteKo: '예수님과 제자들이 배를 타고 갈릴리 바다를 건너 한적한 곳으로 가셨습니다.',
    },
    {
      fromStopId: 'route-2',
      toStopId: 'route-3',
      travelMode: 'sea',
      noteKo: '오병이어 기적 후 예수님께서 제자들을 배에 태워 갈릴리 바다 건너편 가버나움으로 보내셨습니다.',
    },
  ],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '갈릴리 바다',
      displayNameEn: 'Sea of Galilee',
      coordinates: { lat: 32.8333, lng: 35.5833 },
      placeType: 'region',
      summaryKo: '예수님의 주요 사역지 중 하나로, 오병이어 기적이 일어난 장소와 밀접하게 관련되어 있습니다. 기적 전후로 배를 타고 건너는 장면이 나옵니다.',
      confidence: 1,
    },
    {
      id: 'landmark-2',
      displayNameKo: '가버나움',
      displayNameEn: 'Capernaum',
      coordinates: { lat: 32.8805, lng: 35.5605 },
      placeType: 'city',
      summaryKo: '예수님의 주요 사역 도시 중 하나로, 오병이어 기적 후 제자들이 도착한 곳입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-3',
      displayNameKo: '벳새다',
      displayNameEn: 'Bethsaida',
      coordinates: { lat: 32.89, lng: 35.62 },
      placeType: 'city',
      summaryKo: '오병이어 기적이 일어난 장소와 가까운 곳으로 언급되는 도시입니다. 주로 갈릴리 바다 동편의 벳새다 율리아스를 가리킵니다.',
      confidence: 0.9,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-ref-1', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-ref-2', labelKo: '요르단', coordinates: { lat: 31, lng: 36.5 }, kind: 'country' },
    { id: 'map-ref-3', labelKo: '갈릴리 바다', coordinates: { lat: 32.8333, lng: 35.5833 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    '오병이어 기적이 일어난 정확한 장소는 성경 학자들 사이에서 논쟁의 여지가 있습니다. 일반적으로 갈릴리 바다 동편, 벳새다 율리아스 근처의 한적한 곳으로 추정됩니다.',
    "성경에 언급된 '벳새다'는 갈릴리 서편의 벳새다와 동편의 벳새다 율리아스 중 어느 곳을 지칭하는지에 대한 견해가 나뉩니다. 본 자료에서는 오병이어 기적 장소와 관련하여 동편의 벳새다 율리아스를 중심으로 설명했습니다.",
  ],
}

