import './SmallButton.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class SmallButton extends Component {
  render() {
    const buttonClasses = classNames('SmallButton', this.props.className, {
      'is-green': this.props.color == 'green',
      'is-red': this.props.color == 'red',
      'is-icon': !!this.props.icon
    })

    const text = this.props.icon ? <i className={classNames('fa', 'fa-' + this.props.icon)} />
                                 : this.props.children || this.props.title

    return (
      <div className={buttonClasses}>{text}</div>
    )
  }
}
