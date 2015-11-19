import './TextBox.sass'

import React, {Component} from 'react'
import {Label} from 'forms/Label'
import {Hint} from 'forms/Hint'

export class TextBox extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />
    const {children, ...other} = this.props

    return (
      <div className='TextBox'>
        <Label {...other} />
        <input type='text' value={this.props.value} />
        {hint}
        {this.props.children}
      </div>
    )
  }
}
