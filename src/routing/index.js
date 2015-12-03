import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'
import changePageId from 'action_creators/changePageId'

export function processRouteChange(dispatch, getState, router) {
  const {currentUser} = getState()

  const defaultPath = paths.POSITIONS_PATH()
  const isAuthorized = currentUser && currentUser.role !== 'Anonymous'
  const currentRoute = getState().router.src

  if (currentRoute !== routes.LOGIN && !isAuthorized) {
    return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
  }

  if (currentRoute == routes.LOGIN && isAuthorized) {
    return dispatch(tinyActions.navigateTo(defaultPath))
  }

  if (router.url == '/') {
    return dispatch(tinyActions.navigateTo(defaultPath))
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
    case routes.LOGIN:
      pageId = 'login'
      break
    default:
      pageId = null
  }

  return dispatch(changePageId(pageId))
}
