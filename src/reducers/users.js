import {SHOW_USERS} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case(SHOW_USERS):
      return action.payload
    default:
      return state
  }
}
