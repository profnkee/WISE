import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { REGISTRATION_FEES, REGISTRATION_DEADLINES, BANK_DETAILS } from '../data/dates'
import { SITE } from '../data/site'

const FEE_COLUMNS = [
  { key: 'inVirtual', label: 'Virtual', sub: '(Indian)' },
  { key: 'inPhysical', label: 'Physical', sub: '(Indian)' },
  { key: 'foreignVirtual', label: 'Virtual', sub: '(Foreign)' },
  { key: 'foreignPhysical', label: 'Physical', sub: '(Foreign)' },
]

const FEE_TIERS = [
  { key: 'earlyBird', label: 'Early Bird Registration', note: REGISTRATION_DEADLINES.earlyBird },
  { key: 'standard', label: 'Standard Registration', note: REGISTRATION_DEADLINES.standard },
]

const FEE_NOTES = [
  'The registration fees mentioned above are exclusive of applicable taxes. An additional 18% GST will be charged on the applicable registration fee, as per prevailing government regulations.',
  'The author registration fees include conference kit, access/admission to keynote & technical sessions, lunch, morning and evening refreshments, and banquet dinner as part of the conference.',
  "It is recommended to present the paper in offline mode. However, the presenters are also allowed to present their paper online. The conference kit will not be provided for online registrations. The e-copy of the paper presentation certificate will be sent to the author's e-mail address.",
]

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
              'Complete the Google Registration Form (one per paper ID) by 15th March 2027 after payment.',
              'Late registration is allowed up to 25th March 2027 with a 10% additional fee.',
              'Select the correct category (IEEE/Non-IEEE, Student/Professional, Virtual/Physical) carefully.',
              'One author registration = presentation of 1 accepted paper. Up to 2 additional papers can be added under the same registration - charges per additional paper: ₹5000 (Indian authors) & $100 (Foreign authors)',
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
            <table className="w-full min-w-[960px] text-center text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th rowSpan={2} className="border-r border-white/15 px-4 py-3 text-left font-semibold">
                    Category
                  </th>
                  {FEE_TIERS.map((tier, i) => (
                    <th
                      key={tier.key}
                      colSpan={FEE_COLUMNS.length}
                      className={`border-b border-white/15 px-4 py-3 font-semibold ${i < FEE_TIERS.length - 1 ? 'border-r' : ''}`}
                    >
                      {tier.label}
                      <span className="block text-xs font-normal text-white/75">({tier.note})</span>
                    </th>
                  ))}
                </tr>
                <tr>
                  {FEE_TIERS.flatMap((tier, t) =>
                    FEE_COLUMNS.map((col, c) => (
                      <th
                        key={`${tier.key}-${col.key}`}
                        className={`px-3 py-2 text-xs font-semibold ${
                          c === FEE_COLUMNS.length - 1 && t < FEE_TIERS.length - 1 ? 'border-r border-white/15' : ''
                        }`}
                      >
                        {col.label}
                        <span className="block font-normal text-white/75">{col.sub}</span>
                      </th>
                    )),
                  )}
                </tr>
              </thead>
              <tbody>
                {REGISTRATION_FEES.map((row, i) => (
                  <tr key={row.category} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="border-r border-slate-200 px-4 py-3 text-left font-medium text-navy-950">
                      {row.category}
                    </td>
                    {FEE_TIERS.flatMap((tier, t) =>
                      FEE_COLUMNS.map((col, c) => (
                        <td
                          key={`${tier.key}-${col.key}`}
                          className={`px-3 py-3 text-slate-600 ${
                            c === FEE_COLUMNS.length - 1 && t < FEE_TIERS.length - 1 ? 'border-r border-slate-200' : ''
                          }`}
                        >
                          {row[tier.key][col.key]}
                        </td>
                      )),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 text-sm text-slate-600">
            <p className="font-semibold text-navy-950">Note:</p>
            <ul className="mt-2 space-y-2">
              {FEE_NOTES.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="text-navy-700">*</span>
                  {note}
                </li>
              ))}
            </ul>
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
