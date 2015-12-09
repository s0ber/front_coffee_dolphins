import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import {Text} from 'inline/Text'

class ShowPosition extends Component {
  render() {
    const position = this.props.position

    return (
      <Page>
        <Page.Title text={'Позиция ' + position.id} />
        <Page.Body>
        </Page.Body>
      </Page>
    )
  }
}

export default connect((state) => {
  return {
    position: state.positions.list.find((position) => {
      return position.id == state.positions.currentPositionId
    })
  }
})(ShowPosition)
