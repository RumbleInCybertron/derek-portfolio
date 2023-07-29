/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  important: true,
  purge: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      red: colors.rose,
      white: colors.white,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        bg: "#000a1f",
        primary: "#ad20c9",
        secondary: "#e60e84",
        'dark-600': '#222',
        'dark-200': '#e5e7eb',
        'dark-100': '#f5f6f7',
        'purple-600': '#8e24aa',
        'yellow-600': '#f9d13e',
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#009ac5",
      },
      fontFamily: {
        Poppins: ['Poppins, sans-serif'],
        monospace: ["DM Mono", "monospace"],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1125px',
          xl: '1920px',
          '2xl': '2560px',
        },
      },
      animation: {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position':'center top'
          },
          '50%': {
            'background-size':'400% 400%',
            'background-position':'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position':'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position':'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position':'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position':'right center'
          }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'willChange': {
          'projectCard': 'border-color, opacity, transform',
        }
      },
      rotate: {
        '360': '360deg'
      }
    },
  },
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
