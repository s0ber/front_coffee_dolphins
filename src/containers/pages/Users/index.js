import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {Text} from 'inline/Text'

import editUser from 'actions/users/editUser'
import cancelEditUser from 'actions/users/cancelEditUser'
import destroyUser from 'actions/users/destroyUser'

@connect((state) => {
  return {
    users: state.users
  }
})
export default class extends Component {
  edit = (user) => {
    this.props.dispatch(editUser(user))
  }

  cancelEdit = (user) => {
    this.props.dispatch(cancelEditUser(user))
  }

  destroy = (user) => {
    if (confirm(`Удалить пользователя ${user.full_name}?`)) {
      this.props.dispatch(destroyUser(user.id))
    }
  }

  render() {
    return (
      <Page>
        <Page.Title text='Пользователи' />
        <Page.Body>
          {this.props.users.length ? <UsersList
                                       users={this.props.users}
                                       handleEdit={this.edit}
                                       handleCancelEdit={this.cancelEdit}
                                       handleDestroy={this.destroy} /> :
                                     <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
