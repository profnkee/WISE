import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import { TPC_MEMBERS } from '../data/tpc'

export default function TechnicalProgramCommittee() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return TPC_MEMBERS
    return TPC_MEMBERS.filter(([name, affiliation]) => `${name} ${affiliation}`.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <PageHeader
        eyebrow="Committee"
        title="Technical Program Committee"
        subtitle="Meet the distinguished members who play a key role in shaping the content and structure of the conference."
      />
      <Container className="py-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or affiliation..."
              className="w-full rounded-full border border-slate-300 py-2.5 pl-10 pr-4 text-sm focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20"
            />
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
            </svg>
          </div>
          <span className="whitespace-nowrap text-sm text-slate-500">{filtered.length} members</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="max-h-[70vh] overflow-y-auto">
            <table className="w-full text-left text-sm">
              <thead className="sticky top-0 bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-5 py-3 font-semibold">Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(([name, affiliation], i) => (
                  <tr key={`${name}-${i}`} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-5 py-3 font-medium text-navy-950">{name}</td>
                    <td className="px-5 py-3 text-slate-600">{affiliation}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={2} className="px-5 py-8 text-center text-slate-400">
                      No matches found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}
