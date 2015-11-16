import './PanelItem.sass'
import React, {Component} from 'react'

export class PanelItem extends Component {
  render() {
    return (
      <div className='PanelItem'>
        <div className='PanelItem-header'>
          <span className='PanelItem-headerTitle'>
            <a href='#'>Кольцо Всевластия</a>
          </span>
          <div className='PanelItem-headerButtons'>
          </div>
        </div>
        <div className='PanelItem-body'>
        </div>
      </div>
    )
  }
}
