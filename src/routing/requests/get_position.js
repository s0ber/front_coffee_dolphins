import get from 'utils/api/get'

export default function(positionId) {
  return get('positions#show', {query: {id: positionId, included: 'search_keywords'}}).then((res) => {
    if (!res.positions_show.status) {
      return {
        pageId: 'positions',
        position: res.positions_show.body,
        currentPositionId: positionId
      }
    }
  })
}
