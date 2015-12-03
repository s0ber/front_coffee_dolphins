import {processRouteChange} from 'routing'
import loadCurrentUser from 'action_creators/loadCurrentUser'

export default function routing({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        next(action)
        const currentUser = getState().currentUser

        if (currentUser) {
          processRouteChange(dispatch, getState, action.router)
        } else {
          dispatch(loadCurrentUser()).then(() => {
            processRouteChange(dispatch, getState, action.router)
          })
        }

        return
      }

      return (next(action))
    }
  }
}
