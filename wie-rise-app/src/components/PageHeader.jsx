import Container from './Container'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-950 to-navy-900 pt-32 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
        <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-blue-600 blur-3xl" />
      </div>
      <Container className="relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg">{subtitle}</p>}
      </Container>
    </div>
  )
}
