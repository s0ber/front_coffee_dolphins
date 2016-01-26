import {EDIT_POSITION} from 'action'

export default function(positionId) {
  return {
    type: EDIT_POSITION,
    payload: positionId
  }
}
