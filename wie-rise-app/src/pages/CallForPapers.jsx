import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { TRACKS } from '../data/dates'

export default function CallForPapers() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Call for Papers" />
      <Container className="py-16">
        <SectionHeading eyebrow="Guidelines" title="Paper Submission" />
        <ul className="mt-6 space-y-3 text-slate-600">
          {[
            'All submissions must be written in English, and must be original, unpublished work.',
            'All papers must be submitted electronically in PDF format by the deadline.',
            'Maximum length is 6 pages, including all text, tables, figures, and references.',
            'The conference proceedings will be submitted to the IEEE Xplore Digital Library.',
            'Standard IEEE manuscript templates (LaTeX & Word) must be used for formatting.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <SectionHeading eyebrow="Scope" title="Tracks & Topics of Interest" />
          <p className="mt-4 max-w-3xl text-slate-600">
            The conference invites high-quality research contributions in all areas of Electrical,
            Electronics, and Computer Science, including but not limited to the following tracks:
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {TRACKS.map((t) => (
              <div key={t.id} className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">{t.id}</span>
                <h3 className="mt-1 font-display text-lg tracking-wide text-navy-950">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
          <h3 className="font-display text-xl tracking-wide">Special Sessions</h3>
          <p className="mt-3 max-w-2xl text-slate-200/90">
            The conference will include special sessions on highly specialized topic areas, reporting
            technical trends and breakthroughs within the scope of the conference. Special Sessions are
            organized at the initiative of one or more individuals, who must adhere to the published
            guidelines.
          </p>
          <Link
            to="/special-sessions"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
          >
            Call for Special Sessions →
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          See the <Link to="/important-dates" className="font-semibold text-navy-700 hover:underline">Important Dates</Link> page
          for the full submission timeline, and{' '}
          <Link to="/manuscript-submission" className="font-semibold text-navy-700 hover:underline">Paper Submission Guidelines</Link>{' '}
          for camera-ready instructions.
        </p>

        <p className="mt-6 text-sm text-slate-500">CMT Acknowledgment:</p>
        <p className="mt-1 text-sm text-slate-500">
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
          This service was provided for free by Microsoft and they bore all expenses, including costs for
          Azure cloud services as well as for software development and support.
        </p>
      </Container>
    </div>
  )
}
