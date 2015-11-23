import './SelectBox.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {Hint} from '../Hint'

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
