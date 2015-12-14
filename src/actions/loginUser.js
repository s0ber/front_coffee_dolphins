import post from 'utils/api/post'
import {LOGIN_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'
import showFlashMessage from './showFlashMessage'

export default function(loginData) {
  return (dispatch) => {
    return post('current_user#login', {data: loginData}).then((res) => {
      if (res.current_user_login.body) {
        res = res.current_user_login

        dispatch({
          type: LOGIN_USER,
          payload: res.body
        })

        if (res.message) {
          dispatch(showFlashMessage(res.message))
        }

        dispatch(tinyActions.navigateTo(paths.POSITIONS_PATH()))
      }
    })
  }
}
