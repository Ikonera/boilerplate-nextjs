module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#29C5A8",
      primaryLight: "#88E7D5",
      primaryDark: "#135D50",
      secondary: "#595A67",
      secondaryLight: "#9A9BA7",
      secondaryDark: "#1F1F23"
    },
    fontFamily: {
      normal: ["Lato-Regular"],
      bold: ["Lato-Bold"],
      black: ["Lato-Black"],
      thin: ["Lato-Thin"],
      italic: ["Lato-Italic"],
      medium: ["Lato-Medium"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
