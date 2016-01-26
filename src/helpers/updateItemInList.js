import findItemById from './findItemById'

export default function(state, item) {
  const {index} = findItemById(state, item.id)

  if (index !== -1) {
    return [
      ...state.slice(0, index),
      item,
      ...state.slice(index + 1)
    ]
  } else {
    return state
  }
}
