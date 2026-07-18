import { Link } from 'react-router-dom'
import { useState } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Countdown from '../components/Countdown'
import { SITE } from '../data/site'

export default function Home() {
  const [videoFailed, setVideoFailed] = useState(false)

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
            className="absolute inset-0 h-full w-full object-cover opacity-40"
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
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />

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
            <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
            </svg>
            <span className="font-semibold">{SITE.dates}</span>
            <span className="text-slate-400">•</span>
            <span>{SITE.venueShort}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="https://drive.google.com/file/d/1sWoSwEt99-8xsERCcYE8qfuTBydfLseY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 to-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              Download Schedule
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
              </svg>
            </a>

            <div>
              <Countdown target={SITE.targetDate} />
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">Countdown to the Conference</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-navy-900/10 bg-navy-900 py-2.5 text-sm text-slate-100">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-8">
              WIE-RISE will be organized at NIT Jamshedpur, Jharkhand, India, during April 01–03, 2027.
              <Link to="/call-for-papers" className="font-semibold text-sky-400 hover:underline">
                Call for Papers →
              </Link>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Introduction" title="About WIE-RISE 2027" center />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/assets/IMGIce2cpt.jpg"
              alt="Conference"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
            <p className="text-justify leading-relaxed text-slate-600">
              The 1st IEEE Conference on WIE-RISE: Revolutionizing Innovation in Smart Engineering will be
              organized by the Department of Electrical Engineering, National Institute of Technology (NIT)
              Jamshedpur, from 01st to 03rd April 2027 in hybrid mode. This premier event is being held in
              association with IEEE, IEEE Kolkata Section, and the IEEE Student Branch, NIT Jamshedpur. As a
              flagship international conference of the IEEE Kolkata Section, WIE-RISE 2027 is poised to serve as
              a global platform for researchers, academicians, and industry professionals to exchange
              cutting-edge developments in electrical engineering, electronics, computer science, biotechnology,
              biomedical engineering and advanced power technologies.
              <br />
              <br />
              WIE-RISE 2027 aims to foster interdisciplinary collaboration by highlighting emerging trends and
              innovations in areas such as smart grids, AI and IoT applications, signal processing, advanced
              control systems, and sustainable energy technologies. The conference will facilitate knowledge
              sharing and thought leadership across academia and industry, addressing critical challenges and
              opportunities in green industrial electronics and digital transformation.
            </p>
          </div>

          <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
            <p className="order-2 text-justify leading-relaxed text-slate-600 lg:order-1">
              The National Institute of Technology Jamshedpur (NIT Jamshedpur) is an Institute of National
              Importance located at Jamshedpur, Jharkhand, India. Established as a Regional Institute of
              Technology in 1960, it was upgraded to NIT on 27 December 2002 with the status of Deemed
              University. It is one of the 31 NITs in India, directly under the Ministry of Human Resource
              Development (MHRD), and the third in the chain of eight NITs established under the Second Five
              Year Plan (1956–61) by the Government of India. The Institute has twelve departments spanning
              engineering, science and humanities, offering 4-year B.Tech, Master's and Ph.D degrees across
              various streams.
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
              The Department of Electrical Engineering was established in 1960 and has consistently produced
              quality engineers since its inception, remaining actively involved in research and development.
              In addition to its UG programme, the department runs PG programmes in Power Systems and Power
              Electronics & Drives, and a Ph.D. programme across various specializations — imparting quality
              education and building state-of-the-art research facilities that contribute to sustainable
              socio-economic development.
            </p>
          </div>
        </Container>
      </section>

      {/* Sponsors */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading eyebrow="Support" title="Organised By" center />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
            <img src="/assets/NITB&WLogo.png" alt="NIT Jamshedpur" className="h-16 object-contain" />
            <img src="/assets/nitlogosc.png" alt="Organizer" className="h-16 object-contain" />
          </div>
        </Container>
      </section>
    </div>
  )
}
