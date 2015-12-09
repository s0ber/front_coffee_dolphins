import React, {Component} from 'react'
import User from './User'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, i) => {
          return <User key={i} user={user} />
        })}
      </div>
    )
  }
}
