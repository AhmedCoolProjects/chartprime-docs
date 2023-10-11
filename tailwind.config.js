/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  variants: {
    extend: {
      display: ["hover", "group-hover", "focus"],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
