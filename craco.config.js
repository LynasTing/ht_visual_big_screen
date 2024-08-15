/* eslint-env node */

const path = require('path');
const CracoCSSModules = require('craco-css-modules');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    {
      plugin: CracoCSSModules
    }
  ]
};
