import './PanelItem.sass'
import React, {Component} from 'react'

export class PanelItem extends Component {
  render() {
    return (
      <div className='PanelItem'>{this.props.children}</div>
    )
  }
}

PanelItem.Header = class extends Component {
  render() {
    const Buttons = this.props.children && <div className='PanelItem-headerButtons'>{this.props.children}</div>

    return (
      <div className='PanelItem-header'>
        <span className='PanelItem-headerTitle'>
          {this.props.title}
        </span>
        {Buttons}
      </div>
    )
  }
}

PanelItem.Body = class extends Component {
  render() {
    return (
      <div className='PanelItem-body'>
        {this.props.children}
      </div>
    )
  }
}
