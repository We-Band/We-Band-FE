/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHORT_URL_API_KEY: string;
  readonly VITE_BASE_URL: string;
  // 다른 환경변수도 여기에 추가
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
