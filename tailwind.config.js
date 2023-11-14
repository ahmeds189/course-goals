/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        background: "hsl(215, 29%, 8%)",
        forground: "hsl(204, 24%, 96%)",
        muted: "hsl(213, 12%, 55%)",
        brand_1: "hsl(237, 100%, 71%)",
        brand_2: "hsl(54, 98%, 52%)",
        danger: "hsl(350, 100%, 61%)",
        section: "hsl(213, 29%, 12%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
