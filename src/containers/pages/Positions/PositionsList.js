import React, {Component} from 'react'
import Position from './Position'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='remove' transitionEnter={false} transitionLeaveTimeout={400}>
        {this.props.positions.map((position, i) => {
          return <Position key={'position' + position.id} position={position} onPositionDestroy={this.props.onPositionDestroy} />
        })}
      </ReactCSSTransitionGroup>
    )
  }
}
