/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#8e37c4',
        secondary: '#6162d3',
        tertiary: '#6fc4e8',
        extra: '#6b21a8',
        'mt-light': '#F7F3ED',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0',
          },
          '30%': {
            width: '28ch',
          },
          '60%': {
            width: '28ch',
          },
          '90%': {
            width: '0',
          },
          '100%': {
            width: '0',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
        },
      },
      animation: {
        typing: 'typing 6s steps(28) infinite, blink .7s infinite',
      },
    },
  },
  plugins: [],
}
