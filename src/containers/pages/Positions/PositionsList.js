import React, {Component} from 'react'
import Position from './Position'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Pagination from 'containers/Pagination'
import {paths} from 'routes'

export default class extends Component {
  render() {
    return (
      <div>
        <Pagination pagePathFn={paths.POSITIONS_PATH} />
        <ReactCSSTransitionGroup
          key={this.props.currentPageNum}
          transitionName='remove'
          transitionEnter={false}
          transitionLeaveTimeout={400}>
          {this.props.positions.map((position, i) => {
            return <Position key={'position' + position.id} position={position} onPositionDestroy={this.props.onPositionDestroy} />
          })}
        </ReactCSSTransitionGroup>
        <Pagination pagePathFn={paths.POSITIONS_PATH} />
      </div>
    )
  }
}
