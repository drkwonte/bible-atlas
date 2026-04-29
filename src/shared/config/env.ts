function getOptionalStringEnv(key: keyof ImportMetaEnv): string | undefined {
  const raw = import.meta.env[key]
  if (typeof raw !== 'string') return undefined
  const trimmed = raw.trim()
  return trimmed.length === 0 ? undefined : trimmed
}

export const env = {
  mapStyleUrl: () => getOptionalStringEnv('VITE_MAP_STYLE_URL'),
  mapAttributionHtml: () => getOptionalStringEnv('VITE_MAP_ATTRIBUTION_HTML'),
} as const

