module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["montserratregular", "sans-serif"],
      display: ["montserratbold", "sans-serif"],
      semi: ["montserratsemibold", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#fff",
      primary: "#5ab578",
      secondary: "#1b242f",
      tertiary: "#242727",
      grey: "#f7f7f7",
      "light-blue": "#5a97b5",
      "accent-yellow": "#fd0",
      "accent-red": "#de532a",
      "accent-blue": "#3b5998",
      silver: "#777",
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
