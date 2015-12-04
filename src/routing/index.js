import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'
import changePageId from 'action_creators/changePageId'

export function processRouteChange(router, currentUser, dispatch) {
  const currentRoute = router.src
  const isAuthorized = currentUser && currentUser.role !== 'Anonymous'

  if (!isAuthorized) {
    if (currentRoute !== routes.LOGIN) {
      return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
    }
  } else if (currentRoute == routes.LOGIN || currentRoute == routes.ROOT) {
    const defaultPath = paths.POSITIONS_PATH()
    return dispatch(tinyActions.navigateTo(defaultPath))
  }

  let pageId

  switch (currentRoute) {
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
