import {SET_POSITIONS, SET_POSITION, EDIT_POSITION, CANCEL_EDIT_POSITION, UPDATE_POSITION, DESTROY_POSITION} from 'actions'
import updateItemInList from 'helpers/updateItemInList'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case SET_POSITIONS:
      return action.payload
    case SET_POSITION:
      return [action.payload]
    case EDIT_POSITION:
      return updateItemInList(state, action.payload, {_edited: true})
    case CANCEL_EDIT_POSITION:
      return updateItemInList(state, action.payload, {_edited: false})
    case UPDATE_POSITION:
      return updateItemInList(state, action.payload)
    case DESTROY_POSITION:
      const positionId = action.payload
      return removeItemFromList(state, positionId)
    default:
      return state
  }
}
