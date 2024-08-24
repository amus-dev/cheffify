/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262C57",
        secondary: "#D77466",
        secondaryLight: "#FCF3F2",
        grayLight: "#646477",
        green: "#275C73",
        separator: "#E0E0EB",
        grayCart: "#BEBEC9",
        gray: "#EDEDED",
      },
      boxShadow: {
        "card-shadow": "rgba(215, 116, 102, 0.4) 0px 0px 15px",
        arrow: "rgba(215, 116, 102, 0.4) 0px 0px 15px",
      },
    },
  },
  plugins: [],
};
