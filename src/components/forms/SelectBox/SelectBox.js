import './SelectBox.sass'

import React, {Component} from 'react'
import {Label} from 'forms/Label'
import {Hint} from 'forms/Hint'

export class SelectBox extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='SelectBox'>
        <Label {...this.props} />
        <select name='#'>
          {this.props.collection.map((item, i) => <option key={i} value={item.value}>{item.text}</option>)}
        </select>
        {hint}
      </div>
    )
  }
}
