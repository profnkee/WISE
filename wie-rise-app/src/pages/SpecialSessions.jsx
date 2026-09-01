import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { SPECIAL_SESSION_TOPICS } from "../data/dates";

const WHY_PROPOSE = [
  {
    title: "Showcase Innovation",
    description:
      "Highlight novel technologies and disruptive research directions.",
  },
  {
    title: "Grow Communities",
    description:
      "Connect organizers, authors, and reviewers around a shared focus.",
  },
  {
    title: "Keep Reviews Rigorous",
    description:
      "All session submissions go through the standard WIE-RISE review process.",
  },
];

const PROPOSAL_CHECKLIST = [
  { label: "Session title", detail: "a memorable and descriptive name." },
  {
    label: "Session overview",
    detail: "~100 words explaining the topic and its relevance.",
  },
  {
    label: "Organizers",
    detail: "2–4 names with contact details and institutions.",
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
  "At least one organizer should register and attend onsite.",
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
              title="Lead a High-Impact Session at WIE-RISE 2027"
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
          <div className="grid gap-4">
            {WHY_PROPOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <h4 className="font-semibold text-navy-950">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
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
          <div className="space-y-5 text-justify leading-relaxed text-slate-600">
            <SectionHeading eyebrow="About" title="About Special Sessions" />
            <p>
              Special Sessions broaden attendees' expertise by offering
              intensive technical programs for emerging fields. They are ideal
              for launching new collaborations, attracting contributors, and
              accelerating innovation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-navy-950">Community</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Build new networks of researchers and practitioners.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-navy-950">Visibility</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Give emerging topics a prominent platform.
                </p>
              </div>
            </div>
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
              Will be provided soon.
            </p>
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
                  href="mailto:wierise@gmail.com"
                  className="font-semibold text-sky-400 hover:underline"
                >
                  wierise@gmail.com
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
