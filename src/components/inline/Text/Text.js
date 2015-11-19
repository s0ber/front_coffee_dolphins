import './Text.sass'
import React, {Component} from 'react'

export class Text extends Component {
  render() {
    return (<div className='Text'>{this.props.children}</div>)
  }
}
