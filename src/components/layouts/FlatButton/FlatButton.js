import './FlatButton.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class FlatButton extends Component {
  render() {
    const buttonClasses = classNames('FlatButton', {'is-active': this.props.title == 'По популярности'})
    return (
      <a href='#' className={buttonClasses}>{this.props.title}</a>
    )
  }
}
