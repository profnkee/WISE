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
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex w-16 flex-col items-center rounded-xl bg-white/10 py-3 backdrop-blur-sm ring-1 ring-white/15 sm:w-20"
        >
          <span className="font-display text-2xl text-white sm:text-3xl">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-slate-300 sm:text-xs">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
