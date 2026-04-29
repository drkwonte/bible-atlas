import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AnalysisPanel } from './components/AnalysisPanel'
import { MapView } from './components/MapView'
import { SearchForm } from './components/SearchForm'
import { useBibleMapAnalysis } from './hooks/useBibleMapAnalysis'
import { Brand } from '../../shared/ui/Brand'
import { featuredArticles } from '../featured/data/featuredArticles'

const DEFAULT_TOPIC = ''
const SUGGESTED_TOPICS: readonly string[] = [
  '예수님의 공생애',
  '아브라함의 가나안 이주',
  '출애굽 여정',
  '바울의 1차 전도여행',
  '바벨론 유수',
]

function normalizeTopicKey(topic: string): string {
  return topic.trim().toLowerCase().replace(/\s+/g, '')
}

export function BibleMapExperience() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [topic, setTopic] = useState(DEFAULT_TOPIC)
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const { state, run, reset } = useBibleMapAnalysis()

  const isLoading = state.status === 'loading'
  const errorMessage = state.status === 'error' ? state.errorMessage : null
  const result = state.status === 'success' ? state.result : null
  const isIdle = state.status === 'idle' || state.status === 'error'
  const featuredSlugByTopicKey = useMemo(() => {
    const map = new Map<string, string>()
    for (const article of featuredArticles) {
      map.set(normalizeTopicKey(article.titleKo), article.slug)
      map.set(normalizeTopicKey(article.result.normalizedTopicKo), article.slug)
    }
    return map
  }, [])

  const effectiveSelectedPlaceId = useMemo(() => {
    if (!result) return null
    if (selectedPlaceId) return selectedPlaceId
    return result.routeStops[0]?.id ?? result.primaryPlaces[0]?.id ?? null
  }, [result, selectedPlaceId])

  useEffect(() => {
    // When the logo is clicked on "/", we navigate to "/?r=<timestamp>".
    // Use that as a signal to reset the experience state.
    const resetToken = searchParams.get('r')
    if (!resetToken) return
    setTopic(DEFAULT_TOPIC)
    setSelectedPlaceId(null)
    reset()
  }, [reset, searchParams])

  function navigateToFeaturedIfExists(inputTopic: string): boolean {
    const key = normalizeTopicKey(inputTopic)
    const slug = featuredSlugByTopicKey.get(key)
    if (!slug) return false
    navigate(`/featured/${slug}`)
    return true
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
      <div
        className={`grid gap-8 ${isIdle ? 'min-h-[min(70svh,720px)] content-center' : ''}`.trim()}
      >
        <div className="grid place-items-center gap-4 text-center">
          <Brand size="hero" />
          <p className="max-w-sm text-base leading-7 text-zinc-600 dark:text-zinc-300">
            성경 속 사건을 지도 위에서 재구성합니다.
          </p>
        </div>

        <SearchForm
          topic={topic}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onChangeTopic={(next) => setTopic(next)}
          onSubmit={() => {
            setSelectedPlaceId(null)
            if (navigateToFeaturedIfExists(topic)) return
            void run(topic)
          }}
        />

        {result ? (
          <div className="grid gap-4">
            <AnalysisPanel
              result={result}
              selectedPlaceId={effectiveSelectedPlaceId}
              onSelectPlaceId={(placeId) => setSelectedPlaceId(placeId)}
            />
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="mb-6 text-center">
              <h2 className="text-base font-extrabold tracking-wide text-zinc-700 dark:text-zinc-200">Featured</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              {SUGGESTED_TOPICS.map((suggested) => (
                <button
                  key={suggested}
                  type="button"
                  className="rounded-full bg-white px-4 py-3 text-sm font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-900/10 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-900"
                  onClick={() => {
                    setTopic(suggested)
                    setSelectedPlaceId(null)
                    if (navigateToFeaturedIfExists(suggested)) return
                    void run(suggested)
                  }}
                >
                  {suggested}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                to="/featured"
                className="inline-flex items-center text-sm font-extrabold text-[var(--brand-gold)] hover:text-[var(--brand-gold-hover)] dark:text-[var(--brand-gold-dark)] dark:hover:text-[var(--brand-gold-dark-hover)]"
              >
                → 더보기
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-20">
        <MapView
          result={result}
          selectedPlaceId={effectiveSelectedPlaceId}
          onSelectPlaceId={(placeId) => setSelectedPlaceId(placeId)}
          isIdle={isIdle}
        />
      </div>
    </section>
  )
}

