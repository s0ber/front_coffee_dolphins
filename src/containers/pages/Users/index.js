import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {Text} from 'inline/Text'

class Users extends Component {
  render() {
    return (
      <Page>
        <Page.Title text='Пользователи' />
        <Page.Body>
          {this.props.users.length ? <UsersList users={this.props.users} /> :
                                     <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}

export default connect((state) => {
  return {
    users: state.users
  }
})(Users)
