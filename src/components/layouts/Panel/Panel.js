import './Panel.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export class Panel extends Component {
  render() {
    return (
      <div className='Panel'>{this.props.children}</div>
    )
  }
}

Panel.Header = class extends Component {
  render() {
    const Buttons = this.props.children && <div className='Panel-headerButtons'>{this.props.children}</div>

    return (
      <div className='Panel-header'>
        <span className='Panel-headerTitle'>
          {this.props.title}
        </span>
        {Buttons}
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
