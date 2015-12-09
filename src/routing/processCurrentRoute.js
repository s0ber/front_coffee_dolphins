import {routes, paths} from 'routes'
import get from 'utils/api/get'
import loadUsers from 'action_creators/loadUsers'
import loadCategories from 'action_creators/loadCategories'
import loadPositions from 'action_creators/loadPositions'
import loadLandings from 'action_creators/loadLandings'

export default function(currentRoute, dispatch) {
  return new Promise((resolve, reject) => {
    switch (currentRoute) {
      case routes.POSITIONS:
        dispatch(loadPositions()).then((res) => { resolve('positions') })
        break
      case routes.CATEGORIES:
        dispatch(loadCategories()).then((res) => { resolve('categories') })
        break
      case routes.LANDINGS:
        dispatch(loadLandings()).then((res) => { resolve('landings') })
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
