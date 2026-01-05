/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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
}