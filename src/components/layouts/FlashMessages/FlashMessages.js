import './FlashMessages.sass'

import React, {Component} from 'react'
import {FlashMessage} from '../FlashMessage'

export class FlashMessages extends Component {
  render() {
    return (
      <div className='FlashMessages'>
        {this.props.children}
      </div>
    )
  }
}

