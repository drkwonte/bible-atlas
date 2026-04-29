import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const johnTheBaptistResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '세례 요한',
  summaryKo:
    '세례 요한은 예수 그리스도의 길을 예비한 선지자입니다. 그는 유대 광야에서 낙타 털옷을 입고 메뚜기와 들꿀을 먹으며 회개를 외쳤습니다. 요단강에서 많은 사람들에게 세례를 주었으며, 예수님께 세례를 베푼 것으로 가장 잘 알려져 있습니다. 헤롯 안티파스의 부도덕한 결혼을 비판하다가 투옥되어 마케루스 요새에서 참수당했습니다.',
  bibleVerses: [
    {
      reference: '누가복음 1:80',
      verseTextKo: '아이가 자라며 심령이 강하여지며 이스라엘에게 나타나는 날까지 빈 들에 있으니라.',
    },
    {
      reference: '마태복음 3:1-2',
      verseTextKo: '그 때에 세례 요한이 이르러 유대 광야에서 전파하여 말하되 회개하라 천국이 가까이 왔느니라 하였으니',
    },
    {
      reference: '요한복음 1:29',
      verseTextKo: '이튿날 요한이 예수께서 자기에게 나아오심을 보고 이르되 보라 세상 죄를 지고 가는 하나님의 어린 양이로다.',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '유대 광야',
      displayNameEn: 'Judean Wilderness',
      coordinates: { lat: 31.73, lng: 35.45 },
      placeType: 'region',
      whyHereKo: '세례 요한이 태어나 성장했으며, 사역을 시작하기 전까지 머물렀던 곳이자 회개를 외치며 사역을 시작한 곳입니다.',
      confidence: 0.95,
    },
    {
      id: 'route-2',
      displayNameKo: '요단강 건너편 베다니',
      displayNameEn: 'Bethany Beyond the Jordan',
      coordinates: { lat: 31.833, lng: 35.567 },
      placeType: 'region',
      whyHereKo: '세례 요한이 예수님께 세례를 베푼 곳으로 알려져 있습니다. 많은 사람들이 요한에게 세례를 받기 위해 이곳으로 왔습니다.',
      confidence: 0.9,
    },
    {
      id: 'route-3',
      displayNameKo: '살림 근처 애논',
      displayNameEn: 'Aenon near Salim',
      coordinates: { lat: 32.39, lng: 35.4 },
      placeType: 'region',
      whyHereKo: '요한이 이곳에서 세례를 주었는데, 이는 물이 많았기 때문이라고 성경에 기록되어 있습니다.',
      confidence: 0.7,
    },
    {
      id: 'route-4',
      displayNameKo: '마케루스',
      displayNameEn: 'Machaerus',
      coordinates: { lat: 31.567, lng: 35.667 },
      placeType: 'city',
      whyHereKo: '헤롯 안티파스에 의해 세례 요한이 투옥되고 참수당한 요새입니다.',
      confidence: 0.95,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'route-1',
      toStopId: 'route-2',
      travelMode: 'land',
      noteKo: '유대 광야에서 요단강 동편으로 이동하여 세례 사역을 시작했습니다.',
    },
    {
      fromStopId: 'route-2',
      toStopId: 'route-3',
      travelMode: 'land',
      noteKo: '요단강을 따라 북쪽으로 이동하며 세례 사역을 계속했습니다.',
    },
    {
      fromStopId: 'route-3',
      toStopId: 'route-4',
      travelMode: 'land',
      noteKo: '헤롯 안티파스에게 체포되어 마케루스 요새로 이송되었습니다.',
    },
  ],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo: '세례 요한의 출생지인 유대 산악 지방의 한 성읍과 가까우며, 그의 사역이 유대 지역 전체에 영향을 미쳤습니다.',
      confidence: 0.95,
    },
    {
      id: 'landmark-2',
      displayNameKo: '요단강',
      displayNameEn: 'Jordan River',
      coordinates: { lat: 32, lng: 35.56 },
      placeType: 'region',
      summaryKo: '세례 요한의 주요 사역지였으며, 그가 많은 사람들에게 세례를 베풀고 예수님께 세례를 준 곳입니다.',
      confidence: 0.98,
    },
    {
      id: 'landmark-3',
      displayNameKo: '유대 광야',
      displayNameEn: 'Judean Wilderness',
      coordinates: { lat: 31.73, lng: 35.45 },
      placeType: 'region',
      summaryKo: '세례 요한이 성장하고 사역을 시작한 곳으로, 그의 금욕적인 삶과 회개 메시지의 배경이 되었습니다.',
      confidence: 0.95,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-1', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-2', labelKo: '요르단', coordinates: { lat: 31, lng: 36.5 }, kind: 'country' },
    { id: 'map-3', labelKo: '사해', coordinates: { lat: 31.5, lng: 35.5 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: ['살림 근처 애논의 정확한 위치는 학자들마다 의견이 다릅니다. 제시된 좌표는 가장 유력한 추정 위치 중 하나입니다.'],
}

