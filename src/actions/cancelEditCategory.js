import {CANCEL_EDIT_CATEGORY} from 'actions'

export default function(categoryId) {
  return {
    type: CANCEL_EDIT_CATEGORY,
    payload: categoryId
  }
}
