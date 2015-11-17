import './InlineError.sass'

import React, {Component} from 'react'

export class InlineError extends Component {
  render() {
    return (<span className='InlineError'> — {this.props.text}</span>)
  }
}
