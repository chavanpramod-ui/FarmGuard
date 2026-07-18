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
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#f0f2f5',
          card: 'rgba(255, 255, 255, 0.98)',
          glass: 'rgba(255, 255, 255, 0.92)',
        },
        emerald: {
          400: '#22c55e',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
          900: '#14532d',
        },
        premium: {
          green: '#1f7c3a',
          darkgreen: '#0d5a2f',
          lightgreen: '#e8f5e9',
          gold: '#d4af37',
          silver: '#e8e8e8',
        },
        solar: {
          gold: '#d4a574',
          amber: '#b8956a',
          yellow: '#d4af37',
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
