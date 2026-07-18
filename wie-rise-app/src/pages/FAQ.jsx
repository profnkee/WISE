import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { FAQS } from '../data/dates'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="font-medium text-navy-950">{item.q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-navy-700 transition ${isOpen ? 'rotate-45' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      <PageHeader
        eyebrow="Help"
        title="Frequently Asked Questions"
        subtitle="Have questions about WIE-RISE 2027? Below are answers to some of the most commonly asked questions."
      />
      <Container className="py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
