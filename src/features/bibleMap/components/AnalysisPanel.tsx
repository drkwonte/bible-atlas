import type { GeminiBibleMapResponse } from '../../../services/gemini/schemas'

const MAX_VERSE_ITEMS = 3

const SECTION_CLASSNAME =
  'rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'

const H2_CLASSNAME = 'mb-3 text-base font-extrabold text-zinc-900 dark:text-zinc-50'

const PLACE_BUTTON_BASE_CLASSNAME =
  'w-full rounded-xl border px-3 py-3 text-left shadow-sm transition focus:outline-none focus:ring-4'

const PLACE_BUTTON_INACTIVE_CLASSNAME =
  'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 focus:ring-violet-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800/60 dark:focus:ring-violet-500/20'

const PLACE_BUTTON_ACTIVE_CLASSNAME =
  'border-violet-300 bg-violet-50 text-zinc-900 focus:ring-violet-200/60 dark:border-violet-500/50 dark:bg-violet-500/10 dark:text-zinc-100 dark:focus:ring-violet-500/25'

function placeButtonClassName(isActive: boolean) {
  const variant = isActive ? PLACE_BUTTON_ACTIVE_CLASSNAME : PLACE_BUTTON_INACTIVE_CLASSNAME
  return `${PLACE_BUTTON_BASE_CLASSNAME} ${variant}`.trim()
}

export function AnalysisPanel(props: {
  result: GeminiBibleMapResponse
  selectedPlaceId: string | null
  onSelectPlaceId: (placeId: string) => void
}) {
  const verses = props.result.bibleVerses.slice(0, MAX_VERSE_ITEMS)
  const uniqueRouteStops = props.result.routeStops.reduce(
    (acc, stop) => {
      const key = `${stop.placeType}:${stop.displayNameKo}`.trim()
      if (!acc.seen.has(key)) {
        acc.seen.add(key)
        acc.items.push(stop)
      }
      return acc
    },
    { seen: new Set<string>(), items: [] as GeminiBibleMapResponse['routeStops'] },
  ).items

  return (
    <div className="grid gap-4">
      <section className={SECTION_CLASSNAME}>
        <h2 className={H2_CLASSNAME}>요약</h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {props.result.summaryKo}
        </p>
      </section>

      <section className={SECTION_CLASSNAME}>
        <h2 className={H2_CLASSNAME}>관련 구절</h2>
        <ul className="grid gap-3">
          {verses.map((v) => (
            <li key={v.reference} className="grid gap-1">
              <div className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50">
                {v.reference}
              </div>
              <div className="text-sm text-zinc-900 dark:text-zinc-100">
                {v.verseTextKo}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={SECTION_CLASSNAME}>
        <h2 className={H2_CLASSNAME}>여정(경유) 장소</h2>
        <ul className="grid gap-2">
          {uniqueRouteStops.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className={placeButtonClassName(props.selectedPlaceId === p.id)}
                onClick={() => props.onSelectPlaceId(p.id)}
              >
                <div className="mb-1 flex items-baseline justify-between gap-2">
                  <span className="text-sm font-extrabold">{p.displayNameKo}</span>
                </div>
                <div className="text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                  {p.whyHereKo}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* "기독교적으로 중요한 랜드마크"는 지도에서만 별도 색상으로 표시합니다. */}

      {props.result.cautionsKo.length > 0 ? (
        <section className={SECTION_CLASSNAME}>
          <h2 className={H2_CLASSNAME}>주의</h2>
          <ul className="grid gap-1 pl-4 text-sm text-zinc-600 dark:text-zinc-300">
            {props.result.cautionsKo.map((caution) => (
              <li key={caution}>{caution}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}

