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

- _Loaders can load anything_
  - By default, webpack assumes that a file loaded with an __import__ statement is JavaScript and that we are trying to write modular code. We can change that default by telling webpack to use a specific _loader_.
  - The __module__ section controls how webpack treats different types of modules we might import
  - `/development/` _style-loader_ dynamically creates a `<style>` tag in our DOM and put the CSS in there
  - `/production/` _mini-css-extract-plugin_ extracts CSS into separate output files. It creates a CSS file per JS file which contains CSS. We want the browser to load CSS separately, so it can download both the __CSS and the JS in parallel__.

- `publicPath` is the relative path of the resource to the context
  - e.g. for ./css/admin/main.css the publicPath will be ../../
  -  while for ./css/main.css the publicPath will be ../