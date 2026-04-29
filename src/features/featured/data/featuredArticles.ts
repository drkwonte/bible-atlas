import type { GeminiBibleMapResponse } from '../../../services/gemini/schemas'
import { abrahamCanaanMigrationResult } from './results/abrahamCanaanMigration'
import { babylonianExileResult } from './results/babylonianExile'
import { danielResult } from './results/daniel'
import { elijahMountCarmelResult } from './results/elijahMountCarmel'
import { exodusJourneyResult } from './results/exodusJourney'
import { feedingOfFiveThousandResult } from './results/feedingOfFiveThousand'
import { johnTheBaptistResult } from './results/johnTheBaptist'
import { paulFirstMissionaryJourneyResult } from './results/paulFirstMissionaryJourney'
import { paulSecondMissionaryJourneyResult } from './results/paulSecondMissionaryJourney'
import { patmosIslandResult } from './results/patmosIsland'
import { publicMinistryOfJesusResult } from './results/publicMinistryOfJesus'
import { queenEstherResult } from './results/queenEsther'
import { sermonOnTheMountResult } from './results/sermonOnTheMount'

export type FeaturedArticle = {
  slug: string
  titleKo: string
  descriptionKo: string
  result: GeminiBibleMapResponse
}

const FEATURED_ARTICLE_SLUG_PUBLIC_MINISTRY = 'public-ministry-of-jesus'
export const FEATURED_ARTICLE_SLUG_ABRAHAM_CANAAN_MIGRATION = 'abraham-canaan-migration'
export const FEATURED_ARTICLE_SLUG_EXODUS_JOURNEY = 'exodus-journey'
export const FEATURED_ARTICLE_SLUG_PAUL_FIRST_MISSIONARY_JOURNEY = 'paul-first-missionary-journey'
export const FEATURED_ARTICLE_SLUG_PAUL_SECOND_MISSIONARY_JOURNEY = 'paul-second-missionary-journey'
export const FEATURED_ARTICLE_SLUG_BABYLONIAN_EXILE = 'babylonian-exile'
export const FEATURED_ARTICLE_SLUG_FEEDING_OF_FIVE_THOUSAND = 'feeding-of-five-thousand'
export const FEATURED_ARTICLE_SLUG_ELIJAH_MOUNT_CARMEL = 'elijah-mount-carmel'
export const FEATURED_ARTICLE_SLUG_QUEEN_ESTHER = 'queen-esther'
export const FEATURED_ARTICLE_SLUG_SERMON_ON_THE_MOUNT = 'sermon-on-the-mount'
export const FEATURED_ARTICLE_SLUG_PATMOS_ISLAND = 'patmos-island'
export const FEATURED_ARTICLE_SLUG_DANIEL = 'daniel'
export const FEATURED_ARTICLE_SLUG_JOHN_THE_BAPTIST = 'john-the-baptist'

const featuredPublicMinistryOfJesus: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_PUBLIC_MINISTRY,
  titleKo: '예수님의 공생애',
  descriptionKo: '갈릴리 사역부터 예루살렘 입성까지의 주요 이동과 사건을 요약합니다.',
  result: publicMinistryOfJesusResult,
}

const featuredAbrahamCanaanMigration: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_ABRAHAM_CANAAN_MIGRATION,
  titleKo: '아브라함의 가나안 이주',
  descriptionKo: '창세기의 부르심부터 하란을 거쳐 가나안으로 이동한 여정을 정리합니다.',
  result: abrahamCanaanMigrationResult,
}

const featuredExodusJourney: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_EXODUS_JOURNEY,
  titleKo: '출애굽 여정',
  descriptionKo: '애굽에서 홍해를 건너 시내산을 거쳐 요단강 동편까지 이어지는 여정(전통적 견해)을 정리합니다.',
  result: exodusJourneyResult,
}

