/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primaryText: "#1e3322",
        background: "#ffffff",
//        background: "#dcd5bb",
        'rizoma-bege' : "#fff6e7",
        'rizoma-bege-stronger' : "#f5e6d3",
        'rizoma-green': '#1e3322',
        'rizoma-green-lighter': '#618e81',
        'rizoma-green-button': '#0a7a66',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
