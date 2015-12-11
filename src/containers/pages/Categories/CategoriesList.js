import React, {Component} from 'react'
import Category from './Category'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='remove' transitionEnter={false} transitionLeaveTimeout={400}>
        {this.props.categories.map((category, i) => {
          return <Category key={'category' + category.id} category={category} onCategoryDestroy={this.props.onCategoryDestroy} />
        })}
      </ReactCSSTransitionGroup>
    )
  }
}

