module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "import/newline-after-import": 0,
    "import/extensions": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-no-bind": 0,
    "max-len": 0,
    "react/self-closing-comp": 0,
    "prefer-spread": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
  "env": {
    "browser": true,
    "node": true
  }
};