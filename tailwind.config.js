module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        zoom: 'zoom 2s infinite'
      },
      keyframes: {
        zoom: {
          '0%, 100%': {
            transform: 'scale(1.2)'
          },
          '50%': {
            transform: 'scale(0.8)'
          },
        }
      },
      gridTemplateColumns: {
       'body': 'repeat(auto-fit, minmax(250px, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
