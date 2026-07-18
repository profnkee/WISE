import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SITE } from '../data/site'

export default function GeneralChair() {
  return (
    <div>
      <PageHeader eyebrow="Leadership" title="General Chair's Message" />
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm lg:sticky lg:top-28 lg:self-start">
            <img
              src="/images/namrata.jpeg"
              alt="Dr. Kumari Namrata"
              className="h-36 w-36 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 font-display text-lg tracking-wide text-navy-950">Dr. Kumari Namrata</h3>
            <p className="mt-1 text-sm text-slate-500">General Chair</p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Senior Member IEEE, Associate Professor, Department of Electrical Engineering, NIT Jamshedpur
            </p>
            <a href={`mailto:${SITE.emails.namrata}`} className="mt-4 text-sm font-semibold text-navy-700 hover:underline">
              {SITE.emails.namrata}
            </a>
          </div>

          <div className="space-y-5 text-justify leading-relaxed text-slate-600">
            <p>Dear Esteemed Colleagues,</p>
            <p>
              It is with great pleasure that I welcome you, on behalf of the Organizing Committee, to the IEEE
              sponsored international event, 1st Conference on WIE-RISE: Revolutionizing Innovation in Smart
              Engineering, which will be held from <strong>April 01–03, 2027</strong> at the Department of
              Electrical Engineering, National Institute of Technology (NIT) Jamshedpur, India.
            </p>
            <p>
              As an IEEE-sponsored event, WIE-RISE provides an exceptional opportunity for academics,
              researchers, industry professionals, and students to gather, exchange knowledge, and explore the
              latest advancements in the fields of electrical engineering, electronics, computer science, and
              power technologies. This inaugural conference will focus on sustainable technologies, innovative
              solutions, and cutting-edge advancements in energy, communication, and control systems, addressing
              both current challenges and future trends in the global energy and technology landscape.
            </p>
            <p>
              The technical program will include keynote addresses, paper presentations, tutorials, and panel
              discussions that will foster insightful exchanges and collaborations. We are confident that
              WIE-RISE will provide a rich and engaging environment for building new connections and promoting
              impactful research across diverse disciplines.
            </p>
            <p>
              I invite you to actively participate in this landmark conference and contribute your expertise to
              shaping the future of our industries. We look forward to welcoming you to NIT Jamshedpur in April
              2027 for an event that promises to be both intellectually stimulating and professionally
              rewarding.
            </p>
            <p className="font-semibold text-navy-950">Thank you.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
