import {ROUTER_NAVIGATION} from '../actions'

const initialState = 'positions'

export default function selectedPage(state = initialState, action = {}) {
  switch (action.type) {
    case ROUTER_NAVIGATION:
      return state
    default:
      return state
  }
}
