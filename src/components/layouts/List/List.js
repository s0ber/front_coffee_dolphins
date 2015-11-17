import './List.sass'
import React, {Component} from 'react'

export class List extends Component {
  render() {
    const Photo = this.props.photoSrc && (
      <div className='List-photo'>
        <img src={this.props.photoSrc} title={this.props.photoTitle} />
      </div>
    )

    return (
      <div className='List'>
        <div className='List-inner'>
          {Photo}
          <div className='List-items'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
