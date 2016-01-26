import {SET_CATEGORIES, DESTROY_CATEGORY} from 'actions'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case(SET_CATEGORIES):
      return action.payload
    case DESTROY_CATEGORY:
      const categoryId = action.payload
      return removeItemFromList(state, categoryId)
    default:
      return state
  }
}