const featuredPaulFirstMissionaryJourney: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_PAUL_FIRST_MISSIONARY_JOURNEY,
  titleKo: '바울의 1차 전도여행',
  descriptionKo: '수리아 안디옥에서 출발해 구브로와 소아시아 남부를 거쳐 다시 안디옥으로 돌아온 여정을 정리합니다.',
  result: paulFirstMissionaryJourneyResult,
}

const featuredPaulSecondMissionaryJourney: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_PAUL_SECOND_MISSIONARY_JOURNEY,
  titleKo: '바울의 2차 전도여행',
  descriptionKo: '소아시아를 거쳐 마게도냐와 그리스 주요 도시로 확장된 전도여행(사도행전 15:36-18:22)을 정리합니다.',
  result: paulSecondMissionaryJourneyResult,
}

const featuredBabylonianExile: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_BABYLONIAN_EXILE,
  titleKo: '바벨론 유수',
  descriptionKo: '예루살렘에서 바벨론으로 이어진 유수 사건과 그발 강가 정착을 중심으로 정리합니다.',
  result: babylonianExileResult,
}

const featuredFeedingOfFiveThousand: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_FEEDING_OF_FIVE_THOUSAND,
  titleKo: '오병이어',
  descriptionKo: '갈릴리 바다 주변에서 일어난 오병이어 기적(오천 명을 먹이심) 사건을 지도 위에 정리합니다.',
  result: feedingOfFiveThousandResult,
}

const featuredElijahMountCarmel: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_ELIJAH_MOUNT_CARMEL,
  titleKo: '엘리야 갈멜산',
  descriptionKo: '갈멜산에서의 대결과 기손 시내, 이스르엘로 이어지는 흐름을 지도 위에 정리합니다.',
  result: elijahMountCarmelResult,
}

const featuredQueenEsther: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_QUEEN_ESTHER,
  titleKo: '에스더 왕비',
  descriptionKo: '페르시아 제국의 수도 수산을 중심으로 전개된 에스더 이야기를 정리합니다.',
  result: queenEstherResult,
}

const featuredSermonOnTheMount: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_SERMON_ON_THE_MOUNT,
  titleKo: '산상수훈',
  descriptionKo: '팔복산을 중심으로 산상수훈의 배경과 주변 갈릴리 지역을 정리합니다.',
  result: sermonOnTheMountResult,
}

const featuredPatmosIsland: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_PATMOS_ISLAND,
  titleKo: '발모섬',
  descriptionKo: '에베소에서 발모섬(밧모)으로 이어지는 사도 요한의 유배 배경과 계시록의 무대를 정리합니다.',
  result: patmosIslandResult,
}

const featuredDaniel: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_DANIEL,
  titleKo: '다니엘',
  descriptionKo: '예루살렘에서 바벨론, 수산으로 이어지는 다니엘의 생애 주요 배경지를 정리합니다.',
  result: danielResult,
}

const featuredJohnTheBaptist: FeaturedArticle = {
  slug: FEATURED_ARTICLE_SLUG_JOHN_THE_BAPTIST,
  titleKo: '세례 요한',
  descriptionKo: '유대 광야, 요단강, 마케루스까지 이어지는 세례 요한의 사역과 생애 주요 배경을 정리합니다.',
  result: johnTheBaptistResult,
}

export const featuredArticles: readonly FeaturedArticle[] = [
  featuredPublicMinistryOfJesus,
  featuredAbrahamCanaanMigration,
  featuredExodusJourney,
  featuredPaulFirstMissionaryJourney,
  featuredPaulSecondMissionaryJourney,
  featuredBabylonianExile,
  featuredFeedingOfFiveThousand,
  featuredElijahMountCarmel,
  featuredQueenEsther,
  featuredSermonOnTheMount,
  featuredPatmosIsland,
  featuredDaniel,
  featuredJohnTheBaptist,
] as const

export function getFeaturedArticleBySlug(slug: string): FeaturedArticle | null {
  return featuredArticles.find((a) => a.slug === slug) ?? null
}

