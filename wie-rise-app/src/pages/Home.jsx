import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Ticker from "../components/Ticker";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Countdown from "../components/Countdown";
import { SITE } from "../data/site";
import { TRACKS, IMPORTANT_DATES } from "../data/dates";

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

const ABOUT_ITEMS = [
  {
    label: "WIE-RISE 2027",
    image: "/assets/IMGIce2cpt.jpg",
    alt: "Conference",
    text: (
      <>
        The 1st IEEE Conference on WIE-RISE: Revolutionizing Innovation in Smart
        Engineering will be organized by the Department of Electrical
        Engineering, National Institute of Technology (NIT) Jamshedpur, from
        01st to 03rd April 2027 in hybrid mode. This premier event is being held
        in association with IEEE, IEEE Kolkata Section, and the IEEE Student
        Branch, NIT Jamshedpur. As a flagship international conference of the
        IEEE Kolkata Section, WIE-RISE 2027 is poised to serve as a global
        platform for researchers, academicians, and industry professionals to
        exchange cutting-edge developments in electrical engineering,
        electronics, computer science, biotechnology, biomedical engineering and
        advanced power technologies.
        <br />
        <br />
        WIE-RISE 2027 aims to foster interdisciplinary collaboration by
        highlighting emerging trends and innovations in areas such as smart
        grids, AI and IoT applications, signal processing, advanced control
        systems, and sustainable energy technologies. The conference will
        facilitate knowledge sharing and thought leadership across academia and
        industry, addressing critical challenges and opportunities in green
        industrial electronics and digital transformation.
      </>
    ),
  },
  // {
  //   label: "NIT Jamshedpur",
  //   image: "/assets/nit-jamshedpur-placement (1).jpg",
  //   alt: "NIT Jamshedpur",
  //   text: (
  //     <>
  //       The National Institute of Technology Jamshedpur (NIT Jamshedpur) is an
  //       Institute of National Importance located at Jamshedpur, Jharkhand,
  //       India. Established as a Regional Institute of Technology in 1960, it
  //       was upgraded to NIT on 27 December 2002 with the status of Deemed
  //       University. It is one of the 31 NITs in India, directly under the
  //       Ministry of Human Resource Development (MHRD), and the third in the
  //       chain of eight NITs established under the Second Five Year Plan
  //       (1956–61) by the Government of India. The Institute has twelve
  //       departments spanning engineering, science and humanities, offering
  //       4-year B.Tech, Master's and Ph.D degrees across various streams.
  //     </>
  //   ),
  // },
  // {
  //   label: "Electrical Engineering",
  //   image: "/assets/EED1.jpg",
  //   alt: "Electrical Engineering Department",
  //   text: (
  //     <>
  //       The Department of Electrical Engineering was established in 1960 and
  //       has consistently produced quality engineers since its inception,
  //       remaining actively involved in research and development. In addition
  //       to its UG programme, the department runs PG programmes in Power
  //       Systems and Power Electronics & Drives, and a Ph.D. programme across
  //       various specializations — imparting quality education and building
  //       state-of-the-art research facilities that contribute to sustainable
  //       socio-economic development.
  //     </>
  //   ),
  // },
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

const QUICK_LINKS = [
  { label: "Call for Papers", to: "/call-for-papers" },
  { label: "Important Dates", to: "/important-dates" },
  { label: "Registration", to: "/registration" },
  { label: "Paper Submission Guidelines", to: "/manuscript-submission" },
  { label: "Organizing Committee", to: "/organizing-committee" },
  { label: "Speakers", to: "/speakers" },
  { label: "Venue", to: "/venue" },
];

const WEBSITES = [
  {
    label: "NIT Jamshedpur Website",
    href: "https://www.nitjsr.ac.in",
    logo: "/assets/NITJSRNEWLOG.png",
    alt: "NIT Jamshedpur",
  },
  {
    label: "IEEE Kolkata Section Website",
    href: "https://ewh.ieee.org/r10/calcutta/",
    logo: "/assets/IEEEKSpng.png",
    alt: "IEEE Kolkata Section",
  },
];

function SideBox({ title, children }) {
  return (
    <div className="rounded border border-slate-300 bg-[#f5f5f5] px-3 py-4">
      <h3 className="text-center text-[22px] font-bold text-navy-800">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function Home() {
  const announcements = IMPORTANT_DATES.slice(1, 3);

  return (
    <div>
      <Banner tall />

      {/* Countdown band — styled like DELCON's keynote speaker band */}
      <section className="relative overflow-hidden text-white">
        <img
          src="/assets/NIT-NIGHT.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/55" />

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 px-6 py-16 lg:grid-cols-[340px_1fr] lg:gap-20 lg:px-20">
          <div className="mx-auto w-full max-w-[340px] border-[10px] border-[#f5b82e] bg-white p-6">
            <img
              src="/assets/nitlogosc.png"
              alt="WIE-RISE"
              className="mx-auto w-full"
            />
          </div>

          <div>
            <span className="inline-block rounded-full bg-[#f5b82e] px-7 py-1.5 font-display text-sm font-medium uppercase tracking-wide text-navy-950">
              Countdown to the Conference
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[58px]">
              {SITE.shortName}
            </h2>
            <p className="mt-1 font-display text-lg text-[#f5c242] sm:text-2xl">
              Revolutionizing Innovation in Smart Engineering
            </p>
            <div className="mt-4 h-[3px] w-24 bg-[#f5b82e]" />

            <div className="mt-6">
              <Countdown target={SITE.targetDate} />
            </div>

            <div className="mt-8 border-t border-white/70 pt-5">
              <p className="font-display text-xl font-medium sm:text-2xl">
                1st IEEE Conference on {SITE.shortName}
              </p>
              <p className="mt-1 font-display text-white/85">
                {SITE.departments}
              </p>
              <p className="mt-3 font-display font-medium text-[#f5c242]">
                {SITE.dates}&nbsp; | &nbsp;{SITE.venueShort}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-cta px-5 py-2.5 text-sm text-white transition hover:brightness-110"
              >
                Download Schedule
              </a>
              <Link
                to="/call-for-papers"
                className="rounded border border-white/70 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-navy-950"
              >
                Submit a Paper
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-page pt-12">
        <Ticker />

        {/* Announcement box */}
        <div className="mx-auto mt-3 max-w-[1200px] px-4">
          <div className="rounded-lg border border-slate-300 bg-white px-6 py-6 text-center shadow-sm">
            {announcements.map((d) => (
              <p
                key={d.milestone}
                className="text-lg font-bold text-navy-900 sm:text-[22px] sm:leading-9"
              >
                {d.milestone} :&nbsp; {d.date}
              </p>
            ))}
          </div>
        </div>

        {/* About + sidebar */}
        <section className="mx-auto max-w-[1220px] px-4 pt-8 pb-12">
          <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="text-center">
                <h2 className="title-pill text-lg sm:text-[22px]">
                  About {SITE.shortName}
                </h2>
              </div>
              {ABOUT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="mt-5 rounded-lg border border-slate-300 bg-white px-5 py-6 sm:px-6"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="mb-5 aspect-[21/9] w-full rounded object-cover"
                  />
                  <p className="text-[15px] leading-relaxed text-slate-700 sm:text-justify">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <aside className="space-y-4 lg:mt-[72px] lg:max-w-[300px]">
              <SideBox title="Quick Links">
                <ul className="space-y-2">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-link hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SideBox>

              <SideBox title="At a Glance">
                <ul className="space-y-3">
                  {QUICK_FACTS.map((fact) => (
                    <li key={fact.label} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-navy-800"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        {fact.icon}
                      </svg>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          {fact.label}
                        </p>
                        <p className="text-sm font-bold text-navy-800">
                          {fact.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SideBox>

              <SideBox title="In Association With">
                <div className="bg-white p-4">
                  <img
                    src="/assets/IEEEKSpng.png"
                    alt="IEEE Kolkata Section"
                    className="mx-auto h-20 w-auto"
                  />
                </div>
              </SideBox>
            </aside>
          </div>

          <div className="mx-auto mt-6 flex max-w-[400px] items-stretch bg-white shadow-sm lg:mx-0 lg:ml-[calc((66.66%-400px)/2)]">
            <div className="flex w-28 shrink-0 flex-col justify-center bg-[#e87722] px-3 py-3 text-white">
              <span className="text-xl font-bold leading-none">IEEE</span>
              <span className="text-xl italic leading-tight">Xplore®</span>
              <span className="text-[10px] italic">Digital Library</span>
            </div>
            <p className="px-3 py-2 text-[13px] font-bold leading-snug text-[#d6204e]">
              Accepted and presented papers will be submitted for possible
              inclusion in IEEE Xplore®, subject to IEEE quality and compliance
              requirements.
            </p>
          </div>
        </section>
      </div>

      {/* Why Attend */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading title={`Why Attend ${SITE.shortName}`} center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-[#f5d000] bg-navy-950 text-white">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {h.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-800">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            *Subject to compliance with IEEE quality standards and presentation
            at the conference.
          </p>
        </Container>
      </section>

      {/* Tracks */}
      <section className="bg-page py-16">
        <Container>
          <SectionHeading title="Conference Tracks" center />
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-lg border border-slate-300 bg-white">
            {TRACKS.map((t, i) => (
              <div
                key={t.id}
                className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  i % 2 ? "bg-[#f5f7fb]" : "bg-white"
                } ${i ? "border-t border-slate-200" : ""}`}
              >
                <span className="w-24 shrink-0 font-bold text-navy-800">
                  {t.id}
                </span>
                <span className="text-[15px] text-slate-800">{t.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/call-for-papers"
              className="inline-block rounded bg-cta px-5 py-2.5 text-sm text-white transition hover:brightness-110"
            >
              Full Call for Papers
            </Link>
          </div>
        </Container>
      </section>

      {/* Key Dates */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading title="Important Dates" center />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-slate-300">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="px-5 py-3 font-bold">Event</th>
                  <th className="px-5 py-3 font-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                {IMPORTANT_DATES.map((d, i) => (
                  <tr
                    key={d.milestone}
                    className={i % 2 ? "bg-[#f5f7fb]" : "bg-white"}
                  >
                    <td className="border-t border-slate-200 px-5 py-3 text-slate-800">
                      {d.milestone}
                    </td>
                    <td className="border-t border-slate-200 px-5 py-3 font-bold text-navy-900">
                      {d.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* External websites — alternating bands with red buttons */}
      {WEBSITES.map((w, i) => (
        <section
          key={w.href}
          className={`py-14 text-center ${i % 2 ? "bg-white" : "bg-page"}`}
        >
          <img
            src={w.logo}
            alt={w.alt}
            className="mx-auto h-20 w-auto max-w-[90%] object-contain"
          />
          <a
            href={w.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded bg-cta px-5 py-2.5 text-[15px] text-white transition hover:brightness-110"
          >
            {w.label}
          </a>
        </section>
      ))}
    </div>
  );
}
