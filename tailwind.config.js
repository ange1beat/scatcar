module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'bg':'bg 10s ease infinite',
        'text':'showText 5s',
        'showFast':'showText 3s ease-in forwards',
        'fadeIn':'fadeIn 1s ease-in forwards',
        'textGr': 'bg 5s ease infinite'
    },
    'keyframes': {
        'bg': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'showText': {
          '0%': {
            'opacity':'0'
          },
          '50%': {
            'opacity':'0.5'
          },
          '50%': {
            'opacity':'1'
          },
        },
        'fadeIn': {
          '0%': {
            'opacity':'0'
          },
          '100%': {
            'opacity':'1'
          }
        },
    }
    },
  },
  plugins: [],
}