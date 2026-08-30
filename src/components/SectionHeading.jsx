import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto text-center" : ""}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="ledger-rule w-10" />
          <span
            className={`font-mono text-xs uppercase tracking-[0.25em] ${
              light ? "text-paper" : "text-accent-dark"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {heading && (
        <h2
          className={`font-display text-balance text-3xl font-medium leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {heading}
        </h2>
      )}
    </motion.div>
  );
}
