import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { IMPORTANT_DATES } from '../data/dates'

export default function ImportantDates() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Important Dates" subtitle="Please make sure to adhere to these deadlines." />
      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMPORTANT_DATES.map((d, i) => (
            <div
              key={d.milestone}
              className="relative overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-navy-700 to-sky-500" />
              <span className="font-display text-2xl text-navy-300">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-lg tracking-wide text-navy-950">{d.milestone}</h3>
              <p className="mt-1 font-semibold text-slate-600">{d.date}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
