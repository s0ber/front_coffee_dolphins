import {UPDATE_POSITIONS} from 'actions'

export default function(positions) {
  return {
    type: UPDATE_POSITIONS,
    payload: positions
  }
}
