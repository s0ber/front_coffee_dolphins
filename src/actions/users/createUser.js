import post from 'utils/post'
import {CREATE_USER} from 'actions'
import cancelAddUser from 'actions/users/cancelAddUser'

export default function(user) {
  return (dispatch) => {
    return post(`/users`, {user}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: CREATE_USER,
            payload: res.user.user
          })

          dispatch(cancelAddUser(user))
        }
      })
  }
}
