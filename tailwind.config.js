/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        muted: '#D01345',
        modalBg: 'rgba(0, 0, 0, 0.486)',
        white: '#fff',
        navigateBg: '#525050',
        searchBar: '#2D2D2D',
      },
    },
  },
  plugins: [],
}
