import { NavLink } from 'react-router-dom'
import { appConfig } from '../../shared/config/appConfig'

const CURRENT_YEAR = new Date().getFullYear()

export function AppFooter() {
  return (
    <footer className="h-16 overflow-hidden border-t border-zinc-200/70 bg-[#fbfaf7]/90 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-4 text-sm text-zinc-500 sm:px-6">
        <small className="min-w-0 truncate text-zinc-500">
          © {CURRENT_YEAR} {appConfig.copyrightOwner}
        </small>
        <nav
          className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="푸터 링크"
        >
          <NavLink
            className="inline-flex h-10 items-center rounded-full px-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="inline-flex h-10 items-center rounded-full px-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
            to="/privacy"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className="inline-flex h-10 items-center rounded-full px-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  )
}

