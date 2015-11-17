import './PanelItem.sass'
import React, {Component} from 'react'

export class PanelItem extends Component {
  render() {
    return (
      <div className='PanelItem'>
        <div className='PanelItem-header'>
          <span className='PanelItem-headerTitle'>
            {this.props.title}
          </span>
          <div className='PanelItem-headerButtons'>
            {this.props.buttons}
          </div>
        </div>
        <div className='PanelItem-body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
