# Ajibade Durojaiye & Co. — Integrated React + Express Website

One project, one deployable. React (Vite) front end and a Node/Express API live in the same
codebase; Express's only job on the backend is server-side concerns — right now that's sending
the Contact and Consult form submissions over SMTP. In production, the same Express process also
serves the built React app, so there's a single server to run and deploy.

All original copy, contact details, team bios, services, and the logo from
[adurojaiye.com](https://adurojaiye.com/) are preserved as-is — nothing was invented — only the
UI/UX layer has been redone.

```
adc-website/
├─ src/              React app (pages, components, content)
├─ server/           Express API — /api/contact, /api/consult (SMTP via Nodemailer)
├─ public/           Static assets (favicon, logo fallback)
├─ index.html         Vite entry
├─ vite.config.js     Dev proxy: /api/* → Express on :4000
├─ .env.example       Server-side SMTP config template
└─ package.json       Single set of scripts/deps for both halves
```

## How the pieces fit together

- **Dev**: `npm run dev` runs Vite (`:5173`) and Express (`:4000`) side by side. Vite's dev
  server proxies any `/api/*` request to Express (see `vite.config.js`), so the browser only
  ever talks to one origin.
- **Production**: `npm run build` compiles the React app into `/dist`. `npm start` runs Express
  with `NODE_ENV=production`, which serves `/dist` as static files **and** handles `/api/*` —
  one Node process, one deployment.
- **SMTP credentials never reach the browser.** They live in `.env` at the project root and are
  loaded only inside `server/`. None of the variable names are prefixed with `VITE_`, so Vite
  never bundles them into client-side JavaScript — there is nothing SMTP-related in the React
  code at all. The contact form simply does `fetch('/api/contact', …)`.

```
Contact form (React) → POST /api/contact → Express route → Nodemailer/SMTP → info@adurojaiye.com
```

## 1. Install

```bash
npm install
cp .env.example .env
```

Fill in `.env` with real SMTP credentials (see the table below). `MAIL_TO` defaults to
`info@adurojaiye.com`, matching the original site's contact address.

## 2. Run in development

```bash
npm run dev
```

This starts Vite on `http://localhost:5173` (open this in your browser) and Express on
`http://localhost:4000`. Submitting the Contact or Consult form on the site sends a real email
through your configured SMTP provider to `MAIL_TO`.

## 3. Build & run in production

```bash
npm run build
NODE_ENV=production npm start
```

Visit `http://localhost:4000` (or whatever `PORT` is set to) — Express now serves the built site
and the API from the same origin.

## SMTP configuration

`.env` (see `.env.example` for the full, commented template):

```
NODE_ENV=development
PORT=4000

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password-or-app-password

MAIL_FROM="ADC Website <no-reply@adurojaiye.com>"
MAIL_TO=info@adurojaiye.com
```

| Provider     | Host                | Port | Secure |
|--------------|---------------------|------|--------|
| Gmail        | smtp.gmail.com      | 587  | false (use an App Password) |
| Outlook/365  | smtp.office365.com  | 587  | false |
| Zoho Mail    | smtp.zoho.com       | 465  | true |
| SendGrid     | smtp.sendgrid.net   | 587  | false (`SMTP_USER=apikey`) |

**Never commit `.env`.** It's already in `.gitignore`. In production, set these as environment
variables/secrets in your hosting platform's dashboard instead of shipping a `.env` file.

## API

- `POST /api/contact` — `{ name, email, message }` → emails `MAIL_TO`, with `replyTo` set to the
  sender's address. Validates required fields and email format; input is HTML-escaped before
  being placed in the email body.
- `POST /api/consult` — `{ name, industry, phone, email, yearsInOperation, interests[], notes }`
  → emails `MAIL_TO`. Same validation/escaping.
- `GET /api/health` — uptime check, returns `{ ok: true }`.
- Both form endpoints are rate-limited (10 submissions per IP per 15 minutes).

## Design

- **Palette** — deep ink navy (`#0B1F3A`), brass/gold accent (`#C6A15B`), warm paper (`#F7F5F0`)
  — a "chartered firm seal & ledger" identity built for this brief, not a generic template.
- **Type** — Fraunces (display serif) + Inter (body) + IBM Plex Mono (labels/data).
- **Signature element** — a slow, subtle rotating 3D brass seal in the hero
  (`src/components/RotatingSeal.jsx`, react-three-fiber), plus a faint repeating "ledger line"
  texture used behind a few sections.
- **Motion** — kept deliberately restrained: scroll reveals, a small card lift on hover, an
  animated stat counter, soft page-fade transitions. `prefers-reduced-motion` is respected
  (see `src/index.css`).
- Fully responsive from mobile through desktop; keyboard focus states are visible throughout.

## Using the original logo

The site currently loads the original logo directly from the live site
(`https://adurojaiye.com/wp-content/uploads/2019/10/cropped-adc-logo-2.jpg`) so it works out of
the box. For production, download that image, save it as `public/logo.jpg`, and update `logoUrl`
in `src/lib/content.js` to `/logo.jpg` so the logo is self-hosted rather than hot-linked. A
stylised `logo.svg` in `public/` is already wired up as an automatic fallback if the remote image
ever fails to load.

## Pages (all content sourced verbatim from the original site)

| Route            | Content                                                       |
|-------------------|----------------------------------------------------------------|
| `/`               | Hero, services preview, business stages, 40-year stat, client sectors |
| `/services`        | All four services with their original descriptions             |
| `/about-us`        | Firm history, vision statement, core values, leadership & team |
| `/team-members`    | Full team directory                                             |
| `/contact-us`      | Contact details, SMTP contact form, Google Map                 |
| `/consult-us`      | SMTP-backed consultation request form                          |

See `src/lib/content.js` for the single source of truth for all copy.
