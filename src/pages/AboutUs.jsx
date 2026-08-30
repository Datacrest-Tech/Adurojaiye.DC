import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import CTASection from "../components/CTASection";
import {
  aboutParagraphs,
  vision,
  coreValues,
  leadership,
  team,
} from "../lib/content";

export default function AboutUs() {
  return (
    <>
      <PageHero heading="About Us" />

      <section className="bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-ink/65 leading-relaxed">
              {p}
            </p>
          ))}

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 border-l-2 border-accent pl-6 py-1 font-display text-xl sm:text-2xl leading-snug text-ink"
          >
            &ldquo;{vision.quote}&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Core values */}
      <section className="relative bg-[#2a7ae8] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-ledger-lines opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Core Values"
            heading="Business wisdom at your disposal"
            light
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-accent/10">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#1d5fc8]/40 p-7"
              >
                <h3 className="font-display text-lg text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Leadership"
            heading="A partner for every stage of business"
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
            {leadership.map((person, i) => (
              <TeamCard
                key={person.slug}
                index={i}
                name={person.name}
                credentials={person.credentials}
                bio={person.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the team */}
      <section className="bg-paper pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-14">
            <SectionHeading heading="Meet our business experts" />
            <Link
              to="/team-members"
              className="text-sm font-medium text-ink hover:text-accent-dark transition-colors inline-flex items-center gap-2"
            >
              View team directory <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((person, i) => (
              <TeamCard
                key={person.slug}
                index={i}
                name={person.name}
                credentials={person.credentials}
                bio={person.bio}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        light
        heading="Ready to reach higher in business?"
        body={`For Financial management and much more – speak with us today.`}
      />
    </>
  );
}
