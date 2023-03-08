/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: "4px 4px 6px #ffffff1a;",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin")],
};
