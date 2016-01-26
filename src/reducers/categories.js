import {SET_CATEGORIES, DESTROY_CATEGORY} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case(SET_CATEGORIES):
      return action.payload
    case DESTROY_CATEGORY:
      const categoryIndex = state.findIndex((category) => category.id == action.payload)

      if (categoryIndex !== -1) {
        return [
          ...state.slice(0, categoryIndex),
          ...state.slice(categoryIndex + 1)
        ]
      } else {
        return state
      }
    default:
      return state
  }
}
