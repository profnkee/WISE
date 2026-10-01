import Banner from './Banner'
import Ticker from './Ticker'
import Container from './Container'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div>
      <Banner />
      <Ticker />
      <Container className="pt-12 pb-4 text-center">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy-800">{eyebrow}</p>
        )}
        <h1 className="title-pill mt-3 text-xl sm:text-2xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">{subtitle}</p>}
      </Container>
    </div>
  )
}
