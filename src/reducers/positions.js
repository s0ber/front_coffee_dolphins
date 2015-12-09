import {UPDATE_POSITIONS} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_POSITIONS:
      return action.payload
    default:
      return state
  }
}
