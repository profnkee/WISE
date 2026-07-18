import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { ATTRACTIONS, HOTELS } from '../data/venue'
import { SITE } from '../data/site'

export default function Venue() {
  return (
    <div>
      <PageHeader
        eyebrow="Location"
        title="Venue & Key Attractions"
        subtitle="Jamshedpur, located in the Indian state of Jharkhand, offers several attractions for visitors to explore."
      />
      <Container className="py-16">
        <SectionHeading eyebrow="Explore" title="Key Attractions Near Jamshedpur" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ATTRACTIONS.map((a) => (
            <div key={a.name} className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <p className="p-4 font-medium text-navy-950">{a.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          These attractions near Jamshedpur offer a blend of natural beauty, recreational activities, and
          cultural experiences.
        </p>

        <div className="mt-16">
          <SectionHeading eyebrow="Stay" title="Accommodations" />
          <p className="mt-4 text-slate-600">We recommend the following hotels located near the venue:</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Hotel</th>
                  <th className="px-5 py-3 font-semibold">Area</th>
                  <th className="px-5 py-3 font-semibold">Distance from NIT Jamshedpur</th>
                </tr>
              </thead>
              <tbody>
                {HOTELS.map((h, i) => (
                  <tr key={h.name} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-5 py-3 font-medium text-navy-950">{h.name}</td>
                    <td className="px-5 py-3 text-slate-600">{h.area}</td>
                    <td className="px-5 py-3 text-slate-600">{h.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-navy-950 p-8 text-white">
          <h3 className="font-display text-lg tracking-wide">Contact Information</h3>
          <p className="mt-2 text-sm text-slate-200/90">
            For further details about the venue or assistance with directions, contact us at:
          </p>
          <p className="mt-3 text-sm">
            Phone: <span className="font-semibold">{SITE.phone}</span> &nbsp;·&nbsp; Email:{' '}
            <a href={`mailto:${SITE.emails.nishant}`} className="font-semibold text-sky-400 hover:underline">
              {SITE.emails.nishant}
            </a>
          </p>
        </div>
      </Container>
    </div>
  )
}
