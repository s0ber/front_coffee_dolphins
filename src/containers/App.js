import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {Layout} from '../components/layouts/Layout'
import {tinyActions as router} from 'redux-tiny-router'

import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'

import CurrentPage from './CurrentPage'
import {Example as ExampleModal} from './modals/Example'

import logoutUser from 'action_creators/logoutUser'

const SHOW_MODAL = false

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isAuthorized = this.props.currentUser && this.props.currentUser.role !== 'Anonymous'

    return (
      <Layout >
        <Layout.Main>
          <Layout.Header>
            <Header isAuthorized={isAuthorized}
              currentUser={this.props.currentUser}
              handleLogoutClick={() => {
                this.props.dispatch(logoutUser())
              }} />
          </Layout.Header>
          <Layout.Body>
            <Layout.Content>
              <CurrentPage />
            </Layout.Content>
            {isAuthorized &&
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

function select(state) {
  return {
    currentPageId: state.currentPageId,
    currentUser: state.currentUser
  }
}

export default connect(select)(App)
