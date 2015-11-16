import './FlatButton.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class FlatButton extends Component {
  render() {
    const buttonClasses = classNames('FlatButton', {'is-active': this.props.title == 'По популярности'})
    return (
      <div className={buttonClasses}>{this.props.title}</div>
    )
  }
}
