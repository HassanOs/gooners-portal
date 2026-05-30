import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-gunner-dark-2 text-white text-center px-4 pt-16">
      <p className="text-[10rem] font-extrabold text-gunner-red/30 leading-none select-none">
        404
      </p>

      <div className="w-16 h-16 -mt-8 rounded-full bg-gunner-red flex items-center
                      justify-center text-gunner-gold font-extrabold text-3xl shadow-lg mb-6">
        G
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-400 text-base max-w-md mb-8">
        The page you're looking for has been subbed off. Let's get you back to
        the main pitch.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn-primary">
          ← Back to Home
        </Link>
        <Link to="/squad" className="btn-outline border-gray-500 text-gray-300 hover:bg-white/10">
          View the Squad
        </Link>
      </div>
    </div>
  )
}