import { appConfig } from '../../shared/config/appConfig'

export function ContactPage() {
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        문의:{' '}
        <a
          className="font-semibold text-zinc-900 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
          href={`mailto:${appConfig.contactEmail}`}
        >
          {appConfig.contactEmail}
        </a>
      </p>
    </div>
  )
}

