/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "main-green-color": "#64B087",
        "hamburger-menu-backgorund": "#288D55",
      },
      dropShadow: {
        middlePhoto: "0px 4px 4px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
