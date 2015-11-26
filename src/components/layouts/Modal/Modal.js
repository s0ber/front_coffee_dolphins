import './Modal.sass'

import React, {Component} from 'react'

export class Modal extends Component {
  render() {
    return (
      <div className='Modal'>
        <div className='Modal-header'>
          {this.props.title}
        </div>
        <div className='Modal-body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
