import './SmallButton.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class SmallButton extends Component {
  render() {
    const buttonClasses = classNames('SmallButton', {'is-green': this.props.color == 'green'})

    return (
      <div className={buttonClasses}>{this.props.title}</div>
    )
  }
}
