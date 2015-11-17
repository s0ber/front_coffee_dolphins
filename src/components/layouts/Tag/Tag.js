import './Tag.sass'
import React, {Component} from 'react'

export class Tag extends Component {
  render() {
    return (
      <div className='Tag'>
        {this.props.label}
        <span className='Tag-counter'>{this.props.value}</span>
      </div>
    )
  }
}
