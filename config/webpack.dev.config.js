const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '../dev'),
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ],
});