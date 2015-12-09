import {UPDATE_POSITION} from 'actions'

export default function(position) {
  return {
    type: UPDATE_POSITION,
    payload: position
  }
}
