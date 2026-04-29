import { Link } from 'react-router-dom'
import { featuredArticles } from '../../features/featured/data/featuredArticles'

const PAGE_TITLE = 'Featured'

export function FeaturedPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-6">
      <header className="grid gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          {PAGE_TITLE}
        </h1>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          자주 찾는 주제는 미리 문서로 제공해 API 사용량을 줄입니다.
        </p>
      </header>

      <ul className="grid gap-3">
        {featuredArticles.map((a) => (
          <li key={a.slug}>
            <Link
              to={`/featured/${a.slug}`}
              className="block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-amber-200/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/60 dark:focus:ring-amber-400/15"
            >
              <div className="text-base font-extrabold text-zinc-900 dark:text-zinc-50">
                {a.titleKo}
              </div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                {a.descriptionKo}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

