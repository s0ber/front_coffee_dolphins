import './RadioButtonsList.sass'

import React, {Component} from 'react'
import {Label} from '../Label'
import {InlineLabel} from '../InlineLabel'
import {Hint} from '../Hint'

export class RadioButtonsList extends Component {
  render() {
    return (
      <div className='RadioButtonsList'>
        <Label {...this.props} />
        {this.props.collection.map((item, i) =>
          <InlineLabel key={i} label={item.text} >
            <input type='radio' {...this.props} />
          </InlineLabel>
        )}
        {this.props.hint && <Hint text={this.props.hint} />}
      </div>
    )
  }
}
