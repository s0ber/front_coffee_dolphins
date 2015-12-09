import get from 'utils/api/get'
import {UPDATE_CATEGORIES} from 'actions'

export default function() {
  return function(dispatch) {
    return get('categories#show').then((res) => {
      if (!res.categories_show.status) {
        dispatch({
          type: UPDATE_CATEGORIES,
          payload: res.categories_show.body
        })
      }
    })
  }
}
