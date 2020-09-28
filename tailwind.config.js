module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    extend: {
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3.5rem',
      },
      fontFamily: {
        rubik: 'rubik',
        young: 'young',
      },
      colors: {
        background: '#FAF7ED',
        secondary: '#D99079',
      },
      animation: {
        wiggle: 'wiggle 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
