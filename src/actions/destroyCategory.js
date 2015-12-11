import {DESTROY_CATEGORY} from 'actions'
import post from 'utils/api/post'
import showFlashMessage from 'actions/showFlashMessage'

export default function(categoryId) {
  return (dispatch) => {
    post('categories#destroy', {data: {id: categoryId}}).then((res) => {
      if (!res.categories_destroy.status) {
        dispatch({
          type: DESTROY_CATEGORY,
          payload: res.categories_destroy.body.id
        })
        if (res.categories_destroy.message) {
          dispatch(showFlashMessage(res.categories_destroy.message))
        }
      }
    })
  }
}
