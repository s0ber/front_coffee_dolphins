import {processRouteChange} from 'routing'
import loadCurrentUser from 'action_creators/loadCurrentUser'

function loadUser(state, dispatch) {
  return new Promise((resolve, reject) => {
    if (state.currentUser) {
      resolve()
    } else {
      dispatch(loadCurrentUser()).then(resolve)
    }
  })
}

export default function routing({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        next(action)
        loadUser(getState(), dispatch).then(() => {
          const {currentUser} = getState()
          processRouteChange(action.router, currentUser, dispatch)
        })
        return
      }

      return (next(action))
    }
  }
}
