/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skil: {
          "0%": { backgroudColor: "hsl(200,20%,70%)" },

          "100%": { backgroudColor: "hsl(200,20%,95%)" },
        },
      },
      animation: {
        skill: "skil 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
