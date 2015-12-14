import get from 'utils/api/get'

export default function() {
  return get('positions#list', {query: {included: 'search_keywords'}}).then((res) => {
    if (!res.positions_list.status) {
      return {
        pageId: 'positions',
        positions: res.positions_list.body,
        currentPositionId: null
      }
    }
  })
}
