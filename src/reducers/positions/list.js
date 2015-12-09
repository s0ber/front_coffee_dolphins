import {UPDATE_POSITIONS, UPDATE_POSITION} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_POSITIONS:
      return action.payload
    case UPDATE_POSITION:
      const positionIndex = state.findIndex((position) => { position.id == action.payload.id })

      if (positionIndex == -1) {
        return [action.payload]
      } else {
        return [
          ...state.slice(0, positionIndex),
          action.payload,
          ...state.slice(positionIndex + 1)
        ]
      }
    default:
      return state
  }
}
