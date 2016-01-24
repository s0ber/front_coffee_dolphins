import get from 'utils/get'

export default function(query = {}) {
  return get('/positions', query).then((res) => {
    if (res.positions) {
      return {
        pageId: 'positions',
        positions: res.positions,
        currentPositionId: null,
        pagination: res.meta ? res.meta.pagination : null
      }
    }
  })
}
