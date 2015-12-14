import React, {Component} from 'react'
import User from './User'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='remove' transitionEnter={false} transitionLeaveTimeout={400}>
        {this.props.users.map((user, i) => {
          return <User key={i} user={user} />
        })}
      </ReactCSSTransitionGroup>
    )
  }
}
