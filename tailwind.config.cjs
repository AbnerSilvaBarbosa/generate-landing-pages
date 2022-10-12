/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      'sm': {"min":'310px'},
      'md': {"min":'668px'},
      'lg': {"min":'924px'},
      'xl': {"min":'1080px'},
      '2xl': {"min":'1336px'},
    },
    extend: {},
  },
  plugins: [],
}
