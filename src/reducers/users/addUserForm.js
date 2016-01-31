import {ADD_USER, CANCEL_ADD_USER, CREATE_USER} from 'actions'

export default function(state = false, action) {
  switch (action.type) {
    case ADD_USER:
      return true
    case CREATE_USER, CANCEL_ADD_USER:
      return false
    default:
      return state
  }
}
