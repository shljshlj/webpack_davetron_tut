const path = require('path');
const glob = require('glob');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

const testFiles = glob.sync('test/*.test.js').
  filter(function (element) {
    return element != "test/bundle.test.js";
  }).map(function (element) {
    return "./" + element;
  });

module.exports = merge(common, {
  entry: testFiles, // relative to where we are running webpack <root dir> / (also, has to start with './')!
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../test'), // relative to where the webpack configuration lives <config dir in this case>!
    filename: 'bundle.test.js'
  },
  mode: 'none',
});