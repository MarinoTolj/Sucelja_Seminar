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
        "main-green-color-trans": "rgba(100, 176, 135, 0.7)",
        "light-green": "#A0F1C5",
        "hamburger-menu-background": "#288D55",
        beige: "#E5CFCF",
        "text-overlay": "rgba(0, 0, 0, 0.5)",
        "dark-green": "#266442",
        "hyperlink-blue": "#0969da",
      },
      dropShadow: {
        middlePhoto: "0px 4px 4px rgba(0, 0, 0, 0.75)",
      },
      gridTemplateColumns: {
        "2Cols": "minmax(0, 448px) 240px 240px",
      },
    },
  },
  plugins: [],
};
