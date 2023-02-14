/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "Orange-ecomerce": "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",
        "Very-dark-blue":"hsl(220, 13%, 13%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "Light-grayish blue": "hsl(223, 64%, 98%)",
        "White": "hsl(0, 0%, 100%)",
        "Black(with 75% opacity for lightbox background)": "hsl(0, 0%, 0%)"

      }
    },
  },
  plugins: [],
}
