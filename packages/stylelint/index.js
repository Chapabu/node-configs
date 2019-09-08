module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-a11y/recommended',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'selector-max-id': 0
  }
};
