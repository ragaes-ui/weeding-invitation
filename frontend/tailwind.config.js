/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Pastikan import font ini di index.html
        sans: ['"Lato"', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [],
}