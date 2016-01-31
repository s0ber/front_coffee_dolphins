import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {Layout} from '../components/layouts/Layout'
import {FlashMessages} from 'layouts/FlashMessages'
import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'

import CurrentPage from './CurrentPage'
import {Example as ExampleModal} from './modals/Example'

import logoutUser from 'actions/currentUser/logoutUser'

const SHOW_MODAL = false

@connect((state) => {
  return {
    flashMessages: state.flashMessages,
    currentPageId: state.currentPageId,
    currentUser: state.currentUser
  }
})
export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isAuthorized = this.props.currentUser && this.props.currentUser.role !== 'Anonymous'

    return (
      <Layout >
        {(this.props.flashMessages.length > 0) && <FlashMessages messages={this.props.flashMessages} dispatch={this.props.dispatch} />}
        <Layout.Main>
          <Layout.Header>
            <Header isAuthorized={isAuthorized}
                    currentUser={this.props.currentUser}
                    onLogout={() => {
                      this.props.dispatch(logoutUser())
                    }} />
          </Layout.Header>
          <Layout.Body>
            <Layout.Content>
              <CurrentPage />
            </Layout.Content>
            {isAuthorized && this.props.currentPageId &&
              <Layout.Sidebar>
                <Menu selectedPageId={this.props.currentPageId} />
              </Layout.Sidebar>}
          </Layout.Body>
        </Layout.Main>
        <Layout.Footer />
        {SHOW_MODAL &&
          <Layout.Modals>
            <ExampleModal />
          </Layout.Modals>}
      </Layout>
    )
  }
}
