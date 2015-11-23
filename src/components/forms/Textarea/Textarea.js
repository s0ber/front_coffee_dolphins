import './Textarea.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'

export class Textarea extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='Textarea'>
        <Label {...this.props} />
        <textarea value={this.props.value} placeholder={this.props.placeholder} />
        {hint}
      </div>
    )
  }
}
