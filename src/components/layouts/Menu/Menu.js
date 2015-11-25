import './Menu.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

const pages = [
  {
    name: 'positions',
    ru: 'Позиции'
  },
  {
    name: 'categories',
    ru: 'Категории'
  },
  {
    name: 'landings',
    ru: 'Лендинги'
  },
  {
    name: 'statistic',
    ru: 'Статистика'
  },
  {
    name: 'finance',
    ru: 'Финансы'
  },
  {
    name: 'users',
    ru: 'Пользователи'
  }
]

export class Menu extends Component {
  render() {
    const {selectedPage} = this.props

    return (
      <div className='Menu'>
        <div className='Menu-header'>Меню</div>
        <div className='Menu-items'>
          {
            pages.map((item, i) => {
              return <div key={i} className={classNames('Menu-item', {'is-active': item.name == selectedPage})}>
                {item.ru}
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
