import {LOGIN_USER, LOGOUT_USER} from 'actions'

export default function(state = null, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.user
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}
