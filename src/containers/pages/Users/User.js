import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {SmallButton} from 'layouts/SmallButton'

import UserForm from './UserForm'

export default class extends Component {
  handleEdit = (e) => {
    this.props.handleEdit(this.props.user)
  }

  handleCancelEdit = (e) => {
    this.props.handleCancelEdit(this.props.user)
  }

  handleDestroy = (e) => {
    this.props.handleDestroy(this.props.user)
  }

  render() {
    const user = this.props.user

    return (
      <PanelItem>
        <PanelItem.Header title={user.full_name}>
          <SmallButton icon='pencil' onClick={this.handleEdit} disabled={user._edited} />
          <SmallButton color='red' icon='close' disabled={!user.can_destroy} onClick={this.handleDestroy} />
        </PanelItem.Header>
        <PanelItem.Body>
          { user._edited ?
              <UserForm user={user} handleCancelEdit={this.handleCancelEdit} /> :
              <List>
                <ListItem label='Email'>{user.email}</ListItem>
                <List.Text>{user.description}</List.Text>
              </List> }
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
