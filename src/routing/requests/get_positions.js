import get from 'utils/get'

export default function() {
  return get('/positions').then((res) => {
    if (res.positions) {
      return {
        pageId: 'positions',
        positions: res.positions,
        currentPositionId: null
      }
    }
  })
}
