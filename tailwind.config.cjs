/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  // Learn more at https://daisyui.com/docs/config/
  daisyui: {
    styled: true,
    themes: [ "dracula"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
