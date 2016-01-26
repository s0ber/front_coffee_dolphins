import {CANCEL_EDIT_USER} from 'actions'

export default function(userId) {
  return {
    type: CANCEL_EDIT_USER,
    payload: userId
  }
}
