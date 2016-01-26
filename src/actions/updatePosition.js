import put from 'utils/put'
import {UPDATE_POSITION} from 'actions'
import cancelEditPosition from 'actions/cancelEditPosition'

export default function(position) {
  return (dispatch) => {
    return put(`/positions/${position.id}`, {position}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_POSITION,
            payload: position
          })

          dispatch(cancelEditPosition(position))
        }
      })
  }
}
