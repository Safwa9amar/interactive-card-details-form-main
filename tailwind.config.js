/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html","**/*.js"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
