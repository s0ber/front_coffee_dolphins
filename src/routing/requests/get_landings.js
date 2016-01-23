import get from 'utils/get'

export default function() {
  return get('/landings').then((res) => {
    if (res.landings) {
      return {
        pageId: 'landings',
        landings: res.landings
      }
    }
  })
}
