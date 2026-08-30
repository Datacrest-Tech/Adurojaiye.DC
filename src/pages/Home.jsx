import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import StatCounter from "../components/StatCounter";
import CTASection from "../components/CTASection";
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
} from "../lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionHeading
              eyebrow={homeIntro.eyebrow}
              heading="A holistic partner for financial growth"
            />
            <p className="max-w-lg text-base leading-relaxed text-ink/65 lg:pb-2">
              {homeIntro.body}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-24px_rgba(11,31,58,0.3)] lg:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-accent-dark uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                    <span aria-hidden="true">→</span>
                  </div>
                </div>

                <h3 className="max-w-md font-display text-[1.7rem] leading-[1.15] text-ink">
                  {service.title}
                </h3>

                {service.description && (
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>
                )}

                <div className="mt-7 h-px w-full bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-dark"
                >
                  Tell Me More
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-ink/15 bg-white px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-ink uppercase transition-colors hover:border-accent hover:text-accent-dark"
            >
              View All Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2a7ae8] py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-ledger-lines opacity-30"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow={stageSection.eyebrow}
                heading={stageSection.heading}
                light
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/65">
                {stageSection.body}
              </p>

              <Link
                to={stageSection.cta.to}
                className="mt-8 inline-flex items-center gap-2 bg-white text-ink px-7 py-3.5 text-sm font-semibold tracking-wide shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-accent-light hover:text-white"
              >
                {stageSection.cta.label}
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stageSection.stages.map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative h-72 overflow-hidden border border-white/10 bg-ink/70 shadow-[0_24px_55px_-30px_rgba(0,0,0,0.75)] sm:h-80 lg:h-[20rem]"
                >
                  <img
                    src={stageSection.stageImages[index]}
                    alt={stage}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                    <span className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-paper">
                      {stage}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[34rem]"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] border border-ink/10 bg-ink shadow-[0_28px_70px_-34px_rgba(11,31,58,0.38)]">
                <img
                  src="/Images/hero-background.jfif"
                  alt="ADC advisory team"
                  className="h-[440px] w-full object-cover object-center lg:h-[520px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-7 left-7 rounded-[1.2rem] bg-accent px-6 py-5 shadow-[0_20px_40px_-22px_rgba(21,95,204,0.9)] sm:px-7">
                <span className="font-display text-5xl leading-none text-paper sm:text-6xl">
                  40+
                </span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.24em] text-paper/80 uppercase">
                  Years of experience
                </span>
              </div>
            </motion.div>

            <div className="lg:pl-6">
              <p className="font-mono text-[11px] tracking-[0.28em] text-accent-dark uppercase">
                {workingWithByline}
              </p>
              <div className="mt-5">
                <SectionHeading heading={workingWithHeading} />
              </div>

              <div className="mt-8 space-y-5 text-ink/70">
                {aboutParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-4 rounded-[1.25rem] border border-ink/10 bg-[#f4f8ff] p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-lg font-medium text-accent">
                  K
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.24em] text-accent-dark uppercase">
                    Managing Partner
                  </p>
                  <p className="mt-1 font-display text-xl text-ink">
                    Mr. Kehinde Durojaiye
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/5 bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={clientsEyebrow}
            heading={clientsIntro}
            align="center"
          />

          <div className="mt-14 flex justify-center">
            <div className="grid w-full max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {clientSectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-[1.25rem] border border-ink/10 bg-[#f7fafc] text-center transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(11,31,58,0.28)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="font-display text-lg leading-snug text-ink/80">
                      {sector.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection light />
    </>
  );
}
