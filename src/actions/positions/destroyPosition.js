import {DESTROY_POSITION} from 'actions'
import destroy from 'utils/destroy'

export default function(positionId) {
  return (dispatch) => {
    destroy(`/positions/${positionId}`, dispatch).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_POSITION,
          payload: positionId
        })
      }
    })
  }
}
