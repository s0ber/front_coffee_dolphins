## Technology Stack

* Babel.js (ES6 syntax,https://github.com/babel/babel)
* Redux (flux stores, https://github.com/gaearon/redux)
* React (rendering, https://github.com/facebook/react)
* Webpack (build tool and dependencies management, https://github.com/webpack/webpack)
* koa.js (node.js web framework, https://github.com/koajs/koa)
* react hot loader (hot reloading of react components, https://github.com/gaearon/react-hot-loader)
* js-fns (pluggable functions, https://github.com/js-fns)
* karma.js (tests runner, https://github.com/webpack/karma-webpack)
* mocha.js, chai.js, sinon.js (testing utils)
* PostCss (autoprefixer, css vars, css4, etc.)
* ESLint (javascript code linter, https://github.com/eslint/eslint, https://github.com/babel/babel-eslint, https://github.com/babel/eslint-plugin-babel, https://github.com/yannickcr/eslint-plugin-react)
* superagent (ajax requests, https://github.com/visionmedia/superagent)

### Redux ecosystem

* redux
* react-redux (react bindings)
* redux-tiny-router (routing, https://github.com/Agamennon/redux-tiny-router)
* redux-form (integrate form components with redux store, https://github.com/erikras/redux-form)
* normalizr (normalize nested responses, https://github.com/gaearon/normalizr)
* reselect (pass redux state branches to react components, https://github.com/rackt/reselect)
* immutable.js (https://github.com/facebook/immutable-js)
* redux-thunk (dispatch async actions, https://github.com/gaearon/redux-thunk)
* redux-logger (log actions in console, https://github.com/fcomb/redux-logger)
* redux-immutable-state-invariant (warn about mutating state, https://github.com/leoasis/redux-immutable-state-invariant)
* redux-devtools (development tools, https://github.com/gaearon/redux-devtools)

### Redux conventions

* FSA (https://github.com/acdlite/flux-standard-action)

## Features Plan

### Environment preparations (Nov 30—Dec 2)
- [ ] integrate Immutable.js
- [ ] integrate normalizr.js
- [ ] integrate Karma runner
- [ ] try using react test utils

### Users (Dec 3—6)
- [ ] authorization
- [ ] login form
- [ ] show users list
- [ ] edit user
- [ ] delete user
- [ ] add new user

### Landing Categories (Dec 7—8)
- [ ] show categories list
- [ ] edit category
- [ ] delete category
- [ ] add new category

### Positions (initial stuff, Dec 9—10)
- [ ] show positions list
- [ ] edit position
- [ ] delete position
- [ ] add new position
- [ ] paginate positions
- [ ] show position

### Landings (initial stuff, Dec 11)
- [ ] show landings list
- [ ] delete landing

### Positions (advanced stuff, Dec 14—20)
- [ ] like positions
- [ ] show favorite positions
- [ ] create landing for position
- [ ] import positions
- [ ] show position notes
- [ ] edit notes
- [ ] delete notes
- [ ] add new notes

### Landings (advanced stuff, Dec 21—27)
- [ ] edit landings
- [ ] manage landing images (with DND upload and DND sorting)
- [ ] integrate CodeMirror
