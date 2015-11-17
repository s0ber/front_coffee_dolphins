import './CheckBox.sass'

import React, {Component} from 'react'
import {Label} from 'forms/Label'
import {Hint} from 'forms/Hint'

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
