import {LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER, UPDATE_USER} from 'actions'
const Anonymous = {id: 0, role: 'Anonymous'}

export default function(state = null, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload
    case LOGOUT_USER:
      return Anonymous
    case SET_CURRENT_USER:
      return action.payload || Anonymous
    case UPDATE_USER:
      if (action.payload.id == state.id) {
        return Object.assign({}, state, action.payload)
      } else {
        return state
      }
    default:
      return state
  }
}
