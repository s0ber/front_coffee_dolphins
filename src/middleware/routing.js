import {tinyActions, utils} from 'redux-tiny-router'
import routes from 'routes/routes'
import paths from 'routes/paths'
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
            case routes.POSITIONS_PATH:
              pageId = 'positions'
              break
            case routes.CATEGORIES_PATH:
              pageId = 'categories'
              break
            case routes.LANDINGS_PATH:
              pageId = 'landings'
              break
            case routes.USERS_PATH:
              pageId = 'users'
              break
            case routes.EXAMPLES_PATH:
            case routes.FILTERED_EXAMPLES_PATH:
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
