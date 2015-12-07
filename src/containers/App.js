import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {tinyActions as router} from 'redux-tiny-router'

import {Layout} from '../components/layouts/Layout'
import {FlashMessages} from 'layouts/FlashMessages'
import {FlashMessage} from 'layouts/FlashMessage'
import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'

import CurrentPage from './CurrentPage'
import {Example as ExampleModal} from './modals/Example'

import logoutUser from 'action_creators/logoutUser'
import hideFlashMessage from 'action_creators/hideFlashMessage'

const SHOW_MODAL = false

@connect((state) => {
  return {
    flashMessages: state.flashMessages,
    currentPageId: state.currentPageId,
    currentUser: state.currentUser
  }
})
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isAuthorized = this.props.currentUser && this.props.currentUser.role !== 'Anonymous'

    return (
      <Layout >
        {(this.props.flashMessages.length > 0) &&
          <FlashMessages>
            {this.props.flashMessages.map((message, i) => {
              return <FlashMessage key={i}
                                   message={message}
                                   onClose={() => {
                                     this.props.dispatch(hideFlashMessage(message))
                                   }}/>
            })}
          </FlashMessages>}
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

export default App
