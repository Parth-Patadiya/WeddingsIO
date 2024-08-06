/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
          light: '#ffc760'
      },
      width: {
        'fill-available': '-webkit-fill-available',
      },
      borderRadius: {
        'custom': '2rem',
      },
      fontFamily: {
        sans: ['Lora'],
      },
    },
  },
  plugins: [],
}
