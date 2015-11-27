import routes from './routes'
import createPathFn from 'utils/create_path_fn'

const routesPaths = {}
Object.keys(routes).forEach((key) => routesPaths[key] = createPathFn(routes[key]))

export default routesPaths
