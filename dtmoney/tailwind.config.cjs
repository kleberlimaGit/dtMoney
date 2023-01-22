/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      }
    },
    fontFamily:{
      sans:['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
