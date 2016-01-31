import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'

import getCurrentUser from './requests/get_current_user'
import setCurrentUser from 'actions/currentUser/setCurrentUser'

import fetchDataForRoute from './fetchDataForRoute'
import processCurrentRoute from './processCurrentRoute'

function loadUser(state, dispatch) {
  return new Promise((resolve, reject) => {
    if (state.currentUser) {
      resolve()
    } else {
      getCurrentUser().then((currentUser) => {
        dispatch(setCurrentUser(currentUser))
        resolve()
      })
    }
  })
}

export function processRouteChange(next, action, getState, dispatch) {
  const {router} = action
  const currentRoute = router.src

  if (action.option == 'popEvent') {
    next(action)
  }

  loadUser(getState(), dispatch).then(() => {
    const {currentUser} = getState()
    const isAuthorized = currentUser && currentUser.role !== 'Anonymous'

    if (!isAuthorized) {
      if (currentRoute !== routes.LOGIN) {
        return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
      }
    } else if (currentRoute == routes.LOGIN || currentRoute == routes.ROOT) {
      const defaultPath = paths.POSITIONS_PATH()
      return dispatch(tinyActions.navigateTo(defaultPath))
    }

    fetchDataForRoute(router).then((data) => {
      if (!(action.option == 'popEvent')) {
        next(action)
      }

      processCurrentRoute(router, data, dispatch)
    })
  })
}
