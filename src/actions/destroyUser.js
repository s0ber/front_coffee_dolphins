import {DESTROY_USER} from 'actions'
import destroy from 'utils/destroy'
import showFlashMessage from 'actions/showFlashMessage'

export default function(userId) {
  return (dispatch) => {
    destroy(`/users/${userId}`, dispatch).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_USER,
          payload: userId
        })
      }
    })
  }
}
