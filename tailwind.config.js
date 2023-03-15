/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1080px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        noto: 'Noto Sans JP',
        inter: 'Inter',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
