/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: {
          100: "#0B8188",
          200: "#8BC8CC",
        },
        flamingo: {
          DEFAULT: "#F05123",
          50: "#FCD9CF",
          100: "#FACABC",
          200: "#F8AC96",
          300: "#F58D6F",
          400: "#F36F49",
          500: "#F05123",
          600: "#CD390E",
          700: "#982A0A",
          800: "#641C07",
          900: "#2F0D03",
        },
        sinbad: {
          DEFAULT: "#90D0D4",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#E8F5F6",
          300: "#CBE9EB",
          400: "#ADDCDF",
          500: "#90D0D4",
          600: "#68BFC4",
          700: "#44A9B0",
          800: "#348287",
          900: "#255B5F",
        },
      },
    },
    fontFamily: {
      QuickSand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
