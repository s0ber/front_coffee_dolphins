import {SET_LANDINGS, DESTROY_LANDING} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case SET_LANDINGS:
      return action.payload
    case DESTROY_LANDING:
      const landingIndex = state.findIndex((landing) => landing.id == action.payload)

      if (landingIndex !== -1) {
        return [
          ...state.slice(0, landingIndex),
          ...state.slice(landingIndex + 1)
        ]
      } else {
        return state
      }
    default:
      return state
  }
}
