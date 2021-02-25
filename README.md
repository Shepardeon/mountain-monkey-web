# Site web Mountain Monkey

## Install
```sh
git clone https://github.com/Shepardeon/mountain-monkey-web
npm install
```

## Included
The following `npm` packages are included as dev dependencies:
* <code>[bulma](https://bulma.io/)</code>
* <code>[node-sass](https://github.com/sass/node-sass)</code> to compile your own Sass file
* <code>[postcss-cli](https://github.com/postcss/postcss-cli)</code> and <code>[autoprefixer](https://github.com/postcss/autoprefixer)</code> to add support for older browsers
* <code>[babel-cli](https://babeljs.io/docs/usage/cli/)</code>, <code>[babel-preset-env](https://github.com/babel/babel-preset-env)</code> and <code>[babel-preset-es2015-ie](https://github.com/jmcriffey/babel-preset-es2015-ie)</code> for compiling ES6 JavaScript files

## Which files to work with?
* `.babelrc` contains the configuration for [Babel](https://babeljs.io/)
* `index.html` is the main HTML5 file.
* `_sass/main.scss` contains the css which is then compiled to `css/main.css`
* `_javascript/main.js` contains the main JS script that compiles to `lib/main.js`

To compile run:
```
npm start
```

`npm start` will **watch** your changes. Editing `_sass/main.scss` or `_javascript/main.js` will trigger a compilation. You can then monitor your changes upon reloading your browser.