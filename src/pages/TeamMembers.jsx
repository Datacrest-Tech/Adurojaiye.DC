import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { leadership, team } from '../lib/content'

export default function TeamMembers() {
  const all = [...leadership, ...team]

  return (
    <>
      <PageHero heading="Team Members" crumb="Team Members" />

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Business Wisdom At Your Disposal" heading="The people behind ADC" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {all.map((person, i) => (
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

      <CTASection />
    </>
  )
}
