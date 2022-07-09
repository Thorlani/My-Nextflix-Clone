/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50897C",
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
