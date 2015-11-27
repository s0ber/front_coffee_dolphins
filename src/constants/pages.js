import paths from 'routes/paths'

export default [
  {
    name: 'positions',
    ru: 'Позиции',
    path: paths.POSITIONS_PATH()
  },
  {
    name: 'categories',
    ru: 'Категории',
    path: paths.CATEGORIES_PATH()
  },
  {
    name: 'landings',
    ru: 'Лендинги',
    path: paths.LANDINGS_PATH()
  },
  {
    name: 'users',
    ru: 'Пользователи',
    path: paths.USERS_PATH()
  },
  {
    name: 'examples',
    ru: 'Примеры компонентов',
    path: paths.EXAMPLES_PATH()
  }
]
