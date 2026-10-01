import { Link } from 'react-router-dom'

const ITEMS = [
  { label: 'Conference Dates :', value: 'April 01–03, 2027' },
  { label: 'Mode :', value: 'Hybrid — Virtual & Physical' },
  { label: 'Call for Papers', value: 'Submit Now', to: '/call-for-papers' },
  { label: 'Registration', value: 'Click Here', to: '/registration' },
]

function Row() {
  return (
    <span className="mx-6 inline-flex items-center">
      {ITEMS.map((item) => (
        <span key={item.label} className="inline-flex items-center">
          <span className="font-bold text-white">{item.label}</span>
          {item.to ? (
            <Link to={item.to} className="ml-1.5 font-bold text-sky-400 hover:underline">
              {item.value}
            </Link>
          ) : (
            <span className="ml-1.5 font-bold text-sky-400">{item.value}</span>
          )}
          <span className="mx-3 text-white">|</span>
        </span>
      ))}
      <span className="text-white">
        Welcome to WIE-RISE 2027 – Revolutionizing Innovation in Smart Engineering, NIT Jamshedpur.
      </span>
    </span>
  )
}

export default function Ticker() {
  return (
    <div className="mx-auto max-w-[1220px] overflow-hidden bg-navy-800 py-1.5 text-[15px] sm:text-lg">
      <div className="animate-marquee whitespace-nowrap">
        <Row />
        <Row />
      </div>
    </div>
  )
}
