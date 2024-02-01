/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 25px 25px rgba(202,64,128,0.75)",
      },
    },
  },
  plugins: [],
};
