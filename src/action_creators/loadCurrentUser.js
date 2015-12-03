import get from 'utils/api/get'
import {CURRENT_USER_UPDATED, CURRENT_USER_REQUESTED} from 'actions'

function requestCurrentUser() {
  return {
    type: CURRENT_USER_REQUESTED
  }
}

function updateCurrentUser(currentUser) {
  return {
    type: CURRENT_USER_UPDATED,
    payload: currentUser
  }
}

export default function() {
  return function(dispatch) {
    dispatch(requestCurrentUser())

    return get('current_user#show').then((res) => {
      if (res.current_user_show && res.current_user_show.body) {
        const currentUser = res.current_user_show.body[0]
        dispatch(updateCurrentUser(currentUser))
      }
    })
  }
}
