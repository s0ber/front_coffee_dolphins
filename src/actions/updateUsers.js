import {UPDATE_USERS} from 'actions'

export default function(users) {
  return {
    type: UPDATE_USERS,
    payload: users
  }
}
