import {DESTROY_LANDING} from 'actions'
import destroy from 'utils/destroy'

export default function(landingId) {
  return (dispatch) => {
    destroy(`/landings/${landingId}`, dispatch).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_LANDING,
          payload: landingId
        })
      }
    })
  }
}
