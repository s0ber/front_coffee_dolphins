import get from 'utils/api/get'
import {UPDATE_LANDINGS} from 'actions'

export default function() {
  return function(dispatch) {
    return get('landings#show', {query: {included: ['position', 'category']}}).then((res) => {
      if (!res.landings_show.status) {
        dispatch({
          type: UPDATE_LANDINGS,
          payload: res.landings_show.body
        })
      }
    })
  }
}
