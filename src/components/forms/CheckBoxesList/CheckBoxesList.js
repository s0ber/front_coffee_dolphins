import './CheckBoxesList.sass'

import React, {Component} from 'react'
import {Label} from 'forms/Label'
import {InlineLabel} from 'forms/InlineLabel'
import {Hint} from 'forms/Hint'

export class CheckBoxesList extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='CheckBoxesList'>
        <Label {...this.props} />
        {this.props.collection.map((item, i) =>
          <InlineLabel key={i} label={item.text} >
            <input type='checkbox' value={item.value} />
          </InlineLabel>
        )}
        {hint}
      </div>
    )
  }
}
