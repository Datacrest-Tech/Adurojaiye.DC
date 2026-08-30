import { Link } from "react-router-dom";
import { brand, navLinks } from "../lib/content";

const socials = ["Facebook", "LinkedIn", "Twitter"];

export default function Footer() {
  const flatLinks = navLinks.flatMap((l) => [l, ...(l.children || [])]);

  return (
    <footer className="border-t border-accent/15 bg-ink-deep text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-12 items-center rounded-md bg-white px-3 py-1 shadow-sm">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="h-full max-w-[140px] w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/logo.svg";
                }}
              />
            </span>
          </div>
          <p className="font-display text-lg leading-tight text-paper">
            {brand.name}
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
            {brand.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
            Useful Links
          </h4>
          <ul className="space-y-2.5">
            {flatLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-paper/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
            Contact Us
          </h4>
          <p className="text-sm leading-relaxed text-paper/70">
            {brand.phones.join(", ")}
            <br />
            <a
              href={`mailto:${brand.email}`}
              className="transition-colors hover:text-accent"
            >
              {brand.email}
            </a>
          </p>

          <h4 className="mt-6 mb-3 font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
            Address
          </h4>
          <p className="text-sm leading-relaxed text-paper/70">
            {brand.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-[10px] tracking-[0.25em] uppercase text-accent">
            Connect With Us
          </h4>
          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-xs font-mono text-accent transition-colors hover:bg-accent hover:text-ink"
                >
                  {s[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row lg:px-10">
          <p className="text-xs text-paper/50">{brand.copyright}</p>
          <p className="text-xs font-mono text-paper/30">
            Rebuilt in React by a Front-End Developer, content preserved from
            the original site
          </p>
        </div>
      </div>
    </footer>
  );
}
