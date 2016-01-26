import findItemById from './findItemById'

export default function(state, itemId, attributes) {
  const itemData = findItemById(state, itemId)
  const index = itemData.index
  let item = itemData.item

  if (index !== -1) {
    if (attributes) {
      item = Object.assign({}, item, attributes)
    }
    return [
      ...state.slice(0, index),
      item,
      ...state.slice(index + 1)
    ]
  } else {
    return state
  }
}
