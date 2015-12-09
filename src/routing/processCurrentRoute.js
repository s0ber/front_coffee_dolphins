import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'
import updateUsers from 'actions/updateUsers'
import updateCategories from 'actions/updateCategories'
import updatePositions from 'actions/updatePositions'
import updatePosition from 'actions/updatePosition'

import changeCurrentPosition from 'actions/changeCurrentPosition'
import updateLandings from 'actions/updateLandings'

export default function(router, data, dispatch) {
  switch (router.src) {
    case routes.POSITIONS:
      dispatch(updatePositions(data.positions))
      dispatch(changeCurrentPosition(data.currentPositionId))
      break
    case routes.POSITION:
      dispatch(updatePosition(data.position))
      dispatch(changeCurrentPosition(data.currentPositionId))
      break
    case routes.CATEGORIES:
      dispatch(updateCategories(data.categories))
      break
    case routes.LANDINGS:
      dispatch(updateLandings(data.landings))
      break
    case routes.USERS:
      dispatch(updateUsers(data.users))
      break
    case routes.EXAMPLES:
    case routes.FILTERED_EXAMPLES:
      break
    case routes.LOGIN:
      break
  }

  dispatch(changePageId(data.pageId))
}
