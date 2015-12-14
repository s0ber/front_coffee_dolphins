import get from 'utils/api/get'

export default function() {
  return get('users#show').then((res) => {
    if (!res.users_show.status) {
      return {
        pageId: 'users',
        users: res.users_show.body
      }
    }
  })
}
