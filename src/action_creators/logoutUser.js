import post from 'utils/api/post'
import {LOGOUT_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'
import showFlashMessage from './showFlashMessage'

export default function() {
  return (dispatch) => {
    return post('current_user#logout').then((res) => {
      res = res.current_user_logout
      if (!res.status) {
        dispatch({type: LOGOUT_USER})
        if (res.message) {
          dispatch(showFlashMessage(res.message))
        }
        dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
      }
    })
  }
}
