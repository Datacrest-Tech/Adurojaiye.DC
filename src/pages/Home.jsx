import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import StatCounter from '../components/StatCounter'
import CTASection from '../components/CTASection'
import {
  homeIntro,
  services,
  stageSection,
  workingWithHeading,
  workingWithByline,
  aboutParagraphs,
  clientSectors,
  clientsEyebrow,
  clientsIntro,
} from '../lib/content'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <SectionHeading eyebrow={homeIntro.eyebrow} heading="A holistic partner for financial growth" />
            <p className="max-w-md text-ink/60 leading-relaxed">{homeIntro.body}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div key={s.slug}>
                <ServiceCard index={i} title={s.title} description={s.description} />
                <Link
                  to={`/services`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-dark transition-colors"
                >
                  Tell Me More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-ink/15 text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent-dark transition-colors"
            >
              View All Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stage section */}
      <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-ledger-lines opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading eyebrow={stageSection.eyebrow} heading={stageSection.heading} light />
            <p className="mt-6 text-paper/60 leading-relaxed max-w-lg">{stageSection.body}</p>

            <ol className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {stageSection.stages.map((stage, i) => (
                <motion.li
                  key={stage}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="font-mono text-accent text-xs">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg text-paper">{stage}</span>
                  {i < stageSection.stages.length - 1 && (
                    <span className="text-accent/40 hidden sm:inline">—</span>
                  )}
                </motion.li>
              ))}
            </ol>

            <Link
              to={stageSection.cta.to}
              className="mt-10 inline-flex items-center gap-2 bg-accent text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-light transition-colors"
            >
              {stageSection.cta.label}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, rotateY: -8, scale: 0.96 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="relative h-72 lg:h-96 border border-accent/20"
          >
            <img
              src="https://adurojaiye.com/wp-content/uploads/2019/10/urban_planning_processes_in_lagos.png"
              alt="Lagos business district"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Working with top businesses */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-ink text-paper p-10 lg:p-12 flex flex-col justify-between h-full min-h-[260px]"
          >
            <StatCounter to={40} suffix="+" label="Years of experience" />
            <p className="mt-8 font-mono text-xs tracking-widest text-accent/80 uppercase">
              {workingWithByline}
            </p>
          </motion.div>

          <div>
            <SectionHeading heading={workingWithHeading} />
            <div className="mt-6 space-y-5">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-ink/65 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-paper py-24 lg:py-32 border-t border-ink/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow={clientsEyebrow} heading={clientsIntro} align="center" />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink/10">
            {clientSectors.map((sector, i) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="bg-paper p-6 sm:p-8 flex items-center justify-center text-center"
              >
                <span className="font-display text-sm sm:text-base text-ink/80 leading-snug">{sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
