module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['sans-serif'],
        roboto: ['sans-serif'],  // Adding Roboto font
      },
      colors: {
        primary: '#48A3FF', // Light Blue
        secondary: '#3D8BED', // Deep Blue
        background: '#ffffffb3', // Custom background color
      },
    },
  },
  plugins: [],
}
