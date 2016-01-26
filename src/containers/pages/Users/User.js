import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {SmallButton} from 'layouts/SmallButton'

export default class extends Component {
  handleDestroy = (e) => {
    this.props.handleDestroy(this.props.user)
  }

  render() {
    const user = this.props.user

    return (
      <PanelItem>
        <PanelItem.Header title={user.full_name}>
          { user.can_destroy ? <SmallButton color='red' icon='close' onClick={this.handleDestroy} />
                             : <SmallButton color='red' icon='close' disabled={true} /> }
        </PanelItem.Header>
        <PanelItem.Body>
          <List>
            <ListItem label='Email'>{user.email}</ListItem>
            <List.Text>{user.description}</List.Text>
          </List>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
