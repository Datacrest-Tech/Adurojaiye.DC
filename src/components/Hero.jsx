import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import RotatingSeal from "./RotatingSeal";
import { hero } from "../lib/content";

export default function Hero() {
  const ref = useRef(null);

  // Subtle, professional parallax: the background photo drifts a few
  // pixels opposite the cursor. Kept small on purpose — a hint of depth,
  // not a gimmick.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(springX, [-1, 1], ["1%", "-1%"]);
  const bgY = useTransform(springY, [-1, 1], ["0.6%", "-0.6%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[86vh] flex items-center justify-center overflow-hidden bg-ink-deep pt-24"
    >
      {/* Background photo — the original hero image, subtly parallaxed */}
      <motion.div
        className="absolute inset-0 scale-[1.06]"
        style={{ x: bgX, y: bgY }}
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.06, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <img
          src={hero.image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Brand-blue overlay for legibility and a premium, on-brand tint */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-ledger-lines opacity-[0.15] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-40 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center justify-center">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-0.5 bg-accent-light" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent-light">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-medium text-white max-w-2xl text-balance"
          >
            {hero.heading}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to={hero.ctaPrimary.to}
              className="inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 text-sm font-semibold tracking-wide shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] hover:bg-accent-light hover:text-white transition-colors"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              to={hero.ctaSecondary.to}
              className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:border-white hover:bg-white/10 transition-colors"
            >
              {hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>

        {/* Small, subtle floating 3D trust badge — a professional accent,
            not the focal point of the hero. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block h-64"
        >
          <div
            className="absolute inset-0 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <RotatingSeal />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
