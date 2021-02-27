module.exports = {
  root: true,
  env: {
    es7: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};
