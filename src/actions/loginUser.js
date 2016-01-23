import post from 'utils/post'

import {LOGIN_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'
import showFlashMessage from './showFlashMessage'

export default function(loginData) {
  return (dispatch) => {
    return post('/sessions', {user: loginData}).then((res) => {
      if (res.success) {
        dispatch({
          type: LOGIN_USER,
          payload: res.user.user
        })

        if (res.meta.notice) {
          dispatch(showFlashMessage(res.meta.notice))
        }

        dispatch(tinyActions.navigateTo(paths.POSITIONS_PATH()))
      }
    })
  }
}
