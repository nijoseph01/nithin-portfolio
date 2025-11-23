/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mule: '#00A1DF',
        dark: '#1e293b',
      }
    },
  },
  plugins: [],
}