import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import PositionsList from './PositionsList'
import {Text} from 'inline/Text'

class Positions extends Component {
  render() {
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

export default connect((state) => {
  return {
    positions: state.positions
  }
})(Positions)
