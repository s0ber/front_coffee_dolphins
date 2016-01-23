import get from 'utils/get'

export default function() {
  return get('/categories').then((res) => {
    if (res.categories) {
      return {
        pageId: 'categories',
        categories: res.categories
      }
    }
  })
}
