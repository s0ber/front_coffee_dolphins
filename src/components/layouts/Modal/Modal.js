import './Modal.sass'

import React, {Component} from 'react'

export class Modal extends Component {
  render() {
    return (<div className='Modal'>{this.props.children}</div>)
  }
}

Modal.Header = class extends Component {
  render() {
    return (<div className='Modal-header'>{this.props.children}</div>)
  }
}

Modal.Body = class extends Component {
  render() {
    return (<div className='Modal-body'>{this.props.children}</div>)
  }
}
