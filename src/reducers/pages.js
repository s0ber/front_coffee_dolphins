import {ROUTER_NAVIGATION} from '../actions'

const initialState = [
  {
    name: 'positions',
    ru: 'Позиции',
    selected: false
  },
  {
    name: 'positions',
    ru: 'Категории',
    selected: false
  },
  {
    name: 'positions',
    ru: 'Лендинги',
    selected: false
  },
  {
    name: 'positions',
    ru: 'Статистика',
    selected: false
  },
  {
    name: 'positions',
    ru: 'Финансы',
    selected: false
  },
  {
    name: 'positions',
    ru: 'Пользователи',
    selected: false
  }
]

export default function pages(state = initialState, action = {}) {
  switch (action.type) {
    case ROUTER_NAVIGATION:
      return state
    default:
      return state
  }
}
