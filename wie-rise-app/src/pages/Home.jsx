import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Countdown from "../components/Countdown";
import { SITE } from "../data/site";
import { TRACKS, IMPORTANT_DATES } from "../data/dates";

const COLORS = [
  { grad: "from-blue-500 to-blue-600", soft: "bg-blue-50 text-blue-600", text: "text-blue-600", text400: "text-blue-400" },
  { grad: "from-violet-500 to-purple-600", soft: "bg-violet-50 text-violet-600", text: "text-violet-600", text400: "text-violet-400" },
  { grad: "from-amber-400 to-orange-500", soft: "bg-amber-50 text-amber-600", text: "text-amber-600", text400: "text-amber-400" },
  { grad: "from-emerald-400 to-teal-500", soft: "bg-emerald-50 text-emerald-600", text: "text-emerald-600", text400: "text-emerald-400" },
];

const QUICK_FACTS = [
  {
    label: "Conference Dates",
    value: "April 01–03, 2027",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
      />
    ),
  },
  {
    label: "Mode",
    value: "Hybrid — Virtual & Physical",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      />
    ),
  },
  {
    label: "Venue",
    value: "NIT Jamshedpur, Jharkhand",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
  {
    label: "Publication",
    value: "IEEE Xplore*",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    ),
  },
];

const HIGHLIGHTS = [
  {
    title: "IEEE Xplore Publication",
    description:
      "Accepted and presented papers will be submitted for possible inclusion in the IEEE Xplore Digital Library.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Distinguished Keynotes",
    description:
      "Hear from renowned researchers and industry leaders shaping the future of smart engineering.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Special Sessions & Networking",
    description:
      "Focused sessions on emerging themes, plus rich opportunities to connect with peers across academia and industry.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    title: "Awards & Recognition",
    description:
      "Best Paper, Young Researcher, and other awards recognize outstanding contributions at the conference.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35"
      />
    ),
  },
];

