import get from 'utils/api/get'

export default function() {
  return get('landings#show', {query: {included: ['position', 'category']}}).then((res) => {
    if (!res.landings_show.status) {
      return {
        pageId: 'landings',
        landings: res.landings_show.body
      }
    }
  })
}
