import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {Text} from 'inline/Text'
import destroyUser from 'actions/destroyUser'

@connect((state) => {
  return {
    users: state.users
  }
})
export default class extends Component {
  destroyUser = (user) => {
    if (confirm(`Удалить пользователя ${user.full_name}?`)) {
      this.props.dispatch(destroyUser(user.id))
    }
  }

  render() {
    return (
      <Page>
        <Page.Title text='Пользователи' />
        <Page.Body>
          {this.props.users.length ? <UsersList users={this.props.users} handleDestroy={this.destroyUser} /> :
                                     <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
