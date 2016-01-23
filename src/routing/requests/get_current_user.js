import get from 'utils/get'

export default function() {
  return get('/current_user').then((res) => {
    if (res.user) {
      return res.user
    }
  })
}

