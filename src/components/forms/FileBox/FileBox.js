import './FileBox.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'

export class FileBox extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='Textarea'>
        <Label {...this.props} />
        <input value={this.props.value} type='file' name='#' />
        {hint}
      </div>
    )
  }
}
