/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myblack':'#262626',
        'myOrange':'#ff8811',
        'myAzul':'#016fb9',
        'myEmerald':'#04D588',
        'myWhite':'#f6f7eb',
        'myGray':'#7a7a7a',
        'myPastel':'#EFC7FF',
        'myGreen':'#02EEBB',
        'myDark':'#1e1e1e'
      },
      fontFamily:{
        akshar: ['Akshar', 'sans-serif'],
        alumni: ['Alumni Sans', 'sans-serif'],
        alex: ['Alex Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}

