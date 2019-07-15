# Another Webpack/React-Starter

This is yet another starter kit for projects where you want to use `Webpack`, `Babel`, `React/Redux`, `Jest` and some other dependencies I've found myself re-using again and again.

## No pre-installed type-checking

There is no type checking, so you can choose if you want to use `PropTypes`, `TypeScript` or something else.

## Folder-structure

This setup uses Atomic Design-principles for folder structure. 

You can read more about these here: http://bradfrost.com/blog/post/atomic-web-design/

## CSS

This setup is prepared for using SCSS and/or CSS. Naming a file `.module.scss` will generate module-specific CSS while files without this will generate general CSS (that can potentially conflict).

In production `autoprefixer` is used so no manually added browser-prefixes are required.

## Linting

`Eslint` along with `Prettier`. Make sure your code editor has support/plugins for Eslint and Prettier to avoid having to fix linting manually.

Every time you want to make a commit there is a check to make sure you don't commit code that has linting errors in them.

You can change the rules for linting in `.eslintrc.js`.

## Font Awesome

We're using Font Awesome for icons. Via Babel these are individually imported to make the final build smaller so you don't have to name these imports as this: 
```javascript
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
``` 

Leaving out the last `/faCog` will still only import the specifically used icons, thanks to Babel doing this for us. 

(See `babel.config.js` for details.)


## Testing

`Jest` along with `React-testing-library`. Configuration associated with Jest is found in `jest.config.js` and `src/setupTests.js`.

## Polyfills

Some commonly used polyfills are already installed, but you can add more to `polyfills.js`.

## Styleguidist

Used when you want to build components without having to load the entire application, or for overview of all existing components.

A wrapper for all components to render in styleguideist server is found in `src/rsg-components/Wrapper.js`.

## Babel 7

This project uses Babel 7 for transpiling JavaScript into production code. You can change the configuration in `babel.config.js`.

## Webpack 4

This project uses Webpack 4 for building and development. The configuration file `webpack.config.js` has all settings for development as well as production code.

## Scripts

| Command         | Effect          |
|-----------------|-----------------|
| `npm run dev` | Runs application in development-mode |
| `npm run build` | Builds application for production |
| `npm run build:analyze` | Builds application with bundle analyzer |
| `npm run test` | Runs test-runner in watch-mode |
| `npm run test:clear` | Clears Jest cache |
| `npm run text:coverage` | Gives test-coverage statistics |
| `npm run styleguide` | Launches the styleguide server |
| `npm run styleguide:build` | Builds the styleguide |
| `npm run lint` | Runs linter to check for errors |
| `npm run lint:fix` | Runs linter and fixes all automatically fixable errors |
| `npm run format` | Runs prettier and fixes formating errors |
| `npm run prettier` | Runs prettier to check for formating errors |
| `npm run validate` | Checks for linting and formatting errors combined |

## Author

Hanna Söderström
<contact@hannasoderstrom.com>
