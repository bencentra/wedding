module.exports = {
  purge: [
    './**/*.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'cursive': ['Dancing Script', 'cursive'],
      'sans': ['Outfit', 'sans-serif']
    },
    extend: {
      keyframes: {
        wiggle: {
          '60%, 80%, 100%': { transform: 'rotate(0deg)' },
          '70%': { transform: 'rotate(3deg)' },
          '90%': { transform: 'rotate(-3deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
