# ep5-bible (성경 지도)

성경의 사건/인물(예: 오병이어, 산상수훈, 아브라함, 모세 등)을 입력하면 Gemini가 관련 장소를 분석하고 지도 위에 표시하는 Vite + React + TypeScript 웹앱입니다.

## 실행

1) 의존성 설치

```bash
npm install
```

2) 환경 변수 설정 (프론트)

`.env.example`을 참고해 프로젝트 루트에 `.env`를 만들고 지도 관련 값(`VITE_MAP_STYLE_URL`, `VITE_MAP_ATTRIBUTION_HTML`)을 필요 시 설정하세요.

3) Cloudflare Pages Functions 환경 변수 설정 (서버)

Gemini 키는 브라우저가 아니라 Cloudflare Functions에서만 사용합니다.

- `GEMINI_API_KEY` (필수)
- `GEMINI_MODEL_ID` (선택, 기본값: `gemini-2.5-flash`)

Cloudflare Pages 프로젝트 설정에서 `Settings > Environment variables`에 추가하세요.

4) 개발 서버

```bash
npm run dev
```

## 지도(한글 표기)

- 기본값은 OpenStreetMap 타일(라벨 언어는 지역/타일에 따라 달라질 수 있음)입니다.
- 한글 라벨이 보장되는 스타일이 필요하면 `VITE_MAP_STYLE_URL`에 MapLibre style URL(예: MapTiler의 `language=ko` 지원 스타일)을 넣어주세요.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
