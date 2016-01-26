import {DESTROY_CATEGORY} from 'actions'
import destroy from 'utils/destroy'
import showFlashMessage from 'actions/showFlashMessage'

export default function(categoryId) {
  return (dispatch) => {
    destroy(`/categories/${categoryId}`, dispatch).then((res) => {
      if (res.success) {
        dispatch({
          type: DESTROY_CATEGORY,
          payload: categoryId
        })
      }
    })
  }
}
