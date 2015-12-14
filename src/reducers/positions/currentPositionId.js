import {CHANGE_CURRENT_POSITION_ID} from 'actions'

export default function(state = null, action) {
  switch (action.type) {
    case CHANGE_CURRENT_POSITION_ID:
      return action.payload
    default:
      return state
  }
}
