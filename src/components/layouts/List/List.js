import './List.sass'
import React, {Component} from 'react'
import classNames from 'classnames'
import {Icon} from 'icons/Icon'

export class List extends Component {
  render() {
    const Photo = this.props.photoSrc && (
      <div className='List-photo'>
        <img src={this.props.photoSrc} title={this.props.photoTitle} />
        {this.props.isDraggable && (<Icon fa='arrows-v' />)}
      </div>
    )

    const listClasses = classNames('List', {'is-draggable': this.props.isDraggable})

    return (
      <div className={listClasses}>
        <div className='List-inner'>
          {Photo}
          <div className='List-items'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

List.Text = class extends Component {
  render() {
    return (
      <div className='List-text'>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
