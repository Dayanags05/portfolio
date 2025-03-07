/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5ECD8',
          300: '#EFE2C3',
          400: '#E9D8AE',
        },
        brown: {
          50: '#F9F6F3',
          100: '#E8D8CC',
          200: '#D4B5A0',
          300: '#BF9274',
          400: '#A97048',
          500: '#8B5E3D',
          600: '#6D4B31',
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};