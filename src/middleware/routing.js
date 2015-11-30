import {processRouteChange} from 'routing'

export default function routing({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        next(action)
        return processRouteChange(dispatch, getState, action.router)
      }

      return (next(action))
    }
  }
}
