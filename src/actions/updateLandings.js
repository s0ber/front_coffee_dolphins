import {UPDATE_LANDINGS} from 'actions'

export default function(landings) {
  return {
    type: UPDATE_LANDINGS,
    payload: landings
  }
}
