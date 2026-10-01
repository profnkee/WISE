export default function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-navy-800">{eyebrow}</p>
      )}
      <h2 className="title-pill text-lg sm:text-[22px]">{title}</h2>
    </div>
  )
}
