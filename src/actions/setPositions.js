import {SET_POSITIONS} from 'actions'

export default function(positions) {
  return {
    type: SET_POSITIONS,
    payload: positions
  }
}
