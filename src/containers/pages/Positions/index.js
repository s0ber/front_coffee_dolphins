import React, {Component} from 'react'
import Show from './Show'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import PositionsList from './PositionsList'
import {Text} from 'inline/Text'

import editPosition from 'actions/positions/editPosition'
import cancelEditPosition from 'actions/positions/cancelEditPosition'
import destroyPosition from 'actions/positions/destroyPosition'

@connect((state) => {
  return {
    positions: state.positions.list,
    currentPageNum: state.pagination ? state.pagination.currentPage : null,
    currentPositionId: state.positions.currentPositionId
  }
})
export default class extends Component {
  edit = (position) => {
    this.props.dispatch(editPosition(position))
  }

  cancelEdit = (position) => {
    this.props.dispatch(cancelEditPosition(position))
  }

  destroy = (position) => {
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
            {this.props.positions.length ? <PositionsList
                                             positions={this.props.positions}
                                             handleEdit={this.edit}
                                             handleCancel={this.cancelEdit}
                                             handleDestroy={this.destroy}
                                             currentPageNum={this.props.currentPageNum} /> :
                                           <Text>Нет позиций.</Text>}
          </Page.Body>
        </Page>
      )
    }
  }
}

