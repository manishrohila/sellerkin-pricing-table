/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FEFAE7',
        "custom-color-1":'#F95700',
        'custom-color-2':'#FFFFFF',
      },
    },
  },
  plugins: [],
}