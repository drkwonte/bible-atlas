import { Brand } from '../../shared/ui/Brand'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-zinc-200/70 bg-[#fbfaf7]/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Brand size="header" />
        <nav className="flex items-center gap-2" aria-label="헤더 링크">
          <NavLink
            to="/featured"
            className="inline-flex h-10 items-center rounded-full px-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            Featured
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

