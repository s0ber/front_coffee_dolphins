import {DESTROY_POSITION} from 'actions'
import destroy from 'utils/destroy'
import showFlashMessage from 'actions/showFlashMessage'

export default function(positionId) {
  return (dispatch) => {
    destroy(`/positions/${positionId}`).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_POSITION,
          payload: positionId
        })
        if (res.notice) {
          dispatch(showFlashMessage(res.notice))
        }
      }
    })
  }
}
