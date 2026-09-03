import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { TRACKS } from "../data/dates";

export default function CallForPapers() {
  return (
    <div>
      <PageHeader eyebrow="For Authors" title="Call for Papers" />
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 text-justify leading-relaxed text-slate-600 lg:col-span-3">
            <SectionHeading
              eyebrow="Overview"
              title="Publish Your Research at WIERISE 2027"
            />
            <p>
              The conference provides a platform for authors to get recognition
              for their research findings and innovations. The scope of the
              conference is multidisciplinary and focuses on the emerging areas
              in the field of Power System, Advancement in Power Electronics &
              Drives, Control & Instrumentation for Smart Energy Systems, and
              others.
            </p>
            <p>
              Original, unpublished manuscripts are invited. The papers accepted
              for oral presentation and subsequently presented by the duly
              registered authors in WIERISE-2027 shall be submitted to IEEE
              Xplore for publication. Only full papers (less than or equal to 6
              pages — in the IEEE conference paper template) will be considered;
              abstracts/extended abstracts and short papers will not be
              considered for publication. The plagiarism policy** of IEEE is to
              be followed by prospective authors.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-7 text-white shadow-lg">
              <div>
                <h3 className="font-display text-xl tracking-wide">
                  Submit Your Paper
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
                  Prospective authors are invited to submit original and
                  unpublished papers through the Microsoft CMT portal.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-200/90">
                  {[
                    "Full papers only — up to 6 pages",
                    "IEEE conference paper template",
                    "Accepted & presented papers go to IEEE Xplore",
                    "IEEE plagiarism policy applies",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7">
                <a
                  href="https://cmt3.research.microsoft.com/WIERISE2027"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
                >
                  Submit via Microsoft CMT
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
                      d="M13 5l7 7-7 7M5 12h15"
                    />
                  </svg>
                </a>
                <p className="mt-3 break-all text-center text-xs text-slate-400">
                  cmt3.research.microsoft.com/WIERISE2027
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Guidelines" title="Paper Submission" />
        </div>
        <ul className="mt-6 space-y-3 text-slate-600">
          {[
            "All submissions must be written in English, and must be original, unpublished work.",
            "All papers must be submitted electronically in PDF format by the deadline.",
            "Maximum length is 6 pages, including all text, tables, figures, and references.",
            <>
              The conference proceedings will be submitted to the{" "}
              <a
                href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-navy-700 hover:underline"
              >
                IEEE Xplore Digital Library
              </a>
              .
            </>,
            "Standard manuscript templates for conference proceedings in LaTex and Word are present at Standard IEEE Templates.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <SectionHeading eyebrow="Scope" title="Tracks & Topics of Interest" />
          <p className="mt-4 max-w-3xl text-slate-600">
            The conference invites high-quality research contributions in all
            areas of Electrical, Electronics, and Computer Science, including
            but not limited to the following tracks:
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {TRACKS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  {t.id}
                </span>
                <h3 className="mt-1 font-display text-lg tracking-wide text-navy-950">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
          <h3 className="font-display text-xl tracking-wide">
            Special Sessions
          </h3>
          <p className="mt-3 max-w-2xl text-slate-200/90">
            The conference will include special sessions on highly specialized
            topic areas, reporting technical trends and breakthroughs within the
            scope of the conference. Special Sessions are organized at the
            initiative of one or more individuals, who must adhere to the
            published guidelines.
          </p>
          <Link
            to="/special-sessions"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
          >
            Call for Special Sessions →
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          See the{" "}
          <Link
            to="/important-dates"
            className="font-semibold text-navy-700 hover:underline"
          >
            Important Dates
          </Link>{" "}
          page for the full submission timeline, and{" "}
          <Link
            to="/manuscript-submission"
            className="font-semibold text-navy-700 hover:underline"
          >
            Paper Submission Guidelines
          </Link>{" "}
          for camera-ready instructions.
        </p>

        <p className="mt-6 text-sm text-slate-500">
          **IEEE follows stringent policies for plagiarism. Papers having
          similarities beyond a specified limit of 20% will be straightaway
          rejected and therefore, it should be below 20% for camera-ready
          papers. The authors also need to obtain permission from the copyright
          holder for third-party content use, if any.
        </p>
      </Container>
    </div>
  );
}
