import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SPECIAL_SESSION_PAPERS } from '../data/dates'

function SessionItem({ session }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span>
          <span className="block font-display text-lg tracking-wide text-navy-950">{session.label}</span>
          <span className="mt-1 block text-sm text-slate-500">{session.title}</span>
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-navy-700 transition ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.148l3.71-3.918a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-600">Session Organizers</p>
          <ul className="mt-2 divide-y divide-slate-100">
            {session.faculty.map((f) => (
              <li key={f.name} className="py-2.5">
                <p className="font-semibold text-navy-950">{f.name}</p>
                <p className="text-sm text-slate-600">{f.affiliation}</p>
                <a href={`mailto:${f.email}`} className="text-sm text-navy-700 hover:underline">
                  {f.email}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={session.pdf}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            View Call for Papers (PDF)
          </a>
        </div>
      )}
    </div>
  )
}

export default function SpecialSessionPapers() {
  return (
    <div>
      <PageHeader
        eyebrow="For Authors"
        title="Special Sessions"
        subtitle="Accepted special sessions for WIE-RISE 2027, with their organizers and calls for papers."
      />
      <Container className="py-16">
        <div className="grid items-start gap-6 md:grid-cols-2">
          {SPECIAL_SESSION_PAPERS.map((session) => (
            <SessionItem key={session.label} session={session} />
          ))}
        </div>
      </Container>
    </div>
  )
}
