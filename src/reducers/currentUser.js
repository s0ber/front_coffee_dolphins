import {LOGIN_USER, LOGOUT_USER, CURRENT_USER_UPDATED} from 'actions'

export default function(state = null, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload
    case LOGOUT_USER:
      return null
    case CURRENT_USER_UPDATED:
      return action.payload || {id: 0, role: 'Anonymous'}
    default:
      return state
  }
}
