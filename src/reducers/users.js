import {SET_USERS, DESTROY_USER} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case(SET_USERS):
      return action.payload
    case DESTROY_USER:
      const userIndex = state.findIndex((user) => user.id == action.payload)

      if (userIndex !== -1) {
        return [
          ...state.slice(0, userIndex),
          ...state.slice(userIndex + 1)
        ]
      } else {
        return state
      }
    default:
      return state
  }
}
