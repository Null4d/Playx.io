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
      },
      
      padding: {
        '49px': '49px',
        '0.875': '0.875rem',
      },

      width: {
        '30px': '30px',
      },

      backgroundImage: {
        'white-arrow': "url('./img/icons/white.svg')",
      },

      zIndex: {
        'minus-1': '-1',
      },

      colors: {
        'green': '#45f882',
      },

      // transitionDuration: {
      //   '0.3s': '0.3',
      // }
    },
  },
  plugins: [],
}