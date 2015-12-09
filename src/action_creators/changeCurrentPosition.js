import {CHANGE_CURRENT_POSITION_ID} from 'actions'

export default function(id) {
  return {
    type: CHANGE_CURRENT_POSITION_ID,
    payload: id
  }
}
