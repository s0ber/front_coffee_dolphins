import {UPDATE_LANDINGS} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_LANDINGS:
      return action.payload
    default:
      return state
  }
}
