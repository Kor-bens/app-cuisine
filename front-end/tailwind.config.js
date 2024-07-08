/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'min': '330px', 'max': '639px'},
      },
      height: {
        'r-41.25': '41.25rem'
      }
    },
  },
  plugins: [],
}

