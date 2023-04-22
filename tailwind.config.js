/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '1200px'
    },
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue-dark': 'hsl(207, 26%, 17%)',
        'very-dark-blue-light': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}