import {DESTROY_LANDING} from 'actions'
import destroy from 'utils/destroy'
import showFlashMessage from 'actions/showFlashMessage'

export default function(landingId) {
  return (dispatch) => {
    destroy(`/landings/${landingId}`).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_LANDING,
          payload: landingId
        })
        if (res.notice) {
          dispatch(showFlashMessage(res.notice))
        }
      }
    })
  }
}