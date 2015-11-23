import './FlashMessages.sass'

import React, {Component} from 'react'
import {FlashMessage} from '../FlashMessage'

export class FlashMessages extends Component {
  render() {
    return (
      <div className='FlashMessages'>
        <FlashMessage notice='Тестовая зеленая нотификация.' />
        <FlashMessage alert='Тестовая красная нотификация.' />
      </div>
    )
  }
}

