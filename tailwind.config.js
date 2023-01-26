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
    },
  },
  plugins: [],
};
