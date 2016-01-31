import './Panel.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class Panel extends Component {
  render() {
    const panelClasses = classNames('Panel', {
      'for-loginForm': this.props.forLoginForm,
      'for-newItem': this.props.forNewItem
    })
    return (
      <div className={panelClasses}>{this.props.children}</div>
    )
  }
}

Panel.Header = class extends Component {
  render() {
    return (
      <div className='Panel-header'>
        <span className='Panel-headerTitle'>
          {this.props.title}
        </span>
        {this.props.children && <div className='Panel-headerButtons'>{this.props.children}</div>}
      </div>
    )
  }
}

Panel.Body = class extends Component {
  render() {
    const panelBodyClasses = classNames('Panel-body', {'has-padding': this.props.hasPadding})

    return (
      <div className={panelBodyClasses}>
        {this.props.children}
      </div>
    )
  }
}
