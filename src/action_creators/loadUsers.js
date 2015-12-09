import get from 'utils/api/get'
import {UPDATE_USERS} from 'actions'

export default function() {
  return function(dispatch) {
    return get('users#show').then((res) => {
      if (!res.users_show.status) {
        dispatch({
          type: UPDATE_USERS,
          payload: res.users_show.body
        })
      }
    })
  }
}

