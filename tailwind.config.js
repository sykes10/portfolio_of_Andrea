module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      fontSize: {
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
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
