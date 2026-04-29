import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        404
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300">페이지를 찾을 수 없습니다.</p>
      <p className="text-zinc-600 dark:text-zinc-300">
        <Link className="font-semibold text-zinc-900 underline underline-offset-4 dark:text-zinc-50" to="/">
          홈으로 이동
        </Link>
      </p>
    </div>
  )
}

