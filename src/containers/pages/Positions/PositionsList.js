import React, {Component} from 'react'
import Position from './Position'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.positions.map((position, i) => {
          return <Position key={i} position={position} />
        })}
      </div>
    )
  }
}
