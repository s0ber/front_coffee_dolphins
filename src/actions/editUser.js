import {EDIT_USER} from 'action'

export default function(userId) {
  return {
    type: EDIT_USER,
    payload: userId
  }
}
