import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const babylonianExileResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '바벨론 유수',
  summaryKo:
    '바벨론 유수는 기원전 6세기 초 신바빌로니아 제국이 유다 왕국을 정복하고 예루살렘 주민들을 바벨론으로 강제 이주시킨 사건을 말합니다. 이는 세 차례에 걸쳐 일어났으며(기원전 605년, 597년, 586년), 유다 백성은 약 70년간 바벨론에 포로로 잡혀 살았습니다. 이 기간은 유대교의 정체성을 강화하고 성경 기록에 큰 영향을 미쳤습니다.',
  bibleVerses: [
    {
      reference: '예레미야 25:11',
      verseTextKo: '이 모든 땅이 폐허가 되어 놀랄 일이 될 것이며, 이 민족들은 칠십 년 동안 바벨론 왕을 섬길 것이다.',
    },
    {
      reference: '다니엘 1:1-2',
      verseTextKo:
        '유다 왕 여호야김이 통치한 지 삼 년이 되던 해에 바벨론 왕 느부갓네살이 예루살렘에 이르러 성을 에워쌌더니, 주께서 유다 왕 여호야김과 하나님의 전 그릇 얼마를 그의 손에 넘기시매 그가 그것들을 시날 땅 자기 신들의 신전으로 가져다가 자기 신들의 보고에 두었더라.',
    },
    {
      reference: '에스겔 1:1',
      verseTextKo:
        '서른째 해 넷째 달 초닷새에 내가 그발 강가 사로잡힌 자들 중에 있을 때에 하늘이 열리며 하나님의 환상이 내게 보이니',
    },
  ],
  routeStops: [
    {
      id: 'route-jerusalem',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      whyHereKo: '유다 왕국의 수도이자 바벨론 유수의 출발지입니다. 여러 차례에 걸쳐 주민들이 바벨론으로 끌려갔습니다.',
      confidence: 1,
    },
    {
      id: 'route-babylon',
      displayNameKo: '바벨론',
      displayNameEn: 'Babylon',
      coordinates: { lat: 32.535, lng: 44.427 },
      placeType: 'city',
      whyHereKo: '신바빌로니아 제국의 수도이자 유다 백성이 포로로 잡혀와 정착한 주요 도시입니다.',
      confidence: 1,
    },
    {
      id: 'route-chebar',
      displayNameKo: '그발 강가',
      displayNameEn: 'Chebar Canal',
      coordinates: { lat: 32.5, lng: 44.5 },
      placeType: 'region',
      whyHereKo: '바벨론 근처에 위치한 운하로, 에스겔 선지자가 유수민들 가운데서 하나님의 환상을 보고 예언 활동을 펼친 중요한 정착지입니다.',
      confidence: 0.9,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'route-jerusalem',
      toStopId: 'route-babylon',
      travelMode: 'land',
      noteKo: '유다 백성이 바벨론으로 강제 이주한 일반적인 경로입니다.',
    },
  ],
  christianLandmarks: [
    {
      id: 'landmark-jerusalem',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo:
        '유다 왕국의 수도이자 유다 백성이 바벨론으로 끌려가기 시작한 곳입니다. 성전이 파괴되고 백성이 유수된 비극적인 역사의 현장입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-babylon',
      displayNameKo: '바벨론',
      displayNameEn: 'Babylon',
      coordinates: { lat: 32.535, lng: 44.427 },
      placeType: 'city',
      summaryKo:
        '고대 메소포타미아의 주요 도시이자 신바빌로니아 제국의 수도였습니다. 유다 백성이 70년간 포로 생활을 한 곳으로, 다니엘과 에스겔 선지자가 활동했습니다.',
      confidence: 1,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-label-israel', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-label-iraq', labelKo: '이라크', coordinates: { lat: 33, lng: 44 }, kind: 'country' },
    { id: 'map-label-euphrates', labelKo: '유프라테스 강', coordinates: { lat: 33.5, lng: 42.5 }, kind: 'region' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    '바벨론 유수는 한 번의 여정이 아니라 기원전 605년, 597년, 586년 세 차례에 걸쳐 이루어졌습니다. 제시된 경로는 주요 출발지(예루살렘)와 도착지(바벨론)를 연결하는 일반적인 경로를 나타냅니다.',
    '그발 강가는 바벨론 근처의 중요한 유수민 정착지였으며, 에스겔 선지자가 활동한 곳입니다. 정확한 위치는 현재 알 수 없으므로 바벨론 근처의 대략적인 위치를 표시했습니다.',
  ],
}

