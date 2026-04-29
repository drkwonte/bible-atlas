import { Outlet } from 'react-router-dom'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#fbfaf7] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}

