import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ConsultForm from '../components/ConsultForm'
import { consultPage } from '../lib/content'

export default function ConsultUs() {
  return (
    <>
      <PageHero heading={consultPage.heading} crumb="Consult Us" />

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow={consultPage.eyebrow} heading="Tell us about your business" />
          <div className="mt-12 bg-white border border-ink/10 p-8 sm:p-10">
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  )
}
