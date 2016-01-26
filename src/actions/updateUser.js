import put from 'utils/put'
import {UPDATE_USER} from 'actions'
import cancelEditUser from 'actions/cancelEditUser'

export default function(user) {
  return (dispatch) => {
    return put(`/users/${user.id}`, {user}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: UPDATE_USER,
            payload: user
          })

          dispatch(cancelEditUser(user))
        }
      })
  }
}
