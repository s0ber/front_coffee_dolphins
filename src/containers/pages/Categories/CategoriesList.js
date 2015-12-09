import React, {Component} from 'react'
import Category from './Category'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.categories.map((category, i) => {
          return <Category key={i} category={category} />
        })}
      </div>
    )
  }
}

