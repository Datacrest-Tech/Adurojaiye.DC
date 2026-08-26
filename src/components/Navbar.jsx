import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks, hero } from "../lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isRoot = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        !isRoot || scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(21,95,204,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="flex items-center h-14 sm:h-16 px-2.5 py-1.5 bg-white rounded-md shadow-[0_4px_18px_-4px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.03]">
            <img
              src={brand.logoUrl}
              alt="Ajibade Durojaiye & Co."
              className="h-full w-auto max-w-[180px] object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo.svg";
              }}
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-paper text-lg tracking-wide">
              {brand.name}
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent-light uppercase">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm tracking-wide font-medium transition-colors ${
                    isActive ? "text-accent" : "text-paper/85 hover:text-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
              {link.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-ink-light border border-accent/20 rounded-md shadow-xl min-w-[180px] py-2">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-paper/80 hover:text-accent hover:bg-ink/40 whitespace-nowrap"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to={hero.ctaPrimary.to}
            className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-accent hover:text-ink transition-colors duration-300"
          >
            {hero.ctaPrimary.label}
          </Link>
        </div>

        <button
          className="lg:hidden text-paper p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-[2px] bg-accent mb-1.5" />
          <div className="w-6 h-[2px] bg-accent mb-1.5" />
          <div className="w-4 h-[2px] bg-accent" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-ink border-t border-accent/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-paper/90 hover:text-accent text-sm tracking-wide"
                  >
                    {link.label}
                  </NavLink>
                  {link.children?.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-4 text-paper/70 hover:text-accent text-sm"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ))}
              <Link
                to={hero.ctaPrimary.to}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex justify-center border border-accent text-accent px-5 py-2.5 text-sm font-medium"
              >
                {hero.ctaPrimary.label}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
