import {SET_POSITION} from 'actions'

export default function(position) {
  return {
    type: SET_POSITION,
    payload: position
  }
}
