import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// Vitest runs the pure logic + content + component tests (NOT Playwright e2e,
// which lives in tests/e2e and is driven by playwright.config.ts).
// We deliberately avoid the full Nuxt runtime here: the code under test
// (utils, content data, Pinia stores, presentational components) has no Nuxt
// auto-imports, so a plain Vite/Vitest setup is faster and far less flaky.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Match Nuxt 4 srcDir aliases: '~' and '@' -> ./app, '~~'/'@@' -> root.
      '~~': fileURLToPath(new URL('./', import.meta.url)),
      '@@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./app', import.meta.url)),
      '@': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/unit/**/*.test.ts', 'tests/functional/**/*.test.ts'],
    // Keep Playwright specs out of Vitest's reach.
    exclude: ['tests/e2e/**', 'node_modules/**'],
  },
})
