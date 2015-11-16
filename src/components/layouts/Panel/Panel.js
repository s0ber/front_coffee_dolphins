import './Panel.sass'
import React, {Component} from 'react'

export class Panel extends Component {
  render() {
    return (
      <div className='Panel'>
        <div className='Panel-header'>
          <span className='Panel-headerTitle'>
            <a href='#'>Кольцо Всевластия</a>
          </span>
          <div className='Panel-headerButtons'>
          </div>
        </div>
        <div className='Panel-body'>
        </div>
      </div>
    )
  }
}
