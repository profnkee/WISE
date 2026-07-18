import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { SPECIAL_SESSION_TOPICS } from '../data/dates'
import { SITE } from '../data/site'

export default function SpecialSessions() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Call for Special Sessions" />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-display text-lg tracking-wide text-navy-950">Guidelines</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Detailed information on the submission process, session scope, formatting instructions, and
              important deadlines is available in the Special Session guidelines document.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-navy-950 p-6 text-white shadow-sm">
            <h3 className="font-display text-lg tracking-wide">Submit Your Proposal</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
              Submit your Special Session proposal in PDF format via email. Ensure all required sections are
              included.
            </p>
            <a href={`mailto:${SITE.emails.namrata}`} className="mt-4 inline-block text-sm font-semibold text-sky-400 hover:underline">
              {SITE.emails.namrata}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-justify leading-relaxed text-slate-600">
            <SectionHeading eyebrow="Overview" title="Special Sessions" />
            <p>
              Special sessions provide the opportunity to focus in detail on emerging topics not reflected in
              the conference's main technical tracks, or on a specific working field where researchers would
              like to meet and discuss advances. These sessions broaden the knowledge base of attendees,
              helping them stay updated with Electrical, Electronics and Computer Science advances.
            </p>
            <p>
              The WIE-RISE organizing committee invites professionals in these domains to propose Special
              Sessions (SS) to be held at WIE-RISE 2027. Once approved, organizers publicize the session among
              researchers and practitioners to attract sufficient submissions. Papers submitted to special
              sessions undergo the same review process as regular papers, with the session organizers
              responsible for assuring at least three reviews per paper.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-navy-950">Free Conference Registration</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                One complimentary full registration is provided to successful Special Sessions with at least 6
                papers not authored by any of the organizers, who are also expected to chair the session.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy-950">Conflict of Interest</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                SS organizers must explicitly declare papers presenting a conflict of interest before the
                review process begins, and notify the SS Co-Chairs so an independent review can be arranged.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy-950">Restrictions</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                An individual cannot co-author more than two papers in the same Special Session, and papers
                from organizers cannot exceed 60% of the session's content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-navy-950">Proposal Content</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Proposals must name 2–3 organizers from multiple institutions (preferably different countries),
                a short background of each, potential contributing authors, and at least 20 potential reviewers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Suggested Themes" title="Special Session Topics" />
          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            The following are example/suggested Special Session themes aligned with the conference scope —
            organizers are welcome to propose sessions on these or related emerging topics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SPECIAL_SESSION_TOPICS.map((topic, i) => (
              <div key={topic} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
                <span className="shrink-0 font-display text-navy-300">{String(i + 1).padStart(2, '0')}</span>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
