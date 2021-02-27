module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
  },
  env: {
    es6: true,
    node: true,
  },
  ignoreStrings: true,
  ignoreTemplateLiterals: true,
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};
