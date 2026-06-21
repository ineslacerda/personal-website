/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          purple: '#7C3AED',
          teal: '#0EA5E9',
          light: '#F5F3FF',
        },
        surface: '#FAFAF9',
        ink: '#1C1917',
        muted: '#78716C',
      },
    },
  },
  plugins: [],
}
