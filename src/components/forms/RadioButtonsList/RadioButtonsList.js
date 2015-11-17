import './RadioButtonsList.sass'

import React, {Component} from 'react'
import {Label} from 'forms/Label'
import {InlineLabel} from 'forms/InlineLabel'
import {Hint} from 'forms/Hint'

export class RadioButtonsList extends Component {
  render() {
    const hint = this.props.hint && <Hint {...this.props} />

    return (
      <div className='RadioButtonsList'>
        <Label {...this.props} />
        {this.props.collection.map((item, i) =>
          <InlineLabel key={i} label={item.text} >
            <input type='radio' name='#' value={item.value} />
          </InlineLabel>
        )}
        {hint}
      </div>
    )
  }
}
