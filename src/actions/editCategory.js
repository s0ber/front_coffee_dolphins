import {EDIT_CATEGORY} from 'action'

export default function(categoryId) {
  return {
    type: EDIT_CATEGORY,
    payload: categoryId
  }
}
