const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '../dev'),
    filename: 'bundle.js',
  },
});