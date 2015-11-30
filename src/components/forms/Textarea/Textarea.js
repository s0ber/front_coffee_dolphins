import './Textarea.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'

export class Textarea extends Component {
  render() {
    return (
      <div className='Textarea'>
        <Label {...this.props} />
        <textarea placeholder={this.props.placeholder} {...this.props} />
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
