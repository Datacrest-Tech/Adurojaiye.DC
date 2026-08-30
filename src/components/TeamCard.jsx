import { motion } from "framer-motion";

function initials(name) {
  const cleaned = name.replace(/\(.*?\)/g, "").trim();
  const parts = cleaned
    .split(/\s+/)
    .filter((p) => p.length > 1 || /^[A-Z]\.?$/.test(p));
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function TeamCard({ index, name, credentials, bio }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ rotateX: -2, rotateY: 2, y: -4 }}
      className="bg-[#2a7ae8] text-white p-7 border border-white/15 [perspective:800px]"
    >
      <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center font-display text-white text-lg font-semibold mb-5">
        {initials(name)}
      </div>
      <h3 className="font-display text-base font-medium leading-snug mb-1 text-white">
        {name}
      </h3>
      <p className="font-mono text-[11px] tracking-widest text-white/80 uppercase mb-4">
        {credentials}
      </p>
      <p className="text-sm text-white/85 leading-relaxed">{bio}</p>
    </motion.article>
  );
}
