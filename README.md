# webpack tutorial
###### webpack v4.43.0 | webpack-cli v3.3.12

<br/>

- This project is following __David Copeland__'s tutorial __[Webpack from Nothing](https://what-problem-does-it-solve.com/webpack/index.html)__
- _App_: simple markdown previewer

<br/>

```js
// Install
yarn install

// Development
yarn webpack

// Production
yarn webpack:production

// Testing
yarn webpack:test
```

<br/>

## Lessons learned

- `publicPath` option is the relative path of the resource to the context
  - e.g. for _./css/admin/main.css_ the publicPath will be _../../_
  -  while for _./css/main.css_ the publicPath will be _../_
  
- _**Loaders** can load anything_
  - By default, webpack assumes that a file loaded with an `import` statement is JavaScript and that we are trying to write modular code. We can change that default by telling webpack to use a specific _loader_
  - The __module__ section controls how webpack treats different types of modules we might import
  - `/development/` __style-loader__ dynamically creates a `<style>` tag in our DOM and put the CSS in there
  - `/production/` __mini-css-extract-plugin__ extracts CSS into separate output files. It creates a CSS file per JS file which contains CSS. We want the browser to load CSS separately, so it can download both the _CSS and the JS in parallel_

- __Sourcemaps__
  - If a sourcemap file exists, browsers know to look at it when giving us a stack trace
  - The configuration option in webpack is called __devtool__