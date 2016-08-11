module.exports = {
  extends: 'airbnb',
  plugins: [],
  rules: {
    'func-names': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    'no-multi-spaces': 'off',
    'no-underscore-dangle': 'off',

    // doesn't work in node v4 :(
    strict: 'off',
    'prefer-rest-params': 'off'
  },
  env: {
    mocha: true
  }
};
