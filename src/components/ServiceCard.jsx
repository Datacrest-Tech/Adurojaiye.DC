import { motion } from 'framer-motion'

export default function ServiceCard({ index, title, description }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative border border-ink/10 bg-white/70 p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(11,31,58,0.35)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-accent-dark tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
        </span>
      </div>
      <h3 className="font-display text-xl font-medium text-ink mb-3 leading-snug">{title}</h3>
      {description && <p className="text-sm text-ink/60 leading-relaxed">{description}</p>}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/40 to-transparent" />
    </motion.article>
  )
}
