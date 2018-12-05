module.exports = {
  extends: 'airbnb',
  plugins: [],
  rules: {
    'func-names': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    strict: 'off',
    'arrow-parens': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'warn',
    'no-unused-expressions': 'warn',
    'no-underscore-dangle': 'off'
  },
  env: {
    mocha: true
  }
};
