import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { ORGANIZING_COMMITTEE } from "../data/organizingCommittee";

function initials(name) {
  return name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.|Sr\. Prof\. Emeritus)\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function MemberCard({ member }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      {member.photo ? (
        <img
          src={encodeURI(member.photo)}
          alt={member.name}
          loading="lazy"
          className="h-28 w-28 shrink-0 rounded-lg bg-slate-100 object-cover object-top"
        />
      ) : (
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-900 to-navy-700">
          <span className="font-display text-3xl tracking-wider text-sky-300">
            {initials(member.name)}
          </span>
        </div>
      )}
      <div className="min-w-0">
        <p className="font-display text-base leading-snug tracking-wide text-navy-950">
          {member.name}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {member.affiliation}
        </p>
        {member.emails && (
          <p className="mt-2 text-sm text-slate-600">
            {member.emails.map((email, i) => (
              <span key={email}>
                {i > 0 && " | "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-navy-700 hover:underline"
                >
                  {email}
                </a>
              </span>
            ))}
          </p>
        )}
        {member.phone && (
          <p className="mt-1 text-sm text-slate-600">
            <a href={`tel:${member.phone}`} className="hover:underline">
              {member.phone}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default function OrganizingCommittee() {
  return (
    <div>
      <PageHeader
        eyebrow="Committee"
        title="Organizing Committee"
        subtitle="The patrons, chairs, and committee members organizing WIE-RISE 2027."
      />
      <Container className="py-16">
        <div className="space-y-16">
          {ORGANIZING_COMMITTEE.map((group) => (
            <section key={group.role}>
              <SectionHeading title={group.role} />
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.members.map((member) => (
                  <MemberCard
                    key={`${group.role}-${member.name}`}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
