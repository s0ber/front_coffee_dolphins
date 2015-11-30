import {tinyActions, utils} from 'redux-tiny-router'
import {routes, paths} from 'routes'
import changePage from 'action_creators/changePage'

export default function routing({dispatch, getState}) {
  const routesList = Object.keys(routes).map((k) => routes[k])
  utils.setRoutes(routesList)

  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        next(action)

        if (action.router.url == '/') {
          return dispatch(tinyActions.navigateTo(paths.POSITIONS_PATH()))
        } else {
          let pageId

          switch (action.router.src) {
            case routes.POSITIONS:
              pageId = 'positions'
              break
            case routes.CATEGORIES:
              pageId = 'categories'
              break
            case routes.LANDINGS:
              pageId = 'landings'
              break
            case routes.USERS:
              pageId = 'users'
              break
            case routes.EXAMPLES:
            case routes.FILTERED_EXAMPLES:
              pageId = 'examples'
              break
            default:
              pageId = 'positions'
          }

          return dispatch(changePage(pageId))
        }
      }

      return (next(action))
    }
  }
}
