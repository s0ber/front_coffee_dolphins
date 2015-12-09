import {UPDATE_CURRENT_USER} from 'actions'

export default function(currentUser) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: currentUser
  }
}
