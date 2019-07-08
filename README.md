WEBPACK4-PLUS-BOOTSTRAP-STARTERKIT

Simple webpack4 workflow for multibrowser compatible webapplications including live-dev-server (and hotmodule), fully customizable bootstrap 4.0 babel compiling and entrypoints as easy-in-use starting point to implement frameworks such as react, vue or angular into your devchain.

>### The actual release features: 

 > - Compilation of ES6 into ES5
 > - Converting SASS into CSS
 > - Bootstrap 4
 > - Image loading and optimization
 > - Webpack dev server
 > - HMR for hot reloading and faster development
 
> ### The kit is production ready.

## GET STARTED
1. Clone the project using `git clone`
2. Go to the project root directory using `cd yourprojectname`
3. Run `npm install` to setup node_modules



## DEVELOPMENT

### ENTRY POINTS

#### ./src/index.html 
(This starter kit contains various demo elements to easily check your customizations)

#### ./src/app.js
(Main entry for bundling your build)

#### ./src/scss/style.scss
(Main entry point to bundle your stylesheets)

### CUSTOM STYLING

#### ./src/scss/app/main.scss
(Main sheet to apply custom styles)

#### ./src/scss/vendor/variables.scss
(Main sheet to override default bootstrap4 variables)



##### FYI: Live development server is running on development using [dev server](https://github.com/webpack/webpack-dev-server)

Run `yarn runboyrun` to start to webpack dev server using HMR 

## WATCHER 
Run `yarn thewatcher` to start file watching

## PRODUCTION 

Run `yarn likebob` to build project's all assets in `dist` folder.

----------------------
