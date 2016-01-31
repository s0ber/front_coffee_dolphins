import put from 'utils/put'
import {UPDATE_POSITION} from 'actions'

export default function(position) {
  return (dispatch) => {
    return put(`/positions/${position.id}`, {position}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_POSITION,
            payload: position
          })
        }
      })
  }
}
