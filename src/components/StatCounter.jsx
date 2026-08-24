import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ to = 40, suffix = '+', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
      <span className="font-display text-5xl sm:text-6xl font-semibold text-accent tabular-nums">
        {value}
        {suffix}
      </span>
      {label && <span className="mt-2 text-xs font-mono tracking-[0.2em] uppercase text-paper/60">{label}</span>}
    </motion.div>
  )
}
