import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnalysisPanel } from '../../features/bibleMap/components/AnalysisPanel'
import { MapView } from '../../features/bibleMap/components/MapView'
import { getFeaturedArticleBySlug } from '../../features/featured/data/featuredArticles'

export function FeaturedArticlePage() {
  const params = useParams()
  const slug = params.slug ?? ''

  const article = useMemo(() => getFeaturedArticleBySlug(slug), [slug])
  const result = article?.result ?? null

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)

  const effectiveSelectedPlaceId = useMemo(() => {
    if (!result) return null
    return selectedPlaceId ?? result.routeStops[0]?.id ?? null
  }, [result, selectedPlaceId])

  if (!article || !result) {
    return (
      <div className="mx-auto grid max-w-2xl gap-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          문서를 찾을 수 없습니다.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          <Link className="font-semibold underline underline-offset-4" to="/featured">
            Featured 목록으로 이동
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            {article.titleKo}
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{article.descriptionKo}</p>
        </div>
        <Link
          to="/featured"
          className="inline-flex h-10 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
        >
          목록
        </Link>
      </div>

      <section className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
        <div className="grid gap-4">
          <AnalysisPanel
            result={result}
            selectedPlaceId={effectiveSelectedPlaceId}
            onSelectPlaceId={(placeId) => setSelectedPlaceId(placeId)}
          />
        </div>

        <div className="lg:sticky lg:top-20">
          <MapView
            result={result}
            selectedPlaceId={effectiveSelectedPlaceId}
            onSelectPlaceId={(placeId) => setSelectedPlaceId(placeId)}
            isIdle={false}
          />
        </div>
      </section>
    </div>
  )
}

