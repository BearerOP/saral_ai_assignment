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
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
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
        'card': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

