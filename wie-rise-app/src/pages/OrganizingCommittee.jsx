import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { ORGANIZING_COMMITTEE } from '../data/organizingCommittee'

export default function OrganizingCommittee() {
  return (
    <div>
      <PageHeader
        eyebrow="Committee"
        title="Organizing Committee"
        subtitle="The patrons, chairs, and committee members organizing WIE-RISE 2027."
      />
      <Container className="py-16">
        <div className="space-y-14">
          {ORGANIZING_COMMITTEE.map((group) => (
            <div key={group.role}>
              <SectionHeading title={group.role} />
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member) => (
                  <div key={member.name} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                    <p className="font-semibold text-navy-950">{member.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{member.affiliation}</p>
                    {member.emails && (
                      <p className="mt-2 text-sm text-slate-600">
                        {member.emails.map((email, i) => (
                          <span key={email}>
                            {i > 0 && ' | '}
                            <a href={`mailto:${email}`} className="font-medium text-navy-700 hover:underline">
                              {email}
                            </a>
                          </span>
                        ))}
                      </p>
                    )}
                    {member.phone && (
                      <p className="mt-1 text-sm text-slate-600">
                        <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
