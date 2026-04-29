import { useId } from 'react'

export function SearchForm(props: {
  topic: string
  isLoading: boolean
  errorMessage: string | null
  onChangeTopic: (next: string) => void
  onSubmit: () => void
}) {
  const inputId = useId()
  const TOPIC_PLACEHOLDER_TEXT = '성경 속 사건, 인물, 구절 등을 입력하세요'

  return (
    <form
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10"
      onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit()
      }}
    >
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <input
          id={inputId}
          className="h-12 w-full rounded-full border border-zinc-200 bg-white px-5 text-base text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-200/60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-400/60 dark:focus:ring-amber-400/15"
          value={props.topic}
          onChange={(e) => props.onChangeTopic(e.target.value)}
          placeholder={TOPIC_PLACEHOLDER_TEXT}
          autoComplete="off"
          spellCheck={false}
          inputMode="search"
        />
        <button
          className="h-12 rounded-full bg-[var(--brand-gold)] px-6 text-xs font-extrabold tracking-wide text-white shadow-sm hover:bg-[var(--brand-gold-hover)] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[var(--brand-gold-dark)] dark:hover:bg-[var(--brand-gold-dark-hover)]"
          type="submit"
          disabled={props.isLoading}
        >
          {props.isLoading ? 'ANALYZING…' : 'SEARCH'}
        </button>
      </div>
      <div className="mt-3 min-h-6" aria-live="polite">
        {props.errorMessage ? (
          <p className="max-h-12 overflow-hidden text-sm font-medium leading-5 text-red-600 [text-wrap:pretty] break-words dark:text-red-400">
            {props.errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  )
}

