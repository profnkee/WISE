import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SITE } from '../data/site'

const CARDS = [
  {
    label: 'About Us',
    value: `The ${SITE.shortName} conference is focused on innovative, collaborative, and knowledge sharing engineering research.`,
  },
  { label: 'Contact Person', value: `${SITE.contactPerson} — ${SITE.phone}` },
  { label: 'Location', value: SITE.venueAddress },
  { label: 'E-mail', value: `${SITE.emails.namrata} / ${SITE.emails.nishant}` },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHeader eyebrow="Get in touch" title="Contact Us" />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.label} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="font-display text-sm tracking-wide text-navy-950">{c.label}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl tracking-wide text-navy-950">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Your Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Your Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20" />
              </div>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-navy-700 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Send Message
              </button>
              {sent && (
                <p className="text-sm text-emerald-600">
                  Thanks! Please also reach us directly at{' '}
                  <a href={`mailto:${SITE.emails.namrata}`} className="font-semibold underline">{SITE.emails.namrata}</a> if urgent.
                </p>
              )}
            </form>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="NIT Jamshedpur Map"
              className="h-full min-h-[320px] w-full"
              src="https://www.google.com/maps?q=NIT+Jamshedpur&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
