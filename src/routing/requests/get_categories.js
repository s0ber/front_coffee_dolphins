import get from 'utils/api/get'

export default function() {
  return get('categories#show').then((res) => {
    if (!res.categories_show.status) {
      return {
        pageId: 'categories',
        categories: res.categories_show.body
      }
    }
  })
}
