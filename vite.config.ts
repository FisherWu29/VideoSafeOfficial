import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        zh: resolve(projectRoot, 'zh/index.html'),
        en: resolve(projectRoot, 'en/index.html'),
        ja: resolve(projectRoot, 'ja/index.html'),
        es: resolve(projectRoot, 'es/index.html'),
      },
    },
  },
})
