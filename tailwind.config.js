/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Plein':['Plein', "sans-serif"]
      },
      colors: {
        black: {
          50: '#16161a'

        },
        gray: {
          50: '#94a1b2',
          100: '#242629'
        },
        white: {
          50: '#fffffe',
          100: '#ddd6f2'
        },
        purple: {
          50: '#7f5af0',
          100: '#8701F7',
          150: '#c4b5f2'
        },
        teal: {
          50: '#2cb67d'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}