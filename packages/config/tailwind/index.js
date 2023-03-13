/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = config;
