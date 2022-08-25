/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1088px"
      },
      colors: {
        blackAlpha: "rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: [],
}
