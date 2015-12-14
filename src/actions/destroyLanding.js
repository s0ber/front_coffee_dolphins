import {DESTROY_LANDING} from 'actions'
import post from 'utils/api/post'
import showFlashMessage from 'actions/showFlashMessage'

export default function(landingId) {
  return (dispatch) => {
    post('landings#destroy', {data: {id: landingId}}).then((res) => {
      if (!res.landings_destroy.status) {
        dispatch({
          type: DESTROY_LANDING,
          payload: res.landings_destroy.body.id
        })
        if (res.landings_destroy.message) {
          dispatch(showFlashMessage(res.landings_destroy.message))
        }
      }
    })
  }
}
