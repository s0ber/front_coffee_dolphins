import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'
import setUsers from 'actions/setUsers'
import updateCategories from 'actions/updateCategories'
import setPositions from 'actions/setPositions'
import setPosition from 'actions/setPosition'

import updatePagination from 'actions/updatePagination'
import resetPagination from 'actions/resetPagination'

import changeCurrentPosition from 'actions/changeCurrentPosition'
import updateLandings from 'actions/updateLandings'

export default function(router, data, dispatch) {
  switch (router.src) {
    case routes.POSITIONS:
      dispatch(setPositions(data.positions))
      dispatch(changeCurrentPosition(data.currentPositionId))
      break
    case routes.POSITION:
      dispatch(setPosition(data.position))
      dispatch(changeCurrentPosition(data.currentPositionId))
      break
    case routes.CATEGORIES:
      dispatch(updateCategories(data.categories))
      break
    case routes.LANDINGS:
      dispatch(updateLandings(data.landings))
      break
    case routes.USERS:
      dispatch(setUsers(data.users))
      break
    case routes.EXAMPLES:
    case routes.FILTERED_EXAMPLES:
      break
    case routes.LOGIN:
      break
  }

  if (data.pagination) {
    dispatch(updatePagination(data.pagination))
  } else {
    dispatch(resetPagination())
  }

  dispatch(changePageId(data.pageId))
}
