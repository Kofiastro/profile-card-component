/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        Dark_cyan: 'hsl(185, 75%, 39%)',
        Very_dark_desaturated_blue: 'hsl(229, 23%, 23%)',
        Dark_grayish_blue: 'hsl(227, 10%, 46%)',
        Dark_gray: 'hsl(0, 0%, 59%)'
      }
    },
  },
  plugins: [],
}

