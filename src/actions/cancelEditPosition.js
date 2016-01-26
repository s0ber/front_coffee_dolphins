import {CANCEL_EDIT_POSITION} from 'actions'

export default function(positionId) {
  return {
    type: CANCEL_EDIT_POSITION,
    payload: positionId
  }
}
