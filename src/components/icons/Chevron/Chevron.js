import './Chevron.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class Chevron extends Component {
  render() {
    const chevronClasses = classNames('Chevron', {'is-right': this.props.right})
    return (<i className={chevronClasses} />)
  }
}
