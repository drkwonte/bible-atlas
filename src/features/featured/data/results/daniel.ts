import type { GeminiBibleMapResponse } from '../../../../services/gemini/schemas'

export const danielResult: GeminiBibleMapResponse = {
  normalizedTopicKo: '다니엘',
  summaryKo:
    '다니엘은 구약성경의 주요 선지자 중 한 명으로, 유다 왕국이 바벨론에 의해 멸망할 때 포로로 잡혀갔습니다. 그는 바벨론과 페르시아 제국에서 여러 왕들을 섬기며 신실함을 지켰고, 꿈 해몽과 환상을 통해 하나님의 주권과 미래의 사건들을 예언했습니다. 사자 굴에 던져졌으나 하나님이 구원하신 사건으로도 유명합니다.',
  bibleVerses: [
    {
      reference: '다니엘 1:1-2',
      verseTextKo:
        '유다 왕 여호야김이 다스린 지 삼 년이 되는 해에 바벨론 왕 느부갓네살이 예루살렘에 이르러 성을 에워쌌더니 주께서 유다 왕 여호야김과 하나님의 전 그릇 얼마를 그의 손에 넘기시매 그가 그것을 가지고 시날 땅 자기 신들의 신전에 가져다가 그 신들의 보고에 두었더라.',
    },
    {
      reference: '다니엘 6:21-22',
      verseTextKo:
        '다니엘이 왕에게 아뢰되 왕이여 원하건대 왕은 만수무강 하옵소서 나의 하나님이 이미 그의 천사를 보내사 사자들의 입을 봉하시므로 사자들이 나를 상해하지 못하였사오니 이는 나의 무죄함이 그 앞에 명백함이오며 또 왕이여 나는 왕에게도 해를 끼치지 아니하였나이다 하니라.',
    },
    {
      reference: '다니엘 8:2',
      verseTextKo: '내가 환상으로 보았는데 내가 환상을 보는 중에도 엘람 지방 수산 성에 있었고 내가 환상으로 보니 을래 강변이더라.',
    },
  ],
  routeStops: [
    {
      id: 'route-1',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      whyHereKo: '다니엘이 바벨론으로 포로로 잡혀가기 전 살았던 고향이자 유다 왕국의 수도입니다.',
      confidence: 1,
    },
    {
      id: 'route-2',
      displayNameKo: '바벨론',
      displayNameEn: 'Babylon',
      coordinates: { lat: 32.535, lng: 44.427 },
      placeType: 'city',
      whyHereKo: '다니엘이 포로로 잡혀와 대부분의 생애를 보냈으며, 느부갓네살 왕을 비롯한 여러 왕들을 섬겼던 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-3',
      displayNameKo: '수산',
      displayNameEn: 'Susa',
      coordinates: { lat: 32.195, lng: 48.257 },
      placeType: 'city',
      whyHereKo: '다니엘이 페르시아 제국 시대에 환상을 보았고(단 8:2), 다리오 왕 때 사자 굴에 던져진 사건이 일어난 곳입니다.',
      confidence: 1,
    },
    {
      id: 'route-4',
      displayNameKo: '울래 강',
      displayNameEn: 'Ulai River',
      coordinates: { lat: 32.19, lng: 48.27 },
      placeType: 'region',
      whyHereKo: '다니엘이 염소와 숫양의 환상을 본 장소입니다(단 8:2). 수산 성 근처에 위치합니다.',
      confidence: 0.9,
    },
    {
      id: 'route-5',
      displayNameKo: '히데겔 강 (티그리스 강)',
      displayNameEn: 'Tigris River',
      coordinates: { lat: 33.34, lng: 44.39 },
      placeType: 'region',
      whyHereKo: '다니엘이 큰 환상을 본 장소입니다(단 10:4).',
      confidence: 0.9,
    },
  ],
  routeLegs: [
    {
      fromStopId: 'route-1',
      toStopId: 'route-2',
      travelMode: 'land',
      noteKo: '느부갓네살 왕에 의해 포로로 잡혀간 경로',
    },
    {
      fromStopId: 'route-2',
      toStopId: 'route-3',
      travelMode: 'land',
      noteKo: '바벨론에서 페르시아 제국의 수도 중 하나인 수산으로 이동',
    },
  ],
  christianLandmarks: [
    {
      id: 'landmark-1',
      displayNameKo: '예루살렘',
      displayNameEn: 'Jerusalem',
      coordinates: { lat: 31.7683, lng: 35.2137 },
      placeType: 'city',
      summaryKo: '다니엘의 고향이자 유다 왕국의 수도였으며, 성경 역사에서 가장 중요한 도시 중 하나입니다.',
      confidence: 1,
    },
    {
      id: 'landmark-2',
      displayNameKo: '바벨론',
      displayNameEn: 'Babylon',
      coordinates: { lat: 32.535, lng: 44.427 },
      placeType: 'city',
      summaryKo: '다니엘이 포로 생활을 하며 하나님을 섬겼던 고대 메소포타미아의 강력한 제국 수도입니다.',
      confidence: 1,
    },
  ],
  mapReferenceLabels: [
    { id: 'map-label-1', labelKo: '이란', coordinates: { lat: 32.4279, lng: 53.688 }, kind: 'country' },
    { id: 'map-label-2', labelKo: '이라크', coordinates: { lat: 33.2232, lng: 43.6793 }, kind: 'country' },
    { id: 'map-label-3', labelKo: '메소포타미아', coordinates: { lat: 33.5, lng: 44.5 }, kind: 'region' },
  ],
  primaryPlaces: [],
  nearbyPlaces: [],
  cautionsKo: [
    "다니엘의 '경로'는 지속적인 여행이라기보다는 그의 생애와 환상이 일어난 주요 장소들을 나타냅니다.",
    "울래 강과 히데겔 강은 특정 도시가 아닌 강변 지역을 의미하므로 'region'으로 표시되었습니다.",
  ],
}

