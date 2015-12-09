import {routes, paths} from 'routes'
import get from 'utils/api/get'
import loadUsers from 'action_creators/loadUsers'

export default function(currentRoute, dispatch) {
  return new Promise((resolve, reject) => {
    switch (currentRoute) {
      case routes.POSITIONS:
        resolve('positions')
        break
      case routes.CATEGORIES:
        resolve('categories')
        break
      case routes.LANDINGS:
        resolve('landings')
        break
      case routes.USERS:
        dispatch(loadUsers()).then((res) => { resolve('users') })
        break
      case routes.EXAMPLES:
      case routes.FILTERED_EXAMPLES:
        resolve('examples')
        break
      case routes.LOGIN:
        resolve('login')
        break
      default:
        resolve(null)
    }
  })
}
