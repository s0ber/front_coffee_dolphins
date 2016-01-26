import {SET_USERS, EDIT_USER, CANCEL_EDIT_USER, DESTROY_USER} from 'actions'
import updateItemInList from 'helpers/updateItemInList'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case(SET_USERS):
      return action.payload
    case EDIT_USER:
      return updateItemInList(state, action.payload, {_edited: true})
    case CANCEL_EDIT_USER:
      return updateItemInList(state, action.payload, {_edited: false})
    case DESTROY_USER:
      const userId = action.payload
      return removeItemFromList(state, userId)
    default:
      return state
  }
}
