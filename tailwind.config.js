/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        suraksha365: {
          bgMain: '#080B18',
          bgSecondary: '#10182B',
          bgCard: '#17233D',
          primaryBlue: '#2563EB',
          electricBlue: '#4169FF',
          purpleAccent: '#7657E8',
          sosEmergency: '#E94B68',
          textMain: '#F8FAFC',
          textSecondary: '#AAB6D3',
          border: '#1E2D4E',
        },
        navy: {
          950: '#080B18',
          900: '#10182B',
          800: '#17233D',
          700: '#1E2D4E',
          600: '#24355A',
        },
        brand: {
          purple: '#7657E8',
          lightPurple: '#A78BFA',
          blue: '#4169FF',
          darkBlue: '#2563EB',
          sosRed: '#E94B68',
          sosRedHover: '#D9264E',
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple': 'ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
