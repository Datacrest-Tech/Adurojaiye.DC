import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageHero({ heading, crumb }) {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  return (
    <section className={isRoot ? "bg-ink mt-8 pt-48 pb-16" : "pt-32 pb-6"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={
            isRoot
              ? "mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70"
              : "mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70"
          }
        >
          <Link
            to="/"
            className={
              isRoot
                ? "transition-colors hover:text-accent-light"
                : "transition-colors hover:text-accent-light text-ink/80"
            }
          >
            Home
          </Link>
          <span>/</span>
          <span className={isRoot ? "text-accent-light" : "text-ink/80"}>
            {crumb || heading}
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={
            isRoot
              ? "block bg-white text-ink rounded-md px-4 py-3 shadow-sm max-w-4xl mx-auto font-display text-2xl font-medium leading-tight sm:text-3xl"
              : "font-display text-ink text-2xl font-medium leading-tight sm:text-3xl"
          }
        >
          {heading}
        </motion.h1>
      </div>
    </section>
  );
}
