/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'custom-height': '940px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-350': '350px',
        'custom-100': '100px',
      },
      width: {
        'custom-450': '450px',
        'custom-350': '350px',
      },

      colors: {
        primary60: '#007293',
        primary50: '#0092AC',
        textColor: '#667085',
        tertiary80: '#2E3032',
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
        'custom-12': '12px',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
