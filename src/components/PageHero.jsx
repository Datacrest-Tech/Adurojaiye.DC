import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHero({ heading, crumb }) {
  return (
    <section className="relative bg-ink pt-40 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-ledger-lines opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-accent/80 mb-4 flex items-center gap-2"
        >
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <span className="text-accent">{crumb || heading}</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl font-medium text-paper leading-[1.05] max-w-2xl"
        >
          {heading}
        </motion.h1>
      </div>
    </section>
  )
}
