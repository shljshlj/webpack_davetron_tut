const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dev'),
    filename: 'bundle.js',
  }, // 'path' - relative to where the webpack configuration lives <config dir in this case>!
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dev'),
    hot: true,
    open: true
  }
});