import './CheckBox.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'

export class CheckBox extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='CheckBox'>
        <Label modifierClass='for-checkbox' {...this.props} >
          <input type='checkbox' name='#' />
        </Label>
        {hint}
      </div>
    )
  }
}
