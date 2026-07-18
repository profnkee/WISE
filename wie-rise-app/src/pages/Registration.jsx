import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { REGISTRATION_FEES, BANK_DETAILS } from '../data/dates'
import { SITE } from '../data/site'

export default function Registration() {
  return (
    <div>
      <PageHeader eyebrow="For Authors & Attendees" title="Registration Details" />
      <Container className="py-16">
        <p className="max-w-3xl text-justify leading-relaxed text-slate-600">
          At least one author of each accepted paper must complete registration by paying the appropriate
          conference fee for the paper to be included in the WIE-RISE 2027 conference program and submitted for
          publication in IEEE Xplore (subject to compliance with IEEE quality standards and presentation at the
          conference).
        </p>

        <div className="mt-10">
          <SectionHeading eyebrow="Guidelines" title="Registration Guidelines" />
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {[
              'At least one author must register on or before 15th March 2027.',
              'Only registered and presented papers will be considered for IEEE Xplore.',
              'Each full registration covers one (1) paper with a maximum of 6 pages.',
              'Up to 2 additional pages allowed with an overlength fee of ₹2,500 / $30 per extra page.',
              'Registration fees are non-refundable under any circumstances.',
              'Authors must retain the payment transaction ID or receipt for the registration process.',
              'IEEE Member/Student registrants must upload a valid IEEE membership card or student ID.',
              'Complete the Google Registration Form (one per paper ID) by 05th March 2027 after payment.',
              'Late registration is allowed up to 25th March 2027 with a 10% additional fee.',
              'Select the correct category (IEEE/Non-IEEE, Student/Professional, Virtual/Physical) carefully.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Fees" title="Conference Registration Fee" />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Indian (Virtual)</th>
                  <th className="px-4 py-3 font-semibold">Foreign (Virtual)</th>
                  <th className="px-4 py-3 font-semibold">Indian (Physical)</th>
                  <th className="px-4 py-3 font-semibold">Foreign (Physical)</th>
                </tr>
              </thead>
              <tbody>
                {REGISTRATION_FEES.map((row, i) => (
                  <tr key={row.category} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-navy-950">{row.category}</td>
                    <td className="px-4 py-3 text-slate-600">{row.inVirtual}</td>
                    <td className="px-4 py-3 text-slate-600">{row.foreignVirtual}</td>
                    <td className="px-4 py-3 text-slate-600">{row.inPhysical}</td>
                    <td className="px-4 py-3 text-slate-600">{row.foreignPhysical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Payment" title="Fee Payment Details (Bank Transfer)" />
          <div className="mt-6 grid gap-x-8 gap-y-3 rounded-2xl border border-slate-200 p-6 shadow-sm sm:grid-cols-2">
            {BANK_DETAILS.map((row) => (
              <div key={row.label} className="flex justify-between gap-4 border-b border-slate-100 py-2 text-sm last:border-0">
                <span className="text-slate-500">{row.label}</span>
                <span className="text-right font-medium text-navy-950">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Institute Address: {SITE.venueAddress}. If a payment error occurs, please retry or contact your
            bank.
          </p>
        </div>
      </Container>
    </div>
  )
}
