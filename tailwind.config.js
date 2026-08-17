/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FDF7E2',
          200: '#FBE8B1',
          300: '#F8D47C',
          400: '#F4C04F',
          500: '#ECAA21', // Primary gold
          600: '#C28415',
          700: '#945F10',
          800: '#724810',
          900: '#5F3A10',
        },
        dark: {
          900: '#0A0A0A',
          800: '#141414',
          700: '#1F1F1F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
