import './Note.sass'
import React, {Component} from 'react'
import {Icon} from 'icons/Icon'
import classNames from 'classnames'

export class Note extends Component {
  render() {
    const noteClasses = classNames('Note', {'is-new': this.props.isNew})
    return (
      <div className={noteClasses}>{this.props.children}</div>
    )
  }
}

Note.Header = class extends Component {
  render() {
    return (
      <div className='Note-header'>
        {this.props.title}
        <span className='Note-date'>, добавил {this.props.author}, {this.props.date}</span>
        <div className='Note-headerButtons'>
          <div className='Note-button'><Icon fa='pencil' /></div>
          <div className='Note-button'><Icon fa='close' /></div>
        </div>
      </div>
    )
  }
}

Note.Body = class extends Component {
  render() {
    return (
      <div className='Note-body'>
        <div className='Note-text'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
