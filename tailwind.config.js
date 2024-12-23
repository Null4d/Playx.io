/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'berlin': ['berlin_sans_fb_demibold'],
      },

      minWidth: {
        '195px': '195px',
        '100px': '100px',
      },

      padding: {
        '49px': '49px',
        '0.875': '0.875rem',
      },

      width: {
        '30px': '30px',
        '88px': '88px',
        '735px': '735px',
        '30%': '30.333%',
      },

      height: {
        '88px': '88px',
      },

      backgroundImage: {
        'white-arrow': "url('./img/icons/white.svg')",
        'green-around': "url('./img/icons/header-icon-bg.svg')",
      },

      colors: {
        'green': '#45f882',
        'customDark': 'rgb(11 14 19)',
      },

      zIndex: {
        '3': '3',
        '2': '2',
        '1': '1',
        'minus-1': '-1',
      },

      transitionDuration: {
        '100': '100ms',
        '25': '25ms',
      },

      margin: {
        'minus-15px': '-15px',
        'minus-45px': '-45px',
      },

      padding: {
        '15px': '15px',
      },

      maxWidth: {
        '1375px': '1375px',
      },

      fontSize: {
        '150px': '150px',
      }
    },
    screens: {
      sm: '432px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'lm': '992px',
      'mcc': '1200px',
      '2xl': '1536px',
    },

    backgroundImage: {
      'custom-gradient': 'linear-gradient(0deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)',
      'custom-gradientTwo': 'linear-gradient(0deg,rgb(12,14,18)_0%,rgb(16,24,31)_100%)',                
    },

    content: {
      'arrow-icon': '"\\f30b"',
    },

    borderRadius: {
      '50%': '50%',
      '8px': '8px',
    }
  },
  plugins: [],
}