/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E82F6D',
        content: '#a0a0a0',
        detail: '#393939',
      },
    },
  },
  plugins: [],
}
