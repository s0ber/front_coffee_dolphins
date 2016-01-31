import put from 'utils/put'
import {UPDATE_CATEGORY} from 'actions'

export default function(category) {
  return (dispatch) => {
    return put(`/categories/${category.id}`, {category}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_CATEGORY,
            payload: category
          })
        }
      })
  }
}
