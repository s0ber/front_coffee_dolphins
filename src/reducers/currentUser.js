import {LOGIN_USER, LOGOUT_USER, CURRENT_USER_UPDATED} from 'actions'
const Anonymous = {id: 0, role: 'Anonymous'}

export default function(state = null, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload
    case LOGOUT_USER:
      return Anonymous
    case CURRENT_USER_UPDATED:
      return action.payload || Anonymous
    default:
      return state
  }
}
