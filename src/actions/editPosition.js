import {EDIT_POSITION} from 'actions'

export default function(positionId) {
  return {
    type: EDIT_POSITION,
    payload: positionId
  }
}
