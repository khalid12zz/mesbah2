/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      clr50: "rgb(var(--clr50) / <alpha-value>)",
      clr100: "rgb(var(--clr100) / <alpha-value>)",
      clr200: "rgb(var(--clr200) / <alpha-value>)",
      clr300: "rgb(var(--clr300) / <alpha-value>)",
      clr400: "rgb(var(--clr400) / <alpha-value>)",
      clr500: "rgb(var(--clr500) / <alpha-value>)",
      clr600: "rgb(var(--clr600) / <alpha-value>)",
      clr700: "rgb(var(--clr700) / <alpha-value>)",
      clr800: "rgb(var(--clr800) / <alpha-value>)",
      clr900: "rgb(var(--clr900) / <alpha-value>)",
      clr1000: "rgb(var(--clr1000) / <alpha-value>)",
      clr1100: "rgb(var(--clr1100) / <alpha-value>)",
      clr1200: "rgb(var(--clr1200) / <alpha-value>)",
      clr1300: "rgb(var(--clr1300) / <alpha-value>)",
      clr1400: "rgb(var(--clr1400) / <alpha-value>)",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
