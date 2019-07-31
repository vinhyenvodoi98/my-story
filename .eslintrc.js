module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "jsx-quotes": ["error", "prefer-single"],
    "eol-last": ["error", "always"],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "space-before-function-paren": ["error", "never"],
    "no-multiple-empty-lines": "error",
    "no-extend-native": ["error", { exceptions: ["String"] }],
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
