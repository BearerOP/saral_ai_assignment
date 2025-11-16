/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFE6FC',
          100: '#DFCDFA',
          200: '#BF9CF4',
          300: '#9F6AEE',
          400: '#7F38E9',
          500: '#5735E4',
        },
        purple: {
          50: '#EFE6FC',
          100: '#DFCDFA',
          200: '#BF9CF4',
          300: '#9F6AEE',
          400: '#7F38E9',
          500: '#5735E4',
        },
        background: {
          default: '#FAFAFA',
          highlight: '#EEEEEE',
          white: '#FFFFFF',
        },
        text: {
          primary: '#404040',
          default: '#212121',
          subdued: '#616161',
          disabled: '#BDBDBD',
          highlight: '#7F38E9',
        },
        border: {
          default: '#E0E0E0',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        fira: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'soft': '0px -2px 10px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

