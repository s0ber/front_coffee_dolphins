import './Menu.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class Menu extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='Menu'>
        <div className='Menu-header'>Меню</div>
        <div className='Menu-items'>
          {
            ['Позиции', 'Категории', 'Лендинги', 'Статистика', 'Финансы', 'Пользователи'].map((item, i) => {
              return <div key={i} className={classNames('Menu-item', {'is-active': i == 0})}>{item}</div>
            })
          }
        </div>
      </div>
    )
  }
}
