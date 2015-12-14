import {DESTROY_POSITION} from 'actions'
import post from 'utils/api/post'

export default function(positionId) {
  return (dispatch) => {
    post('positions#destroy', {data: {id: positionId}}).then((res) => {
      if (!res.positions_destroy.status) {
        dispatch({
          type: DESTROY_POSITION,
          payload: res.positions_destroy.body.id
        })
      }
    })
  }
}
