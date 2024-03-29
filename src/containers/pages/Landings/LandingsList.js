import React, {Component} from 'react'
import Landing from './Landing'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='remove' transitionEnter={false} transitionLeaveTimeout={400}>
        {this.props.landings.map((landing, i) => {
          return <Landing key={'landing' + landing.id} landing={landing} handleDestroy={this.props.handleDestroy} />
        })}
      </ReactCSSTransitionGroup>
    )
  }
}
