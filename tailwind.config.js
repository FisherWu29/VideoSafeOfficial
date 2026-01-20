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
        bg: '#050611',
        surface: '#0B0D1A',
        surface2: '#10122A',
        border: '#1F2133',
        text: '#EDEBFF',
        muted: '#A9A4C7',
        dark: '#0A0B10',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
