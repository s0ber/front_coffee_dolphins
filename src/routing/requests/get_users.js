import get from 'utils/get'

export default function() {
  return get('/users').then((res) => {
    if (res.users) {
      return {
        pageId: 'users',
        users: res.users
      }
    }
  })
}
