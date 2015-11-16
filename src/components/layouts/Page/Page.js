import './PageTitle.sass'
import './PageBody.sass'

import React, {Component} from 'react'

export class Title extends Component {
  render() {
    const Buttons = this.props.children && <div className='PageTitle-button'>{this.props.children}</div>

    return (
      <div className='PageTitle'>
        <span className='PageTitle-text'>Позиции</span>
        {Buttons}
      </div>
    )
  }
}

export class Body extends Component {
  render() {
    return (
      <div className='PageBody'>{this.props.children}</div>
    )
  }
}
