import { motion } from "framer-motion";

export default function ServiceCard({ index, title, description, tags }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative border border-ink/10 bg-white/70 p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(11,31,58,0.35)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-accent-dark tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
        </span>
      </div>
      <h3 className="font-display text-xl font-medium text-ink mb-3 leading-snug">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-ink/65 leading-relaxed">{description}</p>
      )}

      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs text-ink/70 border border-ink/8 px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
