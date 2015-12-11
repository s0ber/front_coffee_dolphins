import React, {Component} from 'react'
import {paths} from 'routes'

import PositionDetails from './PositionDetails'
import {PanelItem} from 'layouts/PanelItem'
import {Link} from 'layouts/Link'
import {Chevron} from 'icons/Chevron'
import {SmallButton} from 'layouts/SmallButton'

export default class extends Component {
  onPositionDestroy = (e) => {
    this.props.onPositionDestroy(this.props.position)
  }

  render() {
    const position = this.props.position

    return (
      <PanelItem>
        <PanelItem.Header title={
          <Link path={paths.POSITION_PATH({id: position.id})}>
            {position.title}
            <Chevron right />
          </Link>
        }>
          <SmallButton color='red' icon='close' onClick={this.onPositionDestroy} />
        </PanelItem.Header>
        <PositionDetails position={position} />
      </PanelItem>
    )
  }
}
