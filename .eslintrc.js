module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', {
      vars: 'all', args: 'none', caughtErrors: 'none', ignoreRestSiblings: false
    }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }]
  }
}
