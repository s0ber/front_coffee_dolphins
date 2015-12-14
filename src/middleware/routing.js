import {processRouteChange} from 'routing'

export default function routing({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        processRouteChange(next, action, getState, dispatch)
        return
      }

      return (next(action))
    }
  }
}
