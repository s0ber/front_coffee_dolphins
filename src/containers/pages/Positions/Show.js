import React, {Component} from 'react'
import {connect} from 'react-redux'
import {paths} from 'routes'

import {Page} from 'layouts/Page'
import PositionDetails from './PositionDetails'
import {Panel} from 'layouts/Panel'
import {PanelItem} from 'layouts/PanelItem'
import {Text} from 'inline/Text'
import {Link} from 'layouts/Link'
import {Chevron} from 'icons/Chevron'

@connect((state) => {
  return {
    position: state.positions.list.find((position) => {
      return position.id == state.positions.currentPositionId
    })
  }
})
export default class extends Component {
  render() {
    const position = this.props.position

    return (
      <Page>
        <Page.Title text={
          <span>
            <Link forPageTitle path={paths.POSITIONS_PATH()}>Позиции</Link>
            <Chevron right />
            {position.title}
          </span>
        } />
        <Page.Body>
          <Panel>
            <PanelItem>
              <PanelItem.Header title='Детали' />
              <PanelItem.Body>
                <PositionDetails position={position} />
              </PanelItem.Body>
            </PanelItem>
          </Panel>
        </Page.Body>
      </Page>
    )
  }
}
