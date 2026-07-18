import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

export default function Sponsorship() {
  return (
    <div>
      <PageHeader eyebrow="Partnerships" title="Sponsorship" />
      <Container className="py-16">
        <p className="max-w-3xl text-justify leading-relaxed text-slate-600">
          We invite companies, research organizations, and academic institutes to become Technical and
          Financial Sponsors of this IEEE technically-sponsored international event — the 1st Conference on
          WIE-RISE: Revolutionizing Innovation in Smart Engineering, organized by the Department of Electrical
          Engineering, National Institute of Technology Jamshedpur, Jharkhand, India during 01–03 April, 2027.
        </p>

        <div className="mt-16">
          <SectionHeading eyebrow="Process" title="SOP for Donations / Sponsorship" />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="font-semibold text-navy-950">1. Objective</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                To define the SOP and manage payments related to donations/sponsorship under two designated
                payment categories in the SBI Collect portal:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="font-semibold text-navy-700">01.</span> Donation (Alumni Contributor)</li>
                <li className="flex gap-2"><span className="font-semibold text-navy-700">02.</span> Sponsorship</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 shadow-sm">
              Payment can be made via the official SBI Collect payment gateway. Scan the QR code or use the
              payment link provided by the organizing committee to complete your contribution securely.
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Tiers" title="Sponsorship Benefits at a Glance" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img src="/assets/sponsor.jpg" alt="Sponsorship benefit tiers" className="w-full object-contain" />
          </div>
        </div>
      </Container>
    </div>
  )
}
