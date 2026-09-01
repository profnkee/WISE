import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="Get to know us" title="About" subtitle="NIT Jamshedpur & the Departments of Electrical and Mechanical Engineering" />
      <Container className="py-16">
        <SectionHeading eyebrow="Host Institute" title="About NIT Jamshedpur" />
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <p className="text-justify leading-relaxed text-slate-600">
            The National Institute of Technology Jamshedpur (NIT Jamshedpur) is an Institute of National
            Importance located at Jamshedpur, Jharkhand, India. Established as a Regional Institute of
            Technology in 1960, it was upgraded to NIT on 27 December 2002 with the status of Deemed
            University. It is one of the 31 NITs in India, and as such is directly under the control of the
            Ministry of Human Resource Development (MHRD). It is the third in the chain of eight NITs
            established as a part of the Second Five Year Plan (1956–61) by the Government of India. The
            Institute has twelve departments including engineering, science and humanities, and offers 4-year
            B.Tech, Master's and Ph.D degrees across various streams. The Institute is committed to academic
            excellence, good governance, and being an admired, innovative leader for students, employees and
            industry alike.
          </p>
          <img src="/assets/nit-jamshedpur-placement (1).jpg" alt="NIT Jamshedpur campus" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Department" title="About Electrical Engineering" />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <img src="/assets/EED1.jpg" alt="Electrical Engineering Department" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
            <p className="text-justify leading-relaxed text-slate-600">
              The Department of Electrical Engineering was started in 1960 and has consistently produced
              quality engineers since its inception, remaining actively involved in research and development.
              Alumni of the department are well placed in both public and private sectors. In addition to the
              UG programme, the department runs PG programmes in Power Systems and Power Electronics & Drives,
              and a Ph.D. programme across different areas of specialization — aiming to be a front-runner for
              the latest needs of the power sector and electrical industries, while imparting quality education
              through state-of-the-art research facilities that contribute to sustainable socio-economic growth.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Department" title="About Mechanical Engineering" />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <p className="text-justify leading-relaxed text-slate-600">
              The Department of Mechanical Engineering is one of the oldest (started in 1960) and the largest
              department in terms of faculty, students and activities. The Department offers B.Tech (Hons.) in
              Mechanical Engineering, M.Tech in Computer Integrated Design & Manufacturing (CIDM), M.Tech in
              Thermal Engineering (TE) and M.Tech in Energy System (ES). Department is also running PhD Program
              in various research areas in the Mechanical Engineering. It also offers part time PhD program,
              mainly meant for those employed in industries and academic institutions. The department is having
              highly qualified and experienced faculty in all streams of Mechanical Engineering. An interactive
              relationship is maintained between the students and staff which enables the students to develop a
              sound foundation in the stream in a conducive environment.
            </p>
            <img src="/assets/NIT-NIGHT.jpeg" alt="Mechanical Engineering Department" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
          </div>
        </div>
      </Container>
    </div>
  )
}
