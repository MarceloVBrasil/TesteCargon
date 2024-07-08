/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFEF2',
        secondary: '#FBAC27',
        terciary: '#fffffa'
      },

      fontFamily: {
        "open-sans-light": 'open-sans-light',
        "open-sans-medium": 'open-sans-medium',
        "open-sans-regular": 'open-sans-regular',
        "open-sans-semi-bold": 'open-sans-semi-bold',
      },
      screens: {
        sm: '400px',
        md: '700px',
        lg: '1100px',
        xl: '1400px'
      }
    },
  },
  plugins: [],
}