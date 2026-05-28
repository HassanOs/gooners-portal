/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gunner: {
          red:       '#e30713', 
          'red-dark':'#b50510', 
          gold:      '#F5D76E',  
          'gold-dark':'#d4a833',
          dark:      '#0f0f0f', 
          'dark-2':  '#1a1a1a', 
          'dark-3':  '#2a2a2a', 
          gray:      '#6b7280', 
          'gray-light': '#f3f4f6', 
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-stadium': "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.70)), url('/images/emirates-stadium.jpg')",
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)'    },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'scale-in':   'scaleIn 0.4s ease-out forwards',
      },
      boxShadow: {
        'card-hover': '0 20px 40px rgba(227, 7, 19, 0.18)',
        'nav':        '0 4px 20px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

