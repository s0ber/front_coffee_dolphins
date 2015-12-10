import {UPDATE_POSITIONS, UPDATE_POSITION} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_POSITIONS:
      return action.payload
    case UPDATE_POSITION:
      return [action.payload]
    default:
      return state
  }
}
