import {UPDATE_POSITIONS, UPDATE_POSITION, DESTROY_POSITION} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_POSITIONS:
      return action.payload
    case UPDATE_POSITION:
      return [action.payload]
    case DESTROY_POSITION:
      const positionIndex = state.findIndex((position) => position.id == action.payload)

      if (positionIndex !== -1) {
        return [
          ...state.slice(0, positionIndex),
          ...state.slice(positionIndex + 1)
        ]
      } else {
        return state
      }
    default:
      return state
  }
}
