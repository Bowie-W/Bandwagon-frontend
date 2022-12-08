/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: '#16161a'

        },
        gray: {
          50: '#94a1b2',
          100: '#242629'
        },
        white: {
          50: '#fffffe'
        }
      }
    },
  },
  plugins: [],
}