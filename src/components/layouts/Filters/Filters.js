import './Filters.sass'
import React, {Component} from 'react'
import {FlatButton} from '../FlatButton'
import {Link} from '../Link'
import classNames from 'classnames'

export class Filters extends Component {
  render() {
    return (
      <div className='Filters'>
        {this.props.children}
      </div>
    )
  }
}

Filters.Item = class extends Component {
  render() {
    const buttonClasses = classNames('FlatButton', {'is-active': this.props.title == 'По популярности'})
    return (
      <Link path={this.props.path || '#'} className={buttonClasses}>{this.props.title}</Link>
    )
  }
}
