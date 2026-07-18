import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { IMPORTANT_DATES } from '../data/dates'

export default function ImportantDates() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Important Dates" subtitle="Please make sure to adhere to these deadlines." />
      <Container className="py-16">
        <ol className="relative border-l border-slate-200 pl-8">
          {IMPORTANT_DATES.map((d, i) => (
            <li key={d.milestone} className="mb-10 last:mb-0">
              <span className="absolute -left-[9px] grid h-4 w-4 place-items-center rounded-full border-4 border-white bg-navy-700 shadow" />
              <div className="rounded-xl border border-slate-200 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-lg tracking-wide text-navy-950">{d.milestone}</h3>
                <p className="mt-1 text-slate-600">{d.date}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )
}
