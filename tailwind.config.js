/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
    extend: {
      colors: {
        gray_500: "#9f9f9f",
        black_900: "#000000",
        yellow_700: "#fdbf36",
        white_A700: "#ffffff",
        gray_100: "#f5f5f5",
      },
      fontFamily: { poppins: "Poppins", montserrat: "Montserrat" },
    },
  },
};
