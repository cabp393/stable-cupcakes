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
      boxShadow: {
        top: '0 -20px 20px #000000',
        cart: '5px 5px 5px #00000030',
      },
    },
  },
  plugins: [],
}
