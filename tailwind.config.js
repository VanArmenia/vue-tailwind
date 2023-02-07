/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fascinate': ['"Fascinate"', 'cursive'],
        'anton': ['"Anton"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/img/kimkiduk-min.jpg')",
      },
      colors: {
        'dark-amber': '#24201a',
        'lighter-amber': '#302e2a',
      },
    },
    screens: {
      'sm': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: []
}