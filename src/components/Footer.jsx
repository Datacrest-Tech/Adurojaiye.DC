import { Link } from 'react-router-dom'
import { brand, navLinks } from '../lib/content'

const socials = ['Facebook', 'LinkedIn', 'Twitter']

export default function Footer() {
  const flatLinks = navLinks.flatMap((l) => [l, ...(l.children || [])])

  return (
    <footer className="bg-ink-deep text-paper border-t border-accent/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center h-12 px-2 py-1 bg-white rounded-md shadow-sm">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="h-full w-auto max-w-[140px] object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = '/logo.svg'
                }}
              />
            </span>
            <span className="font-display text-paper leading-tight">{brand.name}</span>
          </div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">{brand.tagline}</p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5">Useful Links</h4>
          <ul className="space-y-2.5">
            {flatLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-paper/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5">Contact Us</h4>
          <p className="text-sm text-paper/70 leading-relaxed">
            {brand.phones.join(', ')}
            <br />
            <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors">
              {brand.email}
            </a>
          </p>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-accent mt-6 mb-3">Address</h4>
          <p className="text-sm text-paper/70 leading-relaxed">
            {brand.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5">Connect With Us</h4>
          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-accent/30 text-accent text-xs font-mono hover:bg-accent hover:text-ink transition-colors"
                >
                  {s[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-paper/50">{brand.copyright}</p>
          <p className="text-xs text-paper/30 font-mono">Rebuilt in React by a Front-End Developer, content preserved from the original site</p>
        </div>
      </div>
    </footer>
  )
}
