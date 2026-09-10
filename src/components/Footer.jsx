import { Link } from "react-router-dom";
import { brand, navLinks } from "../lib/content";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.2c0-.9.3-1.6 1.7-1.6H17V2.7c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7v2.6H7v3.1h2.7v8h3.8Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M18.9 3.5c.8.5 1.5 1.3 1.9 2.2-.7-.4-1.5-.7-2.4-.8.9-.6 1.5-1.4 1.8-2.5-.8.5-1.8.9-2.8 1.1A4.1 4.1 0 0 0 12 7.2c0 .3 0 .7.1 1C8.2 8.6 5.5 7 3.8 4.7c-.4.7-.5 1.5-.5 2.3 0 1.5.8 2.8 2 3.6-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.1A8.3 8.3 0 0 1 2 18c1.9 1.2 4.1 1.8 6.5 1.8 7.7 0 12-6.3 12-11.8v-.5c.9-.7 1.6-1.5 2.2-2.5-.8.4-1.7.7-2.7.8.9-.5 1.7-1.4 2-2.5-.9.5-1.9.9-3 .9Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M6.9 8.2A1.8 1.8 0 1 1 6.9 4.6a1.8 1.8 0 0 1 0 3.6ZM5.2 9.8h3.4V19H5.2V9.8Zm5.7 0h3.2v1.3h.1c.4-.9 1.6-1.8 3.4-1.8 3.7 0 4.4 2.4 4.4 5.6V19h-3.4v-17.5c0-1.3-.1-3-1.8-3-1.8 0-2.1 1.4-2.1 2.8V19h-3.8V9.8Z" />
      </svg>
    ),
  },
];

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
                loading="lazy"
                decoding="async"
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
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors hover:bg-accent hover:text-ink"
                >
                  {social.icon}
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
