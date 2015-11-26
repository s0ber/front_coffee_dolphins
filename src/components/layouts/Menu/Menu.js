import './Menu.sass'
import React, {Component} from 'react'
import classNames from 'classnames'
import pages from 'constants/pages'

export class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-header'>Меню</div>
        <div className='Menu-items'>
          {
            pages.map((item, i) => {
              return <div key={i} className={classNames('Menu-item', {'is-active': item.name == this.props.selectedPageId})}>
                {item.ru}
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
