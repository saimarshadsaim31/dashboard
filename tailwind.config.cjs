/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F7F7F7',
        'custom-primary': '#283848',
        'custom-text': '#4C4C4C',
        'custom-white': '#FFFFFF',
        'custom-blue': '#6DBCDB',
        'custom-black': '#000000',
        'custom-green': '#809900',
        'custom-gray': '#707070',
        'custom-red': '#E11E25',
        'custom-orange': '#FF9500',
        'custom-yellow': '#FFF27B',
        'custom-danger': '#FFAFB1',
        'custom-success': '#82F89D',
      },
    },
  },
  plugins: [],
};
