import {CHANGE_PAGE_ID} from 'actions'

export default function changePageId(pageId) {
  return {
    type: CHANGE_PAGE_ID,
    payload: pageId
  }
}
