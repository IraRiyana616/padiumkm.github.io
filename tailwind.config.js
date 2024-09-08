/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary60: '#007293',
        primary50: '#0092AC',
        textColor: '#667085',
        borderCard: {
          textFieldBorder: '#474D66',
        },
      },
      fontSize: {
        'custom-30': '30px',
        'custom-16': '16px',
        'custom-14': '14px',
        'custom-12': '12px',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
