/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["var(--font-libre-bodoni)", "serif"],
        caudex: ["var(--font-caudex)", "serif"],
      },
    },
  },
  plugins: [],
};


