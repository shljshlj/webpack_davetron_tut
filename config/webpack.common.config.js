const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html'
    }),
  ],
};