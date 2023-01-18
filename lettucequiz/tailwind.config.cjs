/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cadetblue: "#9db2be",
        raisinblack: "#262624",
      },
    },
  },
  plugins: [],
};
