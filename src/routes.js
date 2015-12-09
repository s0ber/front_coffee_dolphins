import {utils} from 'redux-tiny-router'
import createPathFn from 'utils/create_path_fn'

const routes = {
  ROOT: '/',
  LOGIN: '/login',
  POSITIONS: '/positions',
  POSITION: '/positions/:id',
  CATEGORIES: '/categories',
  LANDINGS: '/landings',
  USERS: '/users',
  EXAMPLES: '/examples',
  FILTERED_EXAMPLES: '/examples/:filter'
}

const routesList = Object.keys(routes).map((k) => routes[k])
utils.setRoutes(routesList)

const paths = {}

Object.keys(routes).forEach((key) =>
  paths[key + '_PATH'] = createPathFn(routes[key])
)

export {routes, paths}
