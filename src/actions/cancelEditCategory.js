import {CANCEL_EDIT_CATEGORY} from 'action'

export default function(categoryId) {
  return {
    type: CANCEL_EDIT_CATEGORY,
    payload: categoryId
  }
}
