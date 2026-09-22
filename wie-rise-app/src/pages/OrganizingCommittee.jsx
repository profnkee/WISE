import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { ORGANIZING_COMMITTEE } from "../data/organizingCommittee";

const TABS = [
  {
    label: "Patrons & Chairs",
    roles: [
      "Chief Patron",
      "Patron(s)",
      "Co-Patron(s)",
      "Honorary General Chair(s)",
      "Honorary General Co-Chair(s)",
      "General Chair(s)",
      "Chairperson",
      "Organising Chair(s)",
      "Organising Secretaries",
      "Special Session Chair",
    ],
  },
  { label: "Internal Advisory Committee", roles: ["Internal Advisory Committee"] },
  { label: "WIE", roles: ["WIE Chairs", "WIE Committee"] },
  { label: "Steering Committee", roles: ["Steering Committee"] },
  { label: "Student Coordinators", roles: ["Student Coordinators"] },
];

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
  const [activeTab, setActiveTab] = useState(0);
  const groups = TABS[activeTab].roles
    .map((role) => ORGANIZING_COMMITTEE.find((g) => g.role === role))
    .filter(Boolean);

  function handleKeyDown(e) {
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!delta) return;
    const next = (activeTab + delta + TABS.length) % TABS.length;
    setActiveTab(next);
    document.getElementById(`committee-tab-${next}`)?.focus();
  }

  return (
    <div>
      <PageHeader
        eyebrow="Committee"
        title="Organizing Committee"
        subtitle="The patrons, chairs, and committee members organizing WIE-RISE 2027."
      />
      <Container className="py-16">
        <div
          role="tablist"
          aria-label="Committee sections"
          onKeyDown={handleKeyDown}
          className="flex overflow-x-auto border-b-2 border-slate-200"
        >
          {TABS.map((tab, i) => {
            const selected = i === activeTab;
            return (
              <button
                key={tab.label}
                id={`committee-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="committee-tabpanel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(i)}
                className={`relative -mb-0.5 shrink-0 whitespace-nowrap px-6 py-3 text-base transition sm:px-8 ${
                  selected
                    ? "bg-white font-medium text-navy-950"
                    : "text-slate-500 hover:text-navy-950"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-1 rounded-t-md transition ${
                    selected ? "bg-navy-950" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div
          id="committee-tabpanel"
          role="tabpanel"
          aria-labelledby={`committee-tab-${activeTab}`}
          className="mt-12 space-y-16"
        >
          {groups.map((group) => (
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
