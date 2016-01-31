import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Page} from 'layouts/Page'
import {Panel} from 'layouts/Panel'
import {SmallButton} from 'layouts/SmallButton'
import UserForm from './UserForm'
import UsersList from './UsersList'
import {Text} from 'inline/Text'

import addUser from 'actions/users/addUser'
import cancelAddUser from 'actions/users/cancelAddUser'
import editUser from 'actions/users/editUser'
import cancelEditUser from 'actions/users/cancelEditUser'
import destroyUser from 'actions/users/destroyUser'

@connect((state) => {
  return {
    addUserForm: state.users.addUserForm,
    users: state.users.list
  }
})
export default class extends Component {
  showAddForm = () => {
    this.props.dispatch(addUser())
  }

  cancelAddForm = () => {
    this.props.dispatch(cancelAddUser())
  }

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
        <Page.Title text='Пользователи'>
          <SmallButton
            title='Добавить нового'
            color='green'
            disabled={this.props.addUserForm}
            onClick={this.showAddForm}/>
        </Page.Title>
        <Page.Body>
          {this.props.addUserForm &&
            <Panel forNewItem>
              <Panel.Header title='Форма добавления пользователя'></Panel.Header>
              <Panel.Body>
                <UserForm
                  newItemForm
                  formKey={'new_user'}
                  handleCancel={this.cancelAddForm} />
              </Panel.Body>
            </Panel> }
          {this.props.users.length ? <UsersList
                                       users={this.props.users}
                                       handleEdit={this.edit}
                                       handleCancel={this.cancelEdit}
                                       handleDestroy={this.destroy} /> :
                                     <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
