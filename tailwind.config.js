/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#F5F5F7',
        accent: '#4CD964',
        accent2: '#7C3AED',
        dark: '#3A3A3C',
        light: '#F5F5F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}