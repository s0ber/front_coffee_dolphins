import {SET_POSITIONS, SET_POSITION, DESTROY_POSITION} from 'actions'

function findPosition(state, positionId) {
  const index = state.findIndex((position) => position.id == action.payload)
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_POSITIONS:
      return action.payload
    case SET_POSITION:
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
