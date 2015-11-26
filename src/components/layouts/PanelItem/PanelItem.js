import './PanelItem.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

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
    const panelItemBodyClasses = classNames('PanelItem-body', {'has-padding': this.props.hasPadding})

    return (
      <div className={panelItemBodyClasses}>
        {this.props.children}
      </div>
    )
  }
}
