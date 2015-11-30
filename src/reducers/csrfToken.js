import {UPDATE_CSRF_TOKEN} from 'actions'

export default function(state = null, action = {}) {
  if (action.type == UPDATE_CSRF_TOKEN) {
    return action.type.payload
  } else {
    return state
  }
}
