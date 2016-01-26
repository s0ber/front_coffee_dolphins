import {SET_LANDINGS, DESTROY_LANDING} from 'actions'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case SET_LANDINGS:
      return action.payload
    case DESTROY_LANDING:
      const landingId = action.payload
      return removeItemFromList(state, landingId)
    default:
      return state
  }
}
