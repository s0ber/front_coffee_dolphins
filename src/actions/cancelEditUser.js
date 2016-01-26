import {CANCEL_EDIT_USER} from 'action'

export default function(userId) {
  return {
    type: CANCEL_EDIT_USER,
    payload: userId
  }
}
