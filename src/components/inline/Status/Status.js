import './Status.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class Status extends Component {
  render() {
    const statusClasses = classNames('Status', {
      'is-green': this.props.green,
      'is-red': this.props.red,
      'is-gray': this.props.gray,
    })
    return (<div className={statusClasses}>{this.props.children}</div>)
  }
}
