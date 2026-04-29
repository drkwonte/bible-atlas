/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAP_STYLE_URL?: string
  readonly VITE_MAP_ATTRIBUTION_HTML?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

