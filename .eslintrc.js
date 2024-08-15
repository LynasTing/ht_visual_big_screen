module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: true
      }
    ],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    // React v17.0 以后页面无需import React，因此加入下面两行配置，让eslint兼容 React v17.0 以上的版本
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      defaultVersion: '18.3.1'
    }
  }
};
