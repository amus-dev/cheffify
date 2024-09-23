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
        bgInput: "#E8E8EF",
        colorInput: "#80808B",
        lightBeige: "#E7E1C9",
      },
      boxShadow: {
        "card-shadow": "rgba(215, 116, 102, 0.4) 0px 0px 15px",
        arrow: "rgba(215, 116, 102, 0.4) 0px 0px 15px",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
