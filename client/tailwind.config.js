/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#fafaf9',
          secondary: '#f5f5f4',
          tertiary: '#e7e5e4',
          card: 'rgba(255, 255, 255, 0.95)',
          glass: 'rgba(255, 255, 255, 0.85)',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        premium: {
          green: '#0f4c3a',
          darkgreen: '#062d20',
          lightgreen: '#ecfdf5',
          gold: '#d4af37',
          silver: '#e5e7eb',
        },
        solar: {
          gold: '#d4a574',
          amber: '#f59e0b',
          yellow: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'emerald-glow': '0 0 30px -5px rgba(16, 185, 129, 0.4)',
        'gold-glow': '0 0 30px -5px rgba(245, 158, 11, 0.4)',
        'glass': '0 10px 35px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
