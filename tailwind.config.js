/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,htm}"],
  theme: {
    extend: {
      colors:{
        'purplebg':"#682ae9",
        'text-bgs': "#dbdbdb",
        'nav-bg':"777"
      }
    },
  },
  plugins: [],
}