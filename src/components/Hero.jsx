import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { brand, hero } from "../lib/content";

export default function Hero() {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();

  // Small parallax for image depth (disabled when reduced-motion is preferred)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const bgX = useTransform(springX, [-1, 1], ["1%", "-1%"]);
  const bgY = useTransform(springY, [-1, 1], ["0.6%", "-0.6%"]);

  const onMove = (e) => {
    if (!ref.current || shouldReduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  // Headline split into editorial lines to control reveal timing
  const headlineLines = [
    "Audit, Tax and",
    "Advisory Expertise",
    "That Moves Your",
    "Business Forward",
  ];

  const imageVariants = {
    initial: { scale: 1.06, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const lineVariant = {
    initial: { y: 28, opacity: 0 },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden bg-paper pt-20 lg:pt-24 pb-12 lg:pb-20"
      aria-labelledby="home-hero-title"
    >
      {/* Background image (full-bleed) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0.6, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden
      />
      {/* Subtle left-to-right overlay so left text remains readable while the right side stays clear */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center min-h-[95vh]">
          <div className="max-w-[650px] lg:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-sm font-medium tracking-widest uppercase text-ink/60"
              aria-hidden
            >
              {hero.eyebrow}
            </motion.p>

            <h1
              id="home-hero-title"
              className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-[2.8rem] leading-[1.04] text-ink max-w-[650px]"
            >
              {headlineLines.map((line, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  variants={lineVariant}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-base leading-relaxed text-ink/80"
            >
              {hero.supporting}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
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

              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center justify-center rounded-md border border-ink/10 text-ink px-5 py-3 text-sm font-medium hover:bg-ink/5"
              >
                {hero.ctaSecondary.label}
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-10 w-full max-w-md"
            >
              <div className="flex items-stretch gap-6 text-sm text-ink/80">
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-ink">40+</div>
                  <div className="text-xs uppercase tracking-widest">
                    Years of Experience
                  </div>
                </div>
                <div className="border-l border-ink/10" />
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-ink">
                    ICAN & CITN
                  </div>
                  <div className="text-xs uppercase tracking-widest">
                    Professionals
                  </div>
                </div>
                <div className="border-l border-ink/10" />
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-ink">
                    Nigeria &
                  </div>
                  <div className="text-xs uppercase tracking-widest">
                    International
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink/50 text-xs tracking-widest hidden sm:flex flex-col items-center">
        <span>SCROLL TO EXPLORE</span>
        <span className="block w-px h-6 bg-ink/30 mt-2" />
      </div>
    </section>
  );
}
