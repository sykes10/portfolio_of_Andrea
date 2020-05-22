/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      pt: [`'PT Mono'`, 'monospace']
      // rubik: [`'Rubik'`, 'sans-serif']
    },
    extend: {
      colors: {
        main: {
          dark: '#B0667D',
          default: '#ffadc2'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
