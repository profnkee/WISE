import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { SITE } from '../data/site'

const CHAIRS = [
  {
    name: 'Dr. Kumari Namrata',
    photo: '/images/namrata.jpeg',
    details: 'Senior Member IEEE, Associate Professor, Department of Electrical Engineering, NIT Jamshedpur',
    email: SITE.emails.namrata,
    message: (
      <>
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
      </>
    ),
  },
  {
    name: 'Prof. P. Sanjeevikumar',
    photo: '/images/sanj.png',
    details: 'University of South-Eastern Norway',
    message: (
      <>
        <p>Dear Colleagues and Friends,</p>
        <p>
          On behalf of the Organizing Committee, it is my privilege to extend a warm invitation to the 1st
          IEEE Conference on WIE-RISE: Revolutionizing Innovation in Smart Engineering, to be hosted by the
          National Institute of Technology (NIT) Jamshedpur, India, from <strong>April 01–03, 2027</strong>.
        </p>
        <p>
          WIE-RISE brings together a global community of researchers, educators, industry practitioners, and
          students who share a common commitment to advancing engineering for the benefit of society. The
          conference offers a forum to present original research, discuss emerging ideas, and examine how
          developments in power and energy systems, electronics, communication, control, and computing can
          support a smarter and more sustainable future.
        </p>
        <p>
          Through keynote lectures by distinguished experts, technical paper sessions, tutorials, and panel
          discussions, the program is designed to encourage meaningful dialogue between academia and
          industry. I am confident that these exchanges will open doors to new international partnerships and
          inspire collaborative research across disciplines and borders.
        </p>
        <p>
          I warmly encourage you to submit your work, take part in the sessions, and share your insights with
          fellow participants. It will be a pleasure to meet you at NIT Jamshedpur in April 2027 for what
          promises to be a rewarding and memorable conference.
        </p>
        <p className="font-semibold text-navy-950">With best regards.</p>
      </>
    ),
  },
]

export default function GeneralChair() {
  return (
    <div>
      <PageHeader eyebrow="Leadership" title="General Chairs' Message" />
      <Container className="space-y-16 py-16">
        {CHAIRS.map((chair) => (
          <div key={chair.name} className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm lg:sticky lg:top-28 lg:self-start">
              <img
                src={chair.photo}
                alt={chair.name}
                className="h-36 w-36 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 font-display text-lg tracking-wide text-navy-950">{chair.name}</h3>
              <p className="mt-1 text-sm text-slate-500">General Chair</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{chair.details}</p>
              {chair.email && (
                <a href={`mailto:${chair.email}`} className="mt-4 text-sm font-semibold text-navy-700 hover:underline">
                  {chair.email}
                </a>
              )}
            </div>

            <div className="space-y-5 text-justify leading-relaxed text-slate-600">{chair.message}</div>
          </div>
        ))}
      </Container>
    </div>
  )
}
