import get from 'utils/api/get'
import {CURRENT_USER_UPDATED, CURRENT_USER_REQUESTED} from 'actions'

function updateCurrentUser(currentUser) {
}

export default function() {
  return function(dispatch) {
    dispatch({type: CURRENT_USER_REQUESTED})

    return get('current_user#show').then((res) => {
      if (res.current_user_show && res.current_user_show.body) {
        const currentUser = res.current_user_show.body[0]

        dispatch({
          type: CURRENT_USER_UPDATED,
          payload: currentUser
        })
      }
    })
  }
}