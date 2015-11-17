import './Label.sass'

import React, {Component} from 'react'
import classNames from 'classnames'

export class Label extends Component {
  render() {
    const Abbr = this.props.required && <abbr title='require'>*</abbr>
    const labelClassNames = classNames('Label', this.props.modifierClass, {'is-required': this.props.required})

    return (
      <label className={labelClassNames}>
        {this.props.children}
        <span className='Label-inner'>{Abbr} {this.props.label}</span>
      </label>
    )
  }
}
