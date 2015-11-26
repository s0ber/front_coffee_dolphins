import './Page.sass'
import pages from 'constants/pages'

import React, {Component} from 'react'

export class Page extends Component {
  render() {
    return (<div className='Page'>{this.props.children}</div>)
  }
}

Page.Title = class extends Component {
  render() {
    return (
      <div className='Page-title'>
        <span className='Page-titleText'>{this.props.text}</span>
        {this.props.children && <div className='Page-titleButton'>{this.props.children}</div>}
      </div>
    )
  }
}

Page.Body = class extends Component {
  render() {
    return (
      <div className='Page-body'>{this.props.children}</div>
    )
  }
}
