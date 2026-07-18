import Container from './Container'

export default function ComingSoon({ note }) {
  return (
    <Container className="py-20">
      <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 px-8 py-14 text-center shadow-sm">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-navy-900/10">
          <svg className="h-7 w-7 text-navy-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl tracking-wide text-navy-950">To Be Announced Soon</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {note || 'This information will be updated on the website shortly. Please check back soon.'}
        </p>
      </div>
    </Container>
  )
}
