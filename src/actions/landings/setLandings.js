import {SET_LANDINGS} from 'actions'

export default function(landings) {
  return {
    type: SET_LANDINGS,
    payload: landings
  }
}
