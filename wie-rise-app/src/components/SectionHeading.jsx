export default function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-600">{eyebrow}</p>
      )}
      <h2 className="mt-1 font-display text-2xl tracking-wide text-navy-950 sm:text-3xl">{title}</h2>
      <div className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-navy-700 to-sky-500 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
