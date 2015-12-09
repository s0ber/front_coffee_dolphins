import React, {Component} from 'react'
import Landing from './Landing'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.landings.map((landing, i) => {
          return <Landing key={i} landing={landing} />
        })}
      </div>
    )
  }
}
