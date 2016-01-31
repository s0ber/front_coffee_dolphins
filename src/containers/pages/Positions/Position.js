import React, {Component} from 'react'
import {paths} from 'routes'

import PositionDetails from './PositionDetails'
import {PanelItem} from 'layouts/PanelItem'
import {Link} from 'layouts/Link'
import {Chevron} from 'icons/Chevron'
import {SmallButton} from 'layouts/SmallButton'

import PositionForm from './PositionForm'

export default class extends Component {
  handleEdit = (e) => {
    this.props.handleEdit(this.props.position)
  }

  handleCancel = (e) => {
    this.props.handleCancel(this.props.position)
  }

  handleDestroy = (e) => {
    this.props.handleDestroy(this.props.position)
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
          <SmallButton icon='pencil' onClick={this.handleEdit} disabled={position._edited} />
          <SmallButton color='red' icon='close' onClick={this.handleDestroy} />
        </PanelItem.Header>
        <PanelItem.Body>
          { position._edited ?
            <PositionForm
              position={position}
              initialValues={position}
              formKey={'position' + position.id}
              handleCancel={this.handleCancel} /> :
            <PositionDetails position={position} /> }
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
