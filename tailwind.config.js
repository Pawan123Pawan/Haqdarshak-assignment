/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#4F285E",
        inputColor: "#E5E2DE",
        myborderColor: "#D1CFCD",
        divider: "#BE5587",
        mybg: "#F3F1EF",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
