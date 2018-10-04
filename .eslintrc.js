module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", "tab", { "MemberExpression": 0 }],
    "no-tabs": 0,
    "semi": [2, "always"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
