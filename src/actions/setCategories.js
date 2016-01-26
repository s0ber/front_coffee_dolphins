import {SET_CATEGORIES} from 'actions'

export default function(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories
  }
}
