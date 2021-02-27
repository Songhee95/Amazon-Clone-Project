module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
  },
  env: {
    node: true,
  },
  extends: "react-app",
  rules: {
    quotes: ["error", "double"],
  },
};
