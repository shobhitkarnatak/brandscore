import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend:{
      colors:{
        primary:"#02abfe"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
     }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config;