export default function Home() {
  const [videoFailed, setVideoFailed] = useState(false);
  const upcomingDates = IMPORTANT_DATES.slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-24 text-white">
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dzcwojp3z/video/upload/v1757583769/campusTour_1_xsdxap.mp4"
              type="video/mp4"
            />
          </video>
        )}
        {videoFailed && (
          <img
            src="/assets/nit-jamshedpur-placement (1).jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Keep text legible on the left without dimming the image itself */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-navy-950/10 sm:from-navy-950/95 sm:via-navy-950/55 sm:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <Container className="relative py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {SITE.organizer}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight tracking-wide sm:text-5xl lg:text-6xl">
            1st IEEE Conference on WIE-RISE
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-200/90 sm:text-xl">
            Revolutionizing Innovation in Smart Engineering
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-200">
            <svg
              className="h-5 w-5 text-sky-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
            <span className="font-semibold">{SITE.dates}</span>
            <span className="text-slate-400">•</span>
            <span>{SITE.venueShort}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1sWoSwEt99-8xsERCcYE8qfuTBydfLseY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              Download Schedule
              {/* <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
              </svg> */}
            </a>
            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Submit a Paper
            </Link>
          </div>
          <div className="mt-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Countdown to the Conference
            </p>
            <div className="flex justify-center">
              <Countdown target={SITE.targetDate} />
            </div>
          </div>
        </Container>
      </section>

      {/* Quick facts strip — overlaps hero/next section boundary */}
      <div className="relative z-10 -mt-10 px-4 sm:-mt-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-y divide-slate-100 rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {QUICK_FACTS.map((fact, i) => (
            <div key={fact.label} className="flex items-center gap-3 px-5 py-5">
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${COLORS[i % COLORS.length].soft}`}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {fact.icon}
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-navy-950">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-14 overflow-hidden border-y border-navy-900/10 bg-navy-900 py-2.5 text-sm text-slate-100">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">
              WIE-RISE will be organized at NIT Jamshedpur, Jharkhand, India,
              during April 01–03, 2027.
              <Link
                to="/call-for-papers"
                className="font-semibold text-sky-400 hover:underline"
              >
                Call for Papers →
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Introduction"
            title="About WIE-RISE 2027"
            center
          />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/assets/IMGIce2cpt.jpg"
              alt="Conference"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <p className="text-justify leading-relaxed text-slate-600">
              The 1st IEEE Conference on WIE-RISE: Revolutionizing Innovation in
              Smart Engineering will be organized by the Department of
              Electrical Engineering, National Institute of Technology (NIT)
              Jamshedpur, from 01st to 03rd April 2027 in hybrid mode. This
              premier event is being held in association with IEEE, IEEE Kolkata
              Section, and the IEEE Student Branch, NIT Jamshedpur. As a
              flagship international conference of the IEEE Kolkata Section,
              WIE-RISE 2027 is poised to serve as a global platform for
              researchers, academicians, and industry professionals to exchange
              cutting-edge developments in electrical engineering, electronics,
              computer science, biotechnology, biomedical engineering and
              advanced power technologies.
              <br />
              <br />
              WIE-RISE 2027 aims to foster interdisciplinary collaboration by
              highlighting emerging trends and innovations in areas such as
              smart grids, AI and IoT applications, signal processing, advanced
              control systems, and sustainable energy technologies. The
              conference will facilitate knowledge sharing and thought
              leadership across academia and industry, addressing critical
              challenges and opportunities in green industrial electronics and
              digital transformation.
            </p>
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <p className="order-2 text-justify leading-relaxed text-slate-600 lg:order-1">
              The National Institute of Technology Jamshedpur (NIT Jamshedpur)
              is an Institute of National Importance located at Jamshedpur,
              Jharkhand, India. Established as a Regional Institute of
              Technology in 1960, it was upgraded to NIT on 27 December 2002
              with the status of Deemed University. It is one of the 31 NITs in
              India, directly under the Ministry of Human Resource Development
              (MHRD), and the third in the chain of eight NITs established under
              the Second Five Year Plan (1956–61) by the Government of India.
              The Institute has twelve departments spanning engineering, science
              and humanities, offering 4-year B.Tech, Master's and Ph.D degrees
              across various streams.
            </p>
            <img
              src="/assets/nit-jamshedpur-placement (1).jpg"
              alt="NIT Jamshedpur"
              className="order-1 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg lg:order-2"
            />
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/assets/EED1.jpg"
              alt="Electrical Engineering Department"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <p className="text-justify leading-relaxed text-slate-600">
              The Department of Electrical Engineering was established in 1960
              and has consistently produced quality engineers since its
              inception, remaining actively involved in research and
              development. In addition to its UG programme, the department runs
              PG programmes in Power Systems and Power Electronics & Drives, and
              a Ph.D. programme across various specializations — imparting
              quality education and building state-of-the-art research
              facilities that contribute to sustainable socio-economic
              development.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Attend */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Attend"
            title="What Makes WIE-RISE 2027"
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br text-white ${COLORS[i % COLORS.length].grad}`}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {h.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg tracking-wide text-navy-950">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            *Subject to compliance with IEEE quality standards and presentation
            at the conference.
          </p>
        </Container>
      </section>

      {/* Tracks */}
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Scope" title="Explore the Tracks" />
            <Link
              to="/call-for-papers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:underline"
            >
              Full Call for Papers →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {TRACKS.map((t, i) => (
              <div
                key={t.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 p-6 pt-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${COLORS[i % COLORS.length].grad}`}
                />
                <span
                  className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${COLORS[i % COLORS.length].soft}`}
                >
                  {t.id}
                </span>
                <h3 className="mt-3 font-display text-lg tracking-wide text-navy-950">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Dates teaser */}
      <section className="bg-navy-950 py-20 text-white">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Timeline" title="Key Dates" />
            <Link
              to="/important-dates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:underline"
            >
              View All Dates →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-5">
            {upcomingDates.map((d, i) => (
              <div
                key={d.milestone}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span
                  className={`font-display text-2xl ${COLORS[i % COLORS.length].text400}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm font-semibold text-white">
                  {d.milestone}
                </p>
                <p className="mt-1 text-xs text-slate-300">{d.date}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sponsors */}
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-violet-50 py-20">
        <Container>
          <SectionHeading eyebrow="Support" title="Organised By" center />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
            <img
              src="/assets/NITB&WLogo.png"
              alt="NIT Jamshedpur"
              className="h-16 object-contain"
            />
            <img
              src="/assets/nitlogosc.png"
              alt="Organizer"
              className="h-16 object-contain"
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-blue-800 py-20 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <Container className="relative text-center">
          <h2 className="font-display text-2xl tracking-wide sm:text-3xl">
            Ready to be part of WIE-RISE 2027?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200/90">
            Submit your research, join the conversation, and connect with the
            smart engineering community at NIT Jamshedpur this April.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/call-for-papers"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-slate-100"
            >
              Submit Your Paper
            </Link>
            <Link
              to="/registration"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
