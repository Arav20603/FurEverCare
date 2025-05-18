/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        playtime: ['PlayfulTime'],
        brandaYolq: ['Branda-yolq']
      }
    },
  },
  plugins: [],
}

