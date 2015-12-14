import {UPDATE_CATEGORIES} from 'actions'

export default function(categories) {
  return {
    type: UPDATE_CATEGORIES,
    payload: categories
  }
}
