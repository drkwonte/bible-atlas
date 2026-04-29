export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Privacy Policy
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        이 앱은 로그인/계정 기능을 제공하지 않으며, 즐겨찾기 같은 개인 데이터 저장 기능을
        제공하지 않습니다.
      </p>
      <p className="text-zinc-600 dark:text-zinc-300">
        사용자가 입력한 검색어는 브라우저에서 Gemini API 호출에 사용될 수 있습니다. API
        제공자의 정책(데이터 보관/학습 사용 여부 등)은 사용 중인 API 약관을 확인하세요.
      </p>
    </div>
  )
}

