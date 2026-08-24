import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { brand, contactPage } from '../lib/content'

export default function ContactUs() {
  return (
    <>
      <PageHero heading={contactPage.heading} />

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="h-20 w-auto max-w-[220px] object-contain mb-6"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/logo.svg'
              }}
            />
            <h2 className="font-display text-2xl text-ink mb-1">{brand.name}</h2>
            <p className="text-ink/60 leading-relaxed mb-8">
              {brand.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <a
              href={`mailto:${brand.email}`}
              className="block font-display text-lg text-accent-dark hover:text-accent transition-colors mb-2"
            >
              {brand.email}
            </a>
            <p className="font-display text-lg text-ink">{brand.phones.join('   ')}</p>
          </div>

          <div className="bg-white border border-ink/10 p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-accent-dark mb-5">
            Find Us on Google Map
          </h3>
          <div className="border border-ink/10 h-[360px] sm:h-[440px] overflow-hidden">
            <iframe
              title="ADC office location"
              src={brand.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
