import {routes} from 'routes'
import getPositions from './requests/get_positions'
import getPosition from './requests/get_position'
import getLandings from './requests/get_landings'
import getUsers from './requests/get_users'
import getCategories from './requests/get_categories'

export default function(router) {
  return new Promise((resolve, reject) => {
    let request
    let data

    switch (router.src) {
      case routes.POSITIONS:
        request = getPositions(router.query)
        break
      case routes.POSITION:
        request = getPosition(router.params.id)
        break
      case routes.CATEGORIES:
        request = getCategories()
        break
      case routes.LANDINGS:
        request = getLandings()
        break
      case routes.USERS:
        request = getUsers()
        break
      case routes.EXAMPLES:
      case routes.FILTERED_EXAMPLES:
        data = {pageId: 'examples'}
        break
      case routes.LOGIN:
        data = {pageId: 'login'}
        break
      default:
        data = {pageId: null}
    }

    if (request) {
      request.then((data) => { resolve(data) })
    } else {
      resolve(data)
    }
  })
}
