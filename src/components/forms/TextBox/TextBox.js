import './TextBox.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'
import classNames from 'classnames'

export class TextBox extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />
    const {children, ...other} = this.props
    const textBoxClasses = classNames('TextBox', {'is-listValue': this.props.isListValue})

    return (
      <div className={textBoxClasses}>
        {this.props.label && <Label {...other} />}
        {this.props.password ? <input type='password' value={this.props.value} /> :
                               <input type='text' value={this.props.value} />}

        {hint}
        {this.props.children}
      </div>
    )
  }
}
