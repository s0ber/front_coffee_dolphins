import React, {Component} from 'react'
import Show from './Show'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import PositionsList from './PositionsList'
import {Text} from 'inline/Text'
import destroyPosition from 'actions/destroyPosition'

@connect((state) => {
  return {
    positions: state.positions.list,
    currentPositionId: state.positions.currentPositionId
  }
})
export default class extends Component {
  destroyPosition = (position) => {
    if (confirm(`Удалить позицию ${position.title}?`)) {
      this.props.dispatch(destroyPosition(position.id))
    }
  }

  render() {
    if (this.props.currentPositionId) {
      return <Show />
    } else {
      return (
        <Page>
          <Page.Title text='Позиции' />
          <Page.Body>
            {this.props.positions.length ? <PositionsList positions={this.props.positions} onPositionDestroy={this.destroyPosition} /> :
                                           <Text>Нет позиций.</Text>}
          </Page.Body>
        </Page>
      )
    }
  }
}

