import createPathFn from 'utils/create_path_fn'

const routes = {
  POSITIONS: '/positions',
  CATEGORIES: '/categories',
  LANDINGS: '/landings',
  USERS: '/users',
  EXAMPLES: '/examples',
  FILTERED_EXAMPLES: '/examples/:filter'
}

const paths = {}

Object.keys(routes).forEach((key) =>
  paths[key + '_PATH'] = createPathFn(routes[key])
)

export {routes, paths}
