import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, heading, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center mx-auto' : ''}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="ledger-rule w-10" />
          <span
            className={`font-mono text-xs tracking-[0.25em] uppercase ${
              light ? 'text-accent' : 'text-accent-dark'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      {heading && (
        <h2
          className={`font-display text-balance text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-medium ${
            light ? 'text-paper' : 'text-ink'
          }`}
        >
          {heading}
        </h2>
      )}
    </motion.div>
  )
}
