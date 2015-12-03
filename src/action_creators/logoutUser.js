import post from 'utils/api/post'
import {LOGOUT_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'

export default function() {
  return (dispatch) => {
    return post('current_user#logout').then((res) => {
      if (res.current_user_login.body[0]) {
        dispatch({type: LOGOUT_USER})
        dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
      }
    })
  }
}
