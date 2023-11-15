/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,sx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
