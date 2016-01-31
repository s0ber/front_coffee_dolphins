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

  handleCancel = (e) => {
    this.props.handleCancel(this.props.user)
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
              <UserForm
                formKey={'user' + user.id}
                initialValues={user}
                handleCancel={this.handleCancel} /> :
              <List>
                <ListItem label='Email'>{user.email}</ListItem>
                {user.description && <List.Text>{user.description}</List.Text>}
              </List> }
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
