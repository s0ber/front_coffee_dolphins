import React, {Component} from 'react'
import {paths} from 'routes'

import PositionDetails from './PositionDetails'
import {PanelItem} from 'layouts/PanelItem'
import {Link} from 'layouts/Link'
import {Chevron} from 'icons/Chevron'

export default class extends Component {
  render() {
    const position = this.props.position

    return (
      <PanelItem>
        <PanelItem.Header title={
          <Link path={paths.POSITION_PATH({id: position.id})}>
            {position.title}
            <Chevron right />
          </Link>
        } />
        <PositionDetails position={position} />
      </PanelItem>
    )
  }
}
