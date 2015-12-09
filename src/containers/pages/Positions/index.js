import React, {Component} from 'react'
import Show from './Show'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import PositionsList from './PositionsList'
import {Text} from 'inline/Text'

@connect((state) => {
  return {
    positions: state.positions.list,
    currentPositionId: state.positions.currentPositionId
  }
})
export default class extends Component {
  render() {
    if (this.props.currentPositionId) {
      return <Show />
    } else {
      return (
        <Page>
          <Page.Title text='Позиции' />
          <Page.Body>
            {this.props.positions.length ? <PositionsList positions={this.props.positions} /> :
                                           <Text>Нет позиций.</Text>}
          </Page.Body>
        </Page>
      )
    }
  }
}

