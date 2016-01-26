import {DESTROY_USER} from 'actions'
import destroy from 'utils/destroy'
import showFlashMessage from 'actions/showFlashMessage'

export default function(userId) {
  return (dispatch) => {
    destroy(`/users/${userId}`).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_USER,
          payload: userId
        })
        if (res.notice) {
          dispatch(showFlashMessage(res.notice))
        }
      }
    })
  }
}
