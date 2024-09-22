/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'custom-960': '990px',
        'custom-820': '820px',
        'custom-780': '780px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-550': '550px',
        'custom-250': '330px',
        'custom-100': '100px',
      },
      width: {
        'custom-450': '450px',
        'custom-550': '550px',
        'custom-250': '330px',
      },

      colors: {
        primary70: '#00557B',
        primary60: '#007293',
        primary50: '#0092AC',
        primary40: '#55AEBE',
        primary20: '#97EBEA',
        primary10: '#D7F3F5',
        textColor: '#667085',
        tertiary80: '#2E3032',
        tertiary60: '#8C8F93',
        secondary0: '#FAFBFD',
        borderCard: {
          textFieldBorder: '#474D66',
        },
      },
      fontSize: {
        'custom-30': '30px',
        'custom-24': '24px',
        'custom-18': '18px',
        'custom-16': '16px',
        'custom-14': '14px',
        'custom-13': '13px',
        'custom-12': '12px',
        'custom-10': '10px',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
