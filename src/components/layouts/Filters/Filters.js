import './Filters.sass'
import React, {Component} from 'react'
import {FlatButton} from '../FlatButton'

export class Filters extends Component {
  render() {
    return (
      <div className='Filters'>
        <FlatButton title='По популярности' />
        <FlatButton title='Избранное' />
      </div>
    )
  }
}
