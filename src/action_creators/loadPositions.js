import get from 'utils/api/get'
import {UPDATE_POSITIONS} from 'actions'

export default function() {
  return function(dispatch) {
    return get('positions#show', {query: {included: 'search_keywords'}}).then((res) => {
      if (!res.positions_show.status) {
        dispatch({
          type: UPDATE_POSITIONS,
          payload: res.positions_show.body
        })
      }
    })
  }
}
