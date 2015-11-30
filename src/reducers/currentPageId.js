import {CHANGE_PAGE_ID} from 'actions'

const initialState = 'positions'

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE_ID:
      return action.payload.pageId
    default:
      return state
  }
}
