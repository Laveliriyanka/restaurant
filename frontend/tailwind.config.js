/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        lightBg: "#F2E9D8",
        lightCard: "#E5DCC5",
        darkBg: "#0D0D0D",
        darkCard: "#141414",
        accent: "#C6A443",
        primary: "#42423B"
      },
    },
  },
  plugins: [],
};