import {UPDATE_PAGINATION} from 'actions'

export default function(paginationData) {
  return {
    type: UPDATE_PAGINATION,
    payload: paginationData
  }
}
