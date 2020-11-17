const path = require('path');
const glob = require('glob');

const testFiles = glob.sync('test/*.test.js').
  filter(function (element) {
    return element != "test/bundle.test.js";
  }).map(function (element) {
    return "./" + element;
  });

module.exports = {
  entry: testFiles, // relative to where we are running webpack <root dir> / (also, has to start with './')!
  output: {
    path: path.resolve(__dirname, '.'), // relative to where the webpack configuration lives <test dir in this case>!
    filename: 'bundle.test.js'
  },
  mode: 'none',
};