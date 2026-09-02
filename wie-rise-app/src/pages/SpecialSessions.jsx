import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { SPECIAL_SESSION_TOPICS } from "../data/dates";

const PROPOSAL_CHECKLIST = [
  { label: "Session title", detail: "a memorable and descriptive name." },
  {
    label: "Session overview",
    detail: "~200 words explaining the topic and its relevance.",
  },
  {
    label: "Organizers",
    detail:
      "2–4 names with contact details and institutions (1 Female Session Chair is desirable to promote WIE).",
  },
  { label: "Potential authors", detail: "list contributors and affiliations." },
  {
    label: "Potential reviewers",
    detail: "suggest at least 20 experts with affiliations.",
  },
];

const KEY_GUIDELINES = [
  "Lead organizer must hold a Ph.D.",
  "Organizers should represent at least two institutions.",
  "Organizers may not author more than 60% of the session content.",
  "No person may be author/co-author on more than two papers in the same session.",
  "Each successful Session Organizer will be entitled to one complimentary paper presentation registration for the conference.",
];

export default function SpecialSessions() {
  return (
    <div>
      <PageHeader
        eyebrow="For Authors"
        title="Call for Special Sessions"
        subtitle="Special sessions are designed to showcase cutting-edge themes that may not be fully covered in the regular technical tracks."
      />
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-justify leading-relaxed text-slate-600">
            <SectionHeading
              eyebrow="Special Sessions"
              title="Lead a High-Impact Session at WIERISE 2027"
            />
            <p>
              Create a focused forum for cutting-edge research and breakthrough
              applications in Electrical, Electronics and Computer Science.
              Build community, attract experts, and advance important new ideas.
            </p>
            <p>
              Special sessions highlight emerging areas that may not fit the
              main tracks, while offering a platform for targeted discussions
              and rapid knowledge exchange.
            </p>
          </div>
          <div className="space-y-5 text-justify leading-relaxed text-slate-600">
            <SectionHeading
              eyebrow="Overview"
              title="What is a Special Session?"
            />
            <p>
              Special sessions are designed to highlight high-focus programs in
              emerging or highly specialized areas. They extend the conference
              by offering a dedicated space for deeper technical exchange and
              cutting-edge discussion.
            </p>
            <ul className="space-y-2 text-left text-sm text-slate-700">
              {[
                "Target new topics and communities",
                "Support focused research and collaboration",
                "Accelerate knowledge dissemination in Electrical, Electronics and Computer Science",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Requirements" title="Proposal Checklist" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Prepare your proposal with clear, concise details for each section
              below.
            </p>
            <ul className="mt-6 space-y-3">
              {PROPOSAL_CHECKLIST.map((item, i) => (
                <li
                  key={item.label}
                  className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700"
                >
                  <span className="shrink-0 font-display text-navy-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-semibold text-navy-950">
                      {item.label}
                    </span>{" "}
                    — {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Policies"
              title="Organization & Policies"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Organizers are responsible for promoting the session, coordinating
              review assignments, and ensuring a fair review process.
            </p>
            <h4 className="mt-6 font-semibold text-navy-950">Key Guidelines</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {KEY_GUIDELINES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="font-semibold text-navy-950">
                Conflict of Interest
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Conflicts of interest must be declared before the review process
                begins. Any conflicted papers are handled independently by the
                Special Session chairs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-display text-lg tracking-wide text-navy-950">
              Special Session Template
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Download the official template and prepare your proposal
              accordingly.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              A Special Session will be considered successful if it receives at
              least 10 paper submissions, of which a minimum of 6 papers are
              accepted.
            </p>
            <a
              href="/assets/Special%20Session%20Template.docx"
              download="Special Session Template.docx"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download Template
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-navy-950 p-6 text-white shadow-sm">
            <h3 className="font-display text-lg tracking-wide">
              Submit Your Proposal
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
              Submit your Special Session proposal in PDF format via email.
              Ensure all required sections are included. <br />
              <br />
              For any queries, please contact :
            </p>
            <div className="mt-4 text-sm">
              <p className="font-semibold">Dr. Nishant Kumar</p>
              <p className="mt-1 text-slate-200/90">
                Email:{" "}
                <a
                  href="mailto:wierise@nitjsr.ac.in"
                  className="font-semibold text-sky-400 hover:underline"
                >
                  wierise@nitjsr.ac.in
                </a>{" "}
                |{" "}
                <a
                  href="mailto:krnishant125@gmail.com"
                  className="font-semibold text-sky-400 hover:underline"
                >
                  krnishant125@gmail.com
                </a>
              </p>
              <p className="mt-1 text-slate-200/90">
                Contact:{" "}
                <a
                  href="tel:+919862882395"
                  className="font-semibold text-sky-400 hover:underline"
                >
                  +91-9862882395
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Suggested Themes"
            title="Special Session Topics"
          />
          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            The following are example/suggested Special Session themes aligned
            with the conference scope — organizers are welcome to propose
            sessions on these or related emerging topics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {SPECIAL_SESSION_TOPICS.map((topic, i) => (
              <div
                key={topic}
                className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700"
              >
                <span className="shrink-0 font-display text-navy-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
