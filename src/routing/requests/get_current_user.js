import get from 'utils/api/get'

export default function() {
  return get('current_user#show').then((res) => {
    if (res.current_user_show) {
      return res.current_user_show.body
    }
  })
}

