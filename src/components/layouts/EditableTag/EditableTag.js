import './EditableTag.sass'
import React, {Component} from 'react'
import {Icon} from 'icons/Icon'

export class EditableTag extends Component {
  render() {
    return (
      <div className='Tag is-deletable'>
        {this.props.label}
        <input type='text' value={this.props.value} />
        <Icon className='Tag-delete' fa='close' />
      </div>
    )
  }
}
