import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { results, fixtures, seasonStats } from '../assets/data/matches.js'

const statItems = [
  { label: 'Played', value: seasonStats.played  },
  { label: 'Won',    value: seasonStats.won      },
  { label: 'Drawn',  value: seasonStats.drawn    },
  { label: 'Lost',   value: seasonStats.lost     },
  { label: 'GF',     value: seasonStats.gf       },
  { label: 'GA',     value: seasonStats.ga       },
]

const resultPill = {
  W: 'bg-green-500 text-white',
  D: 'bg-amber-400 text-black',
  L: 'bg-red-600   text-white',
}
const resultLabel = { W: 'W', D: 'D', L: 'L' }

function MatchRow({ match }) {
  const isArsenalHome = match.homeTeam === 'Arsenal'
  const isPlayed      = match.homeScore !== null

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-gray-100
                 hover:border-gunner-red/30 hover:shadow-md
                 transition-all duration-200 p-5"
    >
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-gray-400 font-medium">
        <span className="flex items-center gap-1">
          <span role="img" aria-hidden="true">{match.compBadge}</span>
          {match.competition}
        </span>
        <span className="text-gray-300">·</span>
        <span>{match.date}</span>
        <span className="text-gray-300">·</span>
        <span>{match.venue}</span>
        {isPlayed && match.result && (
          <>
            <span className="text-gray-300">·</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${resultPill[match.result]}`}>
              {resultLabel[match.result]}
            </span>
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className={`flex-1 flex items-center gap-3 ${isArsenalHome ? 'justify-end' : 'justify-end'}`}>
          <span
            className={`font-extrabold text-base md:text-lg text-right
                       ${match.homeTeam === 'Arsenal' ? 'text-gunner-red' : 'text-gray-800'}`}
          >
            {match.homeTeam}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-5 py-3 min-w-[100px] justify-center">
          {isPlayed ? (
            <span className="text-2xl font-extrabold text-gray-900 tracking-widest">
              {match.homeScore} – {match.awayScore}
            </span>
          ) : (
            <div className="text-center">
              <span className="text-sm font-bold text-gunner-red block">{match.time}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">KO</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex items-center gap-3">
          <span
            className={`font-extrabold text-base md:text-lg
                       ${match.awayTeam === 'Arsenal' ? 'text-gunner-red' : 'text-gray-800'}`}
          >
            {match.awayTeam}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Matches() {
  const [activeTab, setActiveTab] = useState('fixtures')

  const displayMatches = activeTab === 'results' ? results : fixtures

  return (
    <>
      <section
        className="relative pt-32 pb-0 text-white overflow-hidden bg-gunner-dark-2"
        aria-label="Match Centre header"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #e30713 0, #e30713 1px, transparent 0, transparent 50%)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pb-10">
          <span className="inline-block bg-gunner-gold text-gunner-dark text-xs font-extrabold
                           uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow">
            2025 / 2026 Season
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
            Match <span className="text-gunner-red">Centre</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Results, scores, and upcoming fixtures for Arsenal FC.
          </p>
        </div>

        <div className="relative z-10 bg-gunner-red">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/20">
              {statItems.map(({ label, value }) => (
                <div key={label} className="py-5 text-center">
                  <p className="text-2xl font-extrabold text-white">{value}</p>
                  <p className="text-xs text-white/70 uppercase tracking-widest font-semibold mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3" role="tablist" aria-label="Match display toggle">
            {[
              { id: 'fixtures', label: '📅 Upcoming Fixtures' },
              { id: 'results',  label: '✅ Recent Results'     },
            ].map(({ id, label }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide
                           transition-all duration-200 focus:outline-none
                           focus:ring-2 focus:ring-gunner-red focus:ring-offset-2
                           ${
                             activeTab === id
                               ? 'bg-gunner-red text-white shadow-md'
                               : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                           }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-gunner-gray-light min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={activeTab === 'fixtures' ? 'Upcoming Fixtures' : 'Recent Results'}
            subtitle={
              activeTab === 'fixtures'
                ? "Don't miss a single match — mark your calendar."
                : 'A look back at how the Gunners have performed.'
            }
          />

          <div className="space-y-4">
            {displayMatches.map((match) => (
              <MatchRow key={match.id} match={match} />
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10 italic">
            * Match data is manually curated for the 2025/2026 season.
            Live scores coming in a future update.
          </p>
        </div>
      </section>
    </>
  )
}