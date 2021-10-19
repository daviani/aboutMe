module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue : {
          800 : '#2E3440',
          700 : '#4C566A',
          200 : '#D8DEE9',
          100 : '#fcfdff',
          50 : '#E5E9F0'
        }
      },
    },

  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
  },
};
