import { Link } from 'react-router-dom'

import SectionHeader from '../components/SectionHeader.jsx'
import NewsCard      from '../components/NewsCard.jsx'

import { articles, upcomingFeatures } from '../assets/data/news.js'

const clubStats = [
  { value: '1886',  label: 'Founded'        },
  { value: '14×',   label: 'League Titles'  },
  { value: '14×',   label: 'FA Cups'        },
  { value: '60k+',  label: 'Stadium Seats'  },
]

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white
                   bg-hero-stadium bg-cover bg-center pt-16"
        aria-label="Hero banner"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fade-in-up">
          <span className="inline-block bg-gunner-gold text-gunner-dark text-xs font-extrabold
                           uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow">
            Season 2025 / 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none
                         text-shadow mb-4">
            Welcome to{' '}
            <span className="text-gunner-gold block mt-1">Emirates Stadium</span>
          </h1>

          <p className="text-base md:text-xl font-semibold uppercase tracking-widest
                        text-gunner-gold/90 mb-8 text-shadow">
            Home of the Gunners · Since 1886
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#intro"
              className="btn-gold text-base px-8 py-4 shadow-lg"
            >
              Explore the Club
            </a>
            <Link
              to="/squad"
              className="btn-outline border-white text-white hover:bg-white hover:text-gunner-red
                         text-base px-8 py-4"
            >
              Meet the Squad
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                        text-white/60 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <section id="intro" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Arsenal Way"
            subtitle="Beauty, passion, and the relentless pursuit of greatness — this is who we are."
          />

          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-gray-600 text-lg leading-relaxed">
              Arsenal Football Club has been at the heart of North London since{' '}
              <strong className="text-gray-900">1886</strong>. We believe in playing beautiful,
              attacking football with style and passion. Our commitment to developing young talent
              and maintaining the highest standards both on and off the pitch defines who we are.
              The <strong className="text-gunner-red">2025/2026 Season</strong> — building
              towards greatness.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clubStats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100
                           hover:border-gunner-red/30 hover:bg-gunner-red/5
                           transition-colors duration-300"
              >
                <p className="text-4xl font-extrabold text-gunner-red mb-1">{value}</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gunner-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest News"
            subtitle="Stay updated with the latest from Arsenal FC and The Gooners Portal."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Features"
            subtitle="The portal is evolving. Here's what's coming next for our community."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-white rounded-2xl shadow-md p-8 text-center
                           border border-gray-100 hover:border-gunner-red/40
                           hover:-translate-y-1.5 hover:shadow-card-hover
                           transition-all duration-300"
              >
                <span className="absolute top-4 right-4 bg-gunner-red text-white
                                 text-xs font-bold px-2.5 py-1 rounded-full">
                  {feature.phase}
                </span>

                <div className="w-16 h-16 rounded-full bg-gunner-red/10 flex items-center
                                justify-center mx-auto mb-5 text-3xl">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gunner-red mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 gradient-red text-white text-center"
        aria-label="Call to action"
      >
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gunner-gold font-bold text-sm uppercase tracking-widest mb-3">
            Season 2025 / 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Meet Your Champions
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Explore the full Arsenal squad — from world-class goalkeepers to
            clinical forwards. Get to know every player in red and white.
          </p>
          <Link to="/squad" className="btn-gold text-base px-10 py-4 shadow-xl">
            View Full Squad →
          </Link>
        </div>
      </section>
    </>
  )
}