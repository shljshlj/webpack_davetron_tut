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

- `publicPath` vs `contentBase`: ~ _see this [explanation](https://stackoverflow.com/questions/62991326/difference-between-publicpath-and-contentbase-in-webpack) and [webpack docs](https://webpack.js.org/configuration/dev-server/)_
  - #### publicPath
      - `/production/` If we have a domain `example.com` and our app at `example.com/app/`, we use _publicPath_ to change the bundle output location from `/bundle.js` to, for example, `/app/bundle.js`
      - `/development/` If we serve app with __devServer__, we use _publicPath_ to tell devServer where to output the files, as in `http://localhost:8080/app/`
  - #### contentBase
    -  Used to tell the server where to serve static files from. For example, if we want to have some mp4 files be available in the app, but we don't want to run them through the bundle. These asset files never change, but they need to be available for the app.
        ```js
        // declare in the config file
        contentBase: path.join(__dirname, 'movies')

        // use in the app
        <video src="/movies/vacation.mp4">
        ```

- _**Loaders** can load anything_
  - By default, webpack assumes that a file loaded with an `import` statement is JavaScript and that we are trying to write modular code. We can change that default by telling webpack to use a specific _loader_
  - The __module__ section controls how webpack treats different types of modules we might import
  - `/development/` __style-loader__ dynamically creates a `<style>` tag in our DOM and put the CSS in there
  - `/production/` __mini-css-extract-plugin__ extracts CSS into separate output files. It creates a CSS file per JS file which contains CSS. We want the browser to load CSS separately, so it can download both the _CSS and the JS in parallel_

- __Sourcemaps__
  - If a sourcemap file exists, browsers know to look at it when giving us a stack trace
  - The configuration option in webpack is called __devtool__

- __Testing__
  - We can use `--watch` flag for continuous testing:
    ```js
    "webpack:test:server": "webpack $npm_package_config_webpack_args --env=test --watch",
    "jest:server": "jest test/bundle.test.js --watch"
    ```