import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const abrahamCanaanMigrationResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '아브라함의 가나안 이주',
  summaryKo:
    '아브라함은 하나님의 부르심을 받아 갈대아 우르를 떠나 하란에 잠시 머물렀습니다. 그 후 하나님께서 지시하신 땅 가나안으로 이동하여 세겜, 벧엘, 네게브 등 여러 지역을 거쳐 헤브론에 정착했습니다. 이 여정은 아브라함이 믿음으로 순종하여 약속의 땅으로 나아간 중요한 사건입니다.',
  bibleVerses: [
    {
      reference: '창세기 12:1-3',
      verseTextKo:
        '여호와께서 아브람에게 이르시되 너는 너의 고향과 친척과 아버지의 집을 떠나 내가 네게 보여 줄 땅으로 가라 내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대하게 하리니 너는 복이 될지라 너를 축복하는 자에게는 내가 복을 내리고 너를 저주하는 자에게는 내가 저주하리니 땅의 모든 족속이 너로 말미암아 복을 얻을 것이라 하신지라',
    },
    {
      reference: '창세기 12:4-5',
      verseTextKo:
        '이에 아브람이 여호와의 말씀을 따라갔고 롯도 그와 함께 갔으며 아브람이 하란을 떠날 때에 칠십오 세였더라 아브람이 그의 아내 사래와 조카 롯과 하란에서 모은 모든 소유와 얻은 사람들을 이끌고 가나안 땅으로 가려고 떠나서 마침내 가나안 땅에 들어갔더라',
    },
    {
      reference: '창세기 12:6-8',
      verseTextKo:
        '아브람이 그 땅을 지나 세겜 땅 모레 상수리나무에 이르니 그 때에 가나안 사람이 그 땅에 거주하였더라 여호와께서 아브람에게 나타나 이르시되 내가 이 땅을 네 자손에게 주리라 하신지라 그가 자기에게 나타나신 여호와께 그 곳에서 제단을 쌓고 거기서 벧엘 동쪽 산으로 옮겨 장막을 치니 서쪽은 벧엘이요 동쪽은 아이라 그가 그 곳에서 여호와께 제단을 쌓고 여호와의 이름을 부르더니',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '갈대아 우르',
      displayNameEn: 'Ur of the Chaldees',
      coordinates: { lat: 30.962, lng: 46.103 },
      placeType: 'city',
      whyHereKo: '아브라함의 고향이자 여정의 시작점입니다. 하나님께서 아브라함을 부르신 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-2',
      displayNameKo: '하란',
      displayNameEn: 'Haran',
      coordinates: { lat: 36.86, lng: 39.02 },
      placeType: 'city',
      whyHereKo: '아브라함의 아버지 데라가 죽기까지 잠시 머물렀던 곳입니다. 아브라함은 이곳에서 가나안으로 향했습니다.',
      confidence: 1,
    },
    {
      id: 'route-3',
      displayNameKo: '세겜',
      displayNameEn: 'Shechem',
      coordinates: { lat: 32.2, lng: 35.26 },
      placeType: 'city',
      whyHereKo: '아브라함이 가나안 땅에 처음 도착하여 제단을 쌓고 하나님께 경배한 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-4',
      displayNameKo: '벧엘',
      displayNameEn: 'Bethel',
      coordinates: { lat: 31.94, lng: 35.23 },
      placeType: 'city',
      whyHereKo: '세겜에서 남쪽으로 이동하여 장막을 치고 제단을 쌓아 여호와의 이름을 부른 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-5',
      displayNameKo: '네게브',
      displayNameEn: 'Negev',
      coordinates: { lat: 30.5, lng: 34.8 },
      placeType: 'region',
      whyHereKo: '가나안 남방 지역으로, 아브라함이 기근을 피해 애굽으로 내려가기 전에 머물렀던 곳입니다.',
      confidence: 0.9,
    },
    {
      id: 'route-6',
      displayNameKo: '애굽',
      displayNameEn: 'Egypt',
      coordinates: { lat: 30.04, lng: 31.23 },
      placeType: 'country',
      whyHereKo: '가나안 땅에 기근이 심하여 아브라함이 잠시 피난했던 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-7',
      displayNameKo: '네게브',
      displayNameEn: 'Negev',
      coordinates: { lat: 30.5, lng: 34.8 },
      placeType: 'region',
      whyHereKo: '애굽에서 다시 가나안으로 돌아와 롯과 헤어지기 전까지 머물렀던 지역입니다.',
      confidence: 0.9,
    },
    {
      id: 'route-8',
      displayNameKo: '벧엘',
      displayNameEn: 'Bethel',
      coordinates: { lat: 31.94, lng: 35.23 },
      placeType: 'city',
      whyHereKo: '애굽에서 돌아온 후 롯과 헤어진 뒤 다시 제단을 쌓고 여호와의 이름을 부른 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-9',
      displayNameKo: '헤브론',
      displayNameEn: 'Hebron',
      coordinates: { lat: 31.53, lng: 35.1 },
      placeType: 'city',
      whyHereKo:
        '아브라함이 마므레 상수리 수풀 근처에 장막을 치고 정착하여 제단을 쌓은 곳입니다. 사라와 아브라함이 묻힌 막벨라 굴이 있습니다.',
      confidence: 1,
    },
  ],
  routeLegs: [
    { fromStopId: 'route-1', toStopId: 'route-2', travelMode: 'land' },
    { fromStopId: 'route-2', toStopId: 'route-3', travelMode: 'land' },
    { fromStopId: 'route-3', toStopId: 'route-4', travelMode: 'land' },
    { fromStopId: 'route-4', toStopId: 'route-5', travelMode: 'land' },
    { fromStopId: 'route-5', toStopId: 'route-6', travelMode: 'land' },
    { fromStopId: 'route-6', toStopId: 'route-7', travelMode: 'land' },
    { fromStopId: 'route-7', toStopId: 'route-8', travelMode: 'land' },
    { fromStopId: 'route-8', toStopId: 'route-9', travelMode: 'land' },
  ],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '헤브론',
      displayNameEn: 'Hebron',
      coordinates: { lat: 31.53, lng: 35.1 },
      placeType: 'city',
      summaryKo:
        '아브라함이 정착하여 제단을 쌓고, 사라와 함께 막벨라 굴에 묻힌 곳입니다. 족장들의 무덤이 있는 중요한 성지입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-2',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo: '아브라함 시대에는 살렘으로 불렸으며, 멜기세덱이 다스리던 곳입니다. 아브라함이 멜기세덱에게 십일조를 바쳤습니다.',
      confidence: 0.9,
    },
    {
      id: 'landmark-3',
      displayNameKo: '요단강',
      displayNameEn: 'Jordan River',
      coordinates: { lat: 32.42, lng: 35.56 },
      placeType: 'region',
      summaryKo: '아브라함과 롯이 헤어질 때 롯이 선택했던 비옥한 요단 평야의 중심을 흐르는 강입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-4',
      displayNameKo: '사해',
      displayNameEn: 'Dead Sea',
      coordinates: { lat: 31.5, lng: 35.5 },
      placeType: 'region',
      summaryKo: '소돔과 고모라가 있었던 지역으로 추정되며, 롯이 요단 평야를 선택했을 때 이 지역 근처에 거주했습니다.',
      confidence: 0.9,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-label-1', labelKo: '이라크', coordinates: { lat: 33.3, lng: 44.0 }, kind: 'country' },
    { id: 'map-label-2', labelKo: '이스라엘', coordinates: { lat: 31.5, lng: 34.75 }, kind: 'country' },
    { id: 'map-label-3', labelKo: '지중해', coordinates: { lat: 33.0, lng: 30.0 }, kind: 'sea' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    '고대 지명 중 일부는 현대 지명과 정확히 일치하지 않거나 여러 학설이 존재할 수 있습니다. 제시된 좌표는 가장 널리 받아들여지는 위치를 기반으로 합니다.',
    '네게브와 애굽은 넓은 지역이므로, 제시된 좌표는 해당 지역의 대표적인 중심점을 나타냅니다.',
  ],
}

