import React, {Component} from 'react'
import Position from './Position'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Pagination from 'containers/Pagination'

export default class extends Component {
  render() {
    return (
      <div>
        <Pagination />
        <ReactCSSTransitionGroup transitionName='remove' transitionEnter={false} transitionLeaveTimeout={400}>
          {this.props.positions.map((position, i) => {
            return <Position key={'position' + position.id} position={position} onPositionDestroy={this.props.onPositionDestroy} />
          })}
        </ReactCSSTransitionGroup>
        <Pagination />
      </div>
    )
  }
}
