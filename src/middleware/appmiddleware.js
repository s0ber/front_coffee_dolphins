import {tinyActions, utils} from 'redux-tiny-router';

export default function appMiddleware({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        const {url, path} = action.router;
        console.log(`URL: ${url}, PATH: ${path}`);

        return next(action);
      }

      return (next(action));
    }
  }
}
