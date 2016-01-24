import {UPDATE_PAGINATION, RESET_PAGINATION} from 'actions'

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_PAGINATION:
      return {
        currentPage: action.payload.current_page,
        nextPage: action.payload.next_page,
        prevPage: action.payload.prev_page,
        totalPages: action.payload.total_pages
      }
    case RESET_PAGINATION:
      return null
    default:
      return state
  }
}
