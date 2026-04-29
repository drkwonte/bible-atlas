import { appConfig } from '../../shared/config/appConfig'

export function AboutPage() {
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        {appConfig.appName}는 성경의 사건/인물과 관련된 장소를 지도 위에 시각화하고, 핵심 요약과
        관련 구절을 함께 보여주는 웹앱입니다.
      </p>
      <p className="text-zinc-600 dark:text-zinc-300">
        이 앱은 학습/탐색 목적이며, 모델 출력은 오류가 있을 수 있습니다. 중요한 판단에는 반드시
        성경 본문/주석/신뢰할 수 있는 자료를 함께 확인하세요.
      </p>
    </div>
  )
}

