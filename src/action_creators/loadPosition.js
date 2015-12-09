import get from 'utils/api/get'
import {UPDATE_POSITION} from 'actions'

export default function(id) {
  return function(dispatch) {
    return get('positions#show', {query: {id, included: 'search_keywords'}}).then((res) => {
      if (!res.positions_show.status) {
        dispatch({
          type: UPDATE_POSITION,
          payload: res.positions_show.body
        })
      }
    })
  }
}
