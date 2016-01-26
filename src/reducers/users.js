import {SET_USERS, DESTROY_USER} from 'actions'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case(SET_USERS):
      return action.payload
    case DESTROY_USER:
      const userId = action.payload
      return removeItemFromList(state, userId)
    default:
      return state
  }
}
