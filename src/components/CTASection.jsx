import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { closingCta, hero } from "../lib/content";

export default function CTASection({ heading, body, light = false }) {
  const sectionBg = light ? "bg-paper" : "bg-ink";
  const headingClass = light ? "text-ink" : "text-paper";
  const paraClass = light ? "text-ink/70" : "text-paper/60";
  const secondaryBtnClass = light
    ? "inline-flex items-center gap-2 border border-ink/15 text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors"
    : "inline-flex items-center gap-2 border border-paper/25 text-paper px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors";

  return (
    <section className={`relative ${sectionBg} py-24 overflow-hidden`}>
      <div
        className="absolute inset-0 bg-ledger-lines opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <span className="ledger-rule w-10 mx-auto mb-6" />
        <h2
          className={`font-display text-3xl sm:text-4xl font-medium ${headingClass} mb-4`}
        >
          {heading || closingCta.heading}
        </h2>
        <p className={`${paraClass} mb-9 max-w-xl mx-auto`}>
          {body || closingCta.body}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={hero.ctaPrimary.to}
            className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-dark transition-colors"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link to={hero.ctaSecondary.to} className={secondaryBtnClass}>
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
