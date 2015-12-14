import {LOGIN_USER, LOGOUT_USER, UPDATE_CURRENT_USER} from 'actions'
const Anonymous = {id: 0, role: 'Anonymous'}

export default function(state = null, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload
    case LOGOUT_USER:
      return Anonymous
    case UPDATE_CURRENT_USER:
      return action.payload || Anonymous
    default:
      return state
  }
}
