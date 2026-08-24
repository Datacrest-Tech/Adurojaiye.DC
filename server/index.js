import 'dotenv/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import contactRouter from './routes/contact.js'
import consultRouter from './routes/consult.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

const app = express()
const PORT = process.env.PORT || 4000
const isProduction = process.env.NODE_ENV === 'production'

// In dev, the React app runs on Vite (localhost:5173) and this API is called
// through Vite's proxy, so CORS only really matters for that origin. In
// production both are served from this same Express process/origin, so CORS
// is a non-issue there — but we still honour CORS_ORIGIN if it's set.
if (process.env.CORS_ORIGIN) {
  const allowedOrigins = process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
  app.use(cors({ origin: allowedOrigins }))
}

app.use(express.json({ limit: '20kb' }))

// Basic abuse protection on the form endpoints
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 submissions per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many submissions. Please try again later.' },
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api', formLimiter, contactRouter)
app.use('/api', formLimiter, consultRouter)

// ── Serve the built React app in production ────────────────────────────────
// This is what makes this "one complete website project": a single Node
// process serves both the API and the site itself. Run `npm run build` first
// (creates /dist), then `npm start`.
if (isProduction) {
  app.use(express.static(distDir))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Unexpected server error.' })
})

app.listen(PORT, () => {
  console.log(`ADC server listening on http://localhost:${PORT}`)
  console.log(
    isProduction
      ? 'Serving built React app + /api routes.'
      : 'API only — run `npm run dev` for the React app + API together.'
  )
})
