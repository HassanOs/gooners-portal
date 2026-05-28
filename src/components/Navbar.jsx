import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home',         to: '/',        disabled: false },
  { label: 'Squad',        to: '/squad',   disabled: false },
  { label: 'Match Centre', to: '/matches', disabled: false },
  { label: 'Contact',      to: '/contact', disabled: false },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gunner-red transition-shadow duration-300 ${
        scrolled ? 'shadow-nav' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group"
            aria-label="The Gooners Portal — Go home"
          >
            <span className="w-9 h-9 rounded-full bg-gunner-gold flex items-center justify-center
                             font-extrabold text-gunner-red text-lg leading-none shadow-md
                             group-hover:scale-110 transition-transform duration-200">
              G
            </span>
            <span className="hidden sm:block text-white font-extrabold text-lg tracking-widest uppercase
                             group-hover:text-gunner-gold transition-colors duration-200">
              The Gooners Portal
            </span>
            <span className="sm:hidden text-white font-extrabold text-base tracking-wider uppercase
                             group-hover:text-gunner-gold transition-colors duration-200">
              Gooners Portal
            </span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded transition-colors duration-200
                    after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:h-0.5 after:bg-gunner-gold after:rounded-full
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? 'text-gunner-gold after:w-full'
                        : 'text-white/90 hover:text-gunner-gold after:w-0 hover:after:w-full'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5
                       rounded-lg hover:bg-white/10 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-gunner-gold"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                         ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                         ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                         ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wide
                     transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-white/15 text-gunner-gold'
                        : 'text-white/90 hover:bg-white/10 hover:text-gunner-gold'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}