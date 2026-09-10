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
        !isRoot || scrolled ? "bg-paper/95 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="flex items-center h-14 sm:h-16 px-2.5 py-1.5 bg-paper rounded-md shadow-[0_4px_18px_-4px_rgba(0,0,0,0.06)] ring-1 ring-black/4 transition-transform duration-500 group-hover:scale-[1.03]">
            <img
              src={brand.logoUrl}
              alt="Ajibade Durojaiye & Co."
              loading="eager"
              decoding="async"
              className="h-full w-auto max-w-[180px] object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/logo.svg";
              }}
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-ink text-lg tracking-wide">
              {brand.name}
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink/60 uppercase">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `inline-flex px-4 py-2 text-sm tracking-wide font-medium text-ink transition-transform duration-200 hover:scale-[1.02] ${
                    isActive ? "underline" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              to={hero.ctaPrimary.to}
              className="group inline-flex items-center gap-0 border border-[#2a7ae8] bg-[#2a7ae8] text-white px-5 py-3 text-sm font-semibold tracking-wide shadow-sm transition-colors duration-200 hover:brightness-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2a7ae8]/40"
            >
              <span className="transition-all duration-300 group-hover:pr-2">
                {hero.ctaPrimary.label}
              </span>
              <span className="inline-flex h-7 w-0 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/10 text-base opacity-0 transition-all duration-300 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-1 group-hover:bg-white/15">
                →
              </span>
            </Link>
          </motion.div>
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
                    className="block w-full text-center mt-2 inline-flex justify-center bg-white text-ink px-7 py-3.5 text-sm font-semibold tracking-wide shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] hover:bg-accent-light hover:text-white transition-colors"
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
                className="mt-3 inline-flex justify-center border border-[#2a7ae8] bg-[#2a7ae8] text-white px-5 py-2.5 text-sm font-medium"
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
