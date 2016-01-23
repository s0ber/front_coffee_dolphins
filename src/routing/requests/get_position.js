import get from 'utils/get'

export default function(positionId) {
  return get(`/positions/${positionId}`).then((res) => {
    if (res.position) {
      return {
        pageId: 'positions',
        position: res.position,
        currentPositionId: positionId
      }
    }
  })
}
