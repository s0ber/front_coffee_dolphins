import {SET_CATEGORIES, EDIT_CATEGORY, CANCEL_EDIT_CATEGORY, UPDATE_CATEGORY, DESTROY_CATEGORY} from 'actions'
import findItemById from 'helpers/findItemById'
import updateItemInList from 'helpers/updateItemInList'
import removeItemFromList from 'helpers/removeItemFromList'

export default function(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload
    case EDIT_CATEGORY:
      return updateItemInList(state, action.payload, {_edited: true})
    case CANCEL_EDIT_CATEGORY:
      return updateItemInList(state, action.payload, {_edited: false})
    case UPDATE_CATEGORY:
      return updateItemInList(state, action.payload)
    case DESTROY_CATEGORY:
      const categoryId = action.payload
      return removeItemFromList(state, categoryId)
    default:
      return state
  }
}
