import { Link } from 'react-router-dom'

const socialLinks = [
  { name: 'Facebook',  href: '#', icon: '📘' },
  { name: 'Twitter/X', href: '#', icon: '🐦' },
  { name: 'Instagram', href: '#', icon: '📸' },
  { name: 'YouTube',   href: '#', icon: '▶️' },
]

const quickLinks = [
  { label: 'Home',         to: '/'        },
  { label: 'Squad',        to: '/squad'   },
  { label: 'Match Centre', to: '/matches' },
  { label: 'Contact Us',   to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gunner-dark text-white border-t-4 border-gunner-red">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-gunner-gold flex items-center justify-center
                               font-extrabold text-gunner-red text-xl leading-none shadow">
                G
              </span>
              <span className="text-white font-extrabold text-lg tracking-widest uppercase">
                The Gooners Portal
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The premier fan destination for Arsenal FC supporters worldwide.
              Built with passion, powered by community, fuelled by red and white.
            </p>
            <p className="mt-4 text-xs text-gray-500 italic">
              Unofficial fan website — not affiliated with Arsenal Football Club plc.
            </p>
          </div>

          <div>
            <h3 className="text-gunner-gold font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-gunner-gold transition-colors duration-200
                               text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-gunner-red rounded group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gunner-gold font-bold text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-gray-400 hover:text-gunner-gold transition-colors duration-200
                               text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span role="img" aria-hidden="true">{social.icon}</span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-gunner-dark-2 border border-white/10">
              <p className="text-gunner-gold text-xs font-bold uppercase tracking-widest">
                2025 / 2026 Season
              </p>
              <p className="text-gray-400 text-xs mt-0.5 italic">
                "Victoria Concordia Crescit"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {year} The Gooners Portal. Fan-made with ❤️ in North London.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}