import './Hint.sass'

import React, {Component} from 'react'

export class Hint extends Component {
  render() {
    return (<span className='Hint'>{this.props.text}</span>)
  }
}
