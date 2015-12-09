import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'
import changePageId from 'action_creators/changePageId'
import processCurrentRoute from './processCurrentRoute'

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

  processCurrentRoute(currentRoute, dispatch).then((pageId) => {
    dispatch(changePageId(pageId))
  })
}
