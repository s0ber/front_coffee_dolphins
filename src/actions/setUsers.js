import {SET_USERS} from 'actions'

export default function(users) {
  return {
    type: SET_USERS,
    payload: users
  }
}
