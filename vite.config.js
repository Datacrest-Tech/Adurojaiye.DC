import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single integrated project: in dev, Vite serves the React app on :5173 and
// proxies /api/* to the Express server on :4000 (see server/index.js and
// package.json "dev" script). In production, Express itself serves the
// built files from /dist, so no proxy is needed there.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
