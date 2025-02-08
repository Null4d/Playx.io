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
        '561px': '561px',
      },

      padding: {
        '49px': '49px',
        '0.875': '0.875rem',
        'minus-15px': '-15px',
      },

      width: {
        '30px': '30px',
        '85px': '85px',
        '550px': '550px',
        '400px': '400px',
        '570px': '570px',
        '780px': '780px',
        '815px': '815px',
        '685px': '685px',
        '363px': '363px',
        '75px': '75px',
        '28': '28rem',
        '30%': '30.333%',
      },

      height: {
        '84px': '84px',
        '681px': '681px',
        '600px': '600px',
        '440px': '440px',
        '487px': '487px',
        '75px': '75px',
        '44rem': '44rem',
      },

      backgroundImage: {
        'white-arrow': "url('./img/icons/white.svg')",
        'green-around': "url('./img/icons/header-icon-bg.svg')",
      },

      colors: {
        'green': '#45f882',
        'grey': '#adb0bc',
        'BlackBlue': '#040608',
        'customDark': '#0b0e13',
        'LightBlue': '#10181f',
      },

      zIndex: {
        '3': '3',
        '2': '2',
        '1': '1',
        'minus-1': '-1',
        'minus-2': '-2',
      },

      transitionDuration: {
        '100': '100ms',
        '25': '25ms',
      },

      margin: {
        'minus-15px': '-15px',
        'minus-45px': '-45px',
        'minus-35px': '-35px',
      },

      padding: {
        '15px': '15px',
        'minus-15px': '-15px',
      },

      maxWidth: {
        '1375px': '1375px',
        '1536px': '1536px',
        '700px': '700px',
        '960px': '960px',
        '77%': '77%',
        '95%': '95%',
      },

      flexBasis: {
        '45%': '45%',
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
      '2xl': '1536px',
    },
    maskImage: {
      image: 'url(/src/img/others/mask_bg01.png)',
      image2: 'url(/src/img/others/mask_bg02.png)',
    },
    rotate: {
      'minus-40px': '-40px',
    },

    // backgroundImage: {
    //   'custom-gradient': 'linear-gradient(0deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)',
    //   'custom-gradientTwo': 'linear-gradient(0deg,rgb(12,14,18)_0%,rgb(16,24,31)_100%)',                
    // },

    content: {
      'arrow-icon': '"\\f30b"',
    },

    borderRadius: {
      '50%': '50%',
      '8px': '8px',
    },


    keyframes: {
      moveUpDown: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      moveUpDown: 'moveUpDown 3s ease-in-out infinite',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-image': {
          'mask-image': 'url(/src/img/others/mask_bg01.png)',
          'mask-position': 'top left',
          'mask-repeat': 'no-repeat',
          'mask-size': 'cover',
          '-webkit-mask-image': 'url(/src/img/others/mask_bg01.png)',
          '-webkit-mask-position': 'top left',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-size': 'cover',
        },
        '.mask-image2': {
          'mask-image': 'url(/src/img/others/mask_bg02.png)',
          'mask-position': 'top left',
          'mask-repeat': 'no-repeat',
          'mask-size': 'cover',
          '-webkit-mask-image': 'url(/src/img/others/mask_bg02.png)',
          '-webkit-mask-position': 'top left',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-size': 'cover',
        },
      });
    },
  ],
}