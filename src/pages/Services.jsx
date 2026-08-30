import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { services, consultPage } from "../lib/content";

export default function Services() {
  return (
    <>
      <PageHero heading="Our Services" />

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        light
        heading={consultPage.eyebrow}
        body="Speak with a Partner associate about the services your business needs."
      />
    </>
  );
}
