/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './**.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/ui/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    colors: {
      ...colors,
      'card-color': '#fff',
      'card-color-dark': '#444',
      bodyColor: '#e5e7eb',
      'bodyColor-dark': '#222',
      textPrimary: '#000',
      'textPrimary-dark': '#fff',
      textSecondary: '#777',
      'textSecondary-dark': '#ccc',
      violet: 'rgb(96 96 130)',
    },
    gridAutoRows: {
      'gridLayout': 'minmax(200px,1fr)',
      'rowsLayout':'minmax(200px, min-content)',
    },
    gridTemplateRows: {
      // Complex site-specific row configuration
      'gridLayout': 'repeat(auto-fit,minmax(200px,1fr))',
      'rowsLayout':'repeat(auto-fit,minmax(200px,min-content))',
    },
    gridTemplateColumns: {
      // Complex site-specific column configuration
      'gridLayout': 'repeat(auto-fit,minmax(300px,1fr))',
      'rowsLayout':'1fr',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bottom: {
          '0%': { bottom:'-60px' },
          '100%': { bottom:'17px' },
        },
      },
      animation: {
        'fly-up': ' 1s ease-in-out 0s normal forwards bottom',
        'fly-down': '1s ease-in-out 4s reverse forwards bottom',
        /* [animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction] */
      }
    },
  },
};
