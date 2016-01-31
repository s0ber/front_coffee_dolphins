import './FlashMessages.sass'

import React, {Component} from 'react'
import {FlashMessage} from '../FlashMessage'
import hideFlashMessage from 'actions/flashMessages/hideFlashMessage'

export class FlashMessages extends Component {
  render() {
    return (
      <div className='FlashMessages'>
        {this.props.messages.map((message, i) => {
          return <FlashMessage key={i}
                               message={message}
                               onClose={() => {
                                 this.props.dispatch(hideFlashMessage(message))
                               }}/>
        })}
      </div>
    )
  }
}

