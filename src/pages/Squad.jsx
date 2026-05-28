import { useState, useMemo } from 'react'

import PlayerCard    from '../components/PlayerCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

import { players, positions, getPlayersByPosition } from '../assets/data/players.js'

const filterTabs = ['All', ...positions]

const positionAccent = {
  Goalkeeper: 'text-gunner-red border-gunner-red',
  Defender:   'text-blue-600  border-blue-600',
  Midfielder: 'text-amber-500  border-amber-500',
  Forward:    'text-green-600  border-green-600',
}

export default function Squad() {
  const [activeFilter, setActiveFilter] = useState('All')

  const displayGroups = useMemo(() => {
    if (activeFilter === 'All') {
      return positions.map((pos) => ({
        position: pos,
        players:  getPlayersByPosition(pos),
      }))
    }
    return [{ position: activeFilter, players: getPlayersByPosition(activeFilter) }]
  }, [activeFilter])

  return (
    <>
      <section
        className="relative pt-32 pb-16 text-center text-white overflow-hidden
                   bg-gunner-dark-2"
        aria-label="Squad page header"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #e30713 0, #e30713 1px, transparent 0, transparent 50%)',
            backgroundSize: '14px 14px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-gunner-gold text-gunner-dark text-xs font-extrabold
                           uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow">
            2025 / 2026 Season
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            The <span className="text-gunner-red">Squad</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Meet the champions who wear the red and white with pride.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 rounded-full
                          px-5 py-2.5 text-sm font-semibold text-white/80">
            <span className="w-2 h-2 rounded-full bg-gunner-red animate-pulse" />
            {players.length} Players · {positions.length} Positions
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none"
            role="tablist"
            aria-label="Filter players by position"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeFilter === tab}
                onClick={() => setActiveFilter(tab)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold
                           uppercase tracking-wide transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-gunner-red focus:ring-offset-2
                           ${
                             activeFilter === tab
                               ? 'bg-gunner-red text-white shadow-md scale-105'
                               : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                           }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-gunner-gray-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {displayGroups.map(({ position, players: groupPlayers }) => (
            <section key={position} aria-label={`${position}s`}>
              <div className={`flex items-center gap-4 mb-8 border-l-4 pl-4 ${positionAccent[position]}`}>
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900">{position}s</h2>
                  <p className="text-sm text-gray-400">
                    {groupPlayers.length} player{groupPlayers.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {groupPlayers.map((player) => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}