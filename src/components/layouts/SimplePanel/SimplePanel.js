import './SimplePanel.sass'
import React, {Component} from 'react'

export class SimplePanel extends Component {
  render() {
    return (<div className='SimplePanel'>{this.props.children}</div>)
  }
}
