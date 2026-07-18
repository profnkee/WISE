import { useEffect, useState } from 'react'

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown({ target }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="inline-flex items-stretch gap-2 rounded-2xl border border-white/15 bg-white/5 p-3 shadow-lg shadow-black/20 backdrop-blur-md sm:gap-3 sm:p-4">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center">
          <div className="flex w-14 flex-col items-center rounded-xl bg-gradient-to-b from-white/15 to-white/5 py-2.5 ring-1 ring-white/10 sm:w-[4.5rem] sm:py-3">
            <span className="font-display text-2xl tabular-nums text-white sm:text-4xl">
              {String(u.value).padStart(2, '0')}
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-sky-300/90 sm:text-[11px]">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="mx-1.5 self-center font-display text-xl text-white/25 sm:mx-2 sm:text-2xl">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
