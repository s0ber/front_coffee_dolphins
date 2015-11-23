import './SmallButton.sass'
import React, {Component} from 'react'
import {ButtonLoader} from '../ButtonLoader'
import classNames from 'classnames'

export class SmallButton extends Component {
  render() {
    const buttonClasses = classNames('SmallButton', this.props.className, {
      'is-green': this.props.color == 'green',
      'is-red': this.props.color == 'red',
      'is-icon': !!this.props.icon,
      'is-disabled': this.props.isLoading || this.props.disabled,
      'is-loading': this.props.isLoading
    })

    const text = this.props.icon ? <i className={classNames('fa', 'fa-' + this.props.icon)} />
                                 : this.props.children || this.props.title

    return (
      <div className={buttonClasses} onClick={this.props.onClick}>
        <div className='SmallButton-wrap'>{text}</div>
        {this.props.isLoading && <ButtonLoader />}
      </div>
    )
  }
}
