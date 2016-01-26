import {SET_POSITIONS, SET_POSITION, DESTROY_POSITION} from 'actions'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case SET_POSITIONS:
      return action.payload
    case SET_POSITION:
      return [action.payload]
    case DESTROY_POSITION:
      const positionId = action.payload
      return removeItemFromList(state, positionId)
    default:
      return state
  }
}
