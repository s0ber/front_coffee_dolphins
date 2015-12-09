import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'

export default class extends Component {
  render() {
    const user = this.props.user

    return (
      <PanelItem>
        <PanelItem.Header title={user.full_name} />
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
