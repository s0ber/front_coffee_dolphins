import {EDIT_CATEGORY} from 'actions'

export default function(category) {
  return {
    type: EDIT_CATEGORY,
    payload: category
  }
}
