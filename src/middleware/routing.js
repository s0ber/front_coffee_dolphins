import {tinyActions, utils} from 'redux-tiny-router'
import routes from 'routes/routes'
import paths from 'routes/paths'
import changePage from 'action_creators/changePage'

export default function routing({dispatch, getState}) {
  const routesList = Object.keys(routes).map((k) => routes[k])
  utils.setRoutes(routesList)

  const defaultPath = paths.POSITIONS_PATH()

  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        next(action)

        if (action.router.url == '/') {
          return dispatch(tinyActions.navigateTo(defaultPath))
        } else {
          return dispatch(changePage(action.router.paths[1] || 'positions'))
        }
      }

      return (next(action))
    }
  }
}
