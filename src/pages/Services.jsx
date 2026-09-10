import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import { services, consultPage } from "../lib/content";

export default function Services() {
  return (
    <>
      <PageHero heading="Services" />

      {/* Introduction */}
      <section className="bg-paper py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-ink font-light leading-tight">
                Expertise that supports
                <br /> better business decisions.
              </h2>
            </div>
            <div>
              <p className="text-ink/75 leading-relaxed">
                Ajibade Durojaiye & Co. offers a range of professional services
                across audit, tax, training and advisory. Our approach is
                practical, standards-aligned and tailored to each client's
                context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-10 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-ink font-medium leading-tight">
                {service.title}
              </h3>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/65 mb-2">
                    Overview
                  </h4>
                  <p className="text-ink/75 leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/65 mb-2">
                    What We Offer
                  </h4>
                  <ul className="space-y-2 text-ink/75 leading-relaxed">
                    {service.offerings.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-none"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/65 mb-2">
                  Value Delivered
                </h4>
                <p className="text-ink/75 leading-relaxed">
                  {service.valueDelivered}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why ADC */}
      <section className="bg-accent/5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why ADC"
            heading="Why businesses choose ADC"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-paper p-6 rounded-md shadow-sm">
              <div className="text-3xl font-semibold text-ink">40+</div>
              <div className="text-xs uppercase tracking-widest text-ink/70 mt-1">
                Years of Experience
              </div>
            </div>
            <div className="bg-paper p-6 rounded-md shadow-sm">
              <div className="text-3xl font-semibold text-ink">ICAN & CITN</div>
              <div className="text-xs uppercase tracking-widest text-ink/70 mt-1">
                Professional Credentials
              </div>
            </div>
            <div className="bg-paper p-6 rounded-md shadow-sm">
              <div className="text-3xl font-semibold text-ink">Nigeria +</div>
              <div className="text-xs uppercase tracking-widest text-ink/70 mt-1">
                International Reach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we help process */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Our Approach" heading="How we help" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="font-mono text-sm text-accent">01</div>
              <h4 className="mt-3 font-display text-lg text-ink">Understand</h4>
              <p className="text-ink/70 text-sm mt-2">
                Understand your business, industry and immediate needs.
              </p>
            </div>
            <div className="p-6">
              <div className="font-mono text-sm text-accent">02</div>
              <h4 className="mt-3 font-display text-lg text-ink">Assess</h4>
              <p className="text-ink/70 text-sm mt-2">
                Review financial information, systems, risks and opportunities.
              </p>
            </div>
            <div className="p-6">
              <div className="font-mono text-sm text-accent">03</div>
              <h4 className="mt-3 font-display text-lg text-ink">Advise</h4>
              <p className="text-ink/70 text-sm mt-2">
                Provide practical recommendations tailored to your situation.
              </p>
            </div>
            <div className="p-6">
              <div className="font-mono text-sm text-accent">04</div>
              <h4 className="mt-3 font-display text-lg text-ink">Support</h4>
              <p className="text-ink/70 text-sm mt-2">
                Help strengthen financial and business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        light
        heading={consultPage.eyebrow}
        body="Let's talk about your business. Whether you need audit support, tax guidance, financial training or business advisory, our team is ready to understand your needs."
      />
    </>
  );
}
