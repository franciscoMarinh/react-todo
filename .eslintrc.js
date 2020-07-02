module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
