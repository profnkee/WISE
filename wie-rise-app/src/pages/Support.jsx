import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

const ITEMS = [
  {
    q: 'How do I register for the conference?',
    a: (
      <>
        You can register via the <Link to="/registration" className="font-semibold text-navy-700 hover:underline">Registration</Link> page, which lists fees, deadlines, and payment details.
      </>
    ),
  },
  {
    q: 'Can I book accommodation through the conference?',
    a: (
      <>
        Yes — recommended hotels near the venue are listed on the <Link to="/venue" className="font-semibold text-navy-700 hover:underline">Venue</Link> page.
      </>
    ),
  },
  {
    q: 'Can I present a paper at the conference?',
    a: (
      <>
        Yes. See <Link to="/call-for-papers" className="font-semibold text-navy-700 hover:underline">Call for Papers</Link> for submission tracks and{' '}
        <Link to="/manuscript-submission" className="font-semibold text-navy-700 hover:underline">Manuscript Submission</Link> for camera-ready guidelines.
      </>
    ),
  },
  {
    q: 'How can I contact the support team?',
    a: (
      <>
        Email the organizing team at{' '}
        <a href={`mailto:${SITE.emails.namrata}`} className="font-semibold text-navy-700 hover:underline">{SITE.emails.namrata}</a>{' '}
        or{' '}
        <a href={`mailto:${SITE.emails.nishant}`} className="font-semibold text-navy-700 hover:underline">{SITE.emails.nishant}</a>, or call {SITE.phone}.
      </>
    ),
  },
]

export default function Support() {
  return (
    <div>
      <PageHeader eyebrow="Help" title="Conference Support" />
      <Container className="py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {ITEMS.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display text-base tracking-wide text-navy-950">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
