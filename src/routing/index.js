import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'
import changePage from 'action_creators/changePage'

export function processRouteChange(dispatch, getState, router) {
  const {currentUser} = getState()
  const currentRoute = getState().router.src

  if (currentRoute !== routes.LOGIN && !currentUser) {
    return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
  }

  if (router.url == '/') {
    return dispatch(tinyActions.navigateTo(paths.POSITIONS_PATH()))
  }

  let pageId

  switch (router.src) {
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