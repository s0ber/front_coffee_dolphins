import './ListItem.sass'
import React, {Component} from 'react'

export class ListItem extends Component {
  render() {
    return (
      <div className='ListItem'>
        <div className='ListItem-label'>{this.props.label}</div>
        <div className='ListItem-value'>{this.props.children}</div>
      </div>
    )
  }
}
