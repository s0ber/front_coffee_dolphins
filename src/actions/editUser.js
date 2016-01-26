import {EDIT_USER} from 'actions'

export default function(userId) {
  return {
    type: EDIT_USER,
    payload: userId
  }
}
