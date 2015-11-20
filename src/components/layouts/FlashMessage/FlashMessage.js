import './FlashMessage.sass'

import React, {Component} from 'react'
import {Icon} from 'icons/Icon'
import classNames from 'classnames'

export class FlashMessage extends Component {
  render() {
    const flashMessageClasses = classNames('FlashMessage', {
      'is-notice': this.props.notice,
      'is-alert': this.props.alert
    })
    return (
      <div className={flashMessageClasses}>
        <div className='FlashMessage-inner'>
          {this.props.notice || this.props.alert}
          <span className='FlashMessage-close'>
            <Icon fa='close' />
          </span>
        </div>
      </div>
    )
  }
}
