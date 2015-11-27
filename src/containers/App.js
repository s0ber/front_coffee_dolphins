import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import toComponentName from 'utils/to_component_name'

import {Layout} from '../components/layouts/Layout'
import {tinyActions as router} from 'redux-tiny-router'

import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'

import Pages from './pages'
import {Example as ExampleModal} from './modals/Example'

const SHOW_MODAL = false

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const CurrentPage = Pages[toComponentName(this.props.currentPageId)]

    return (
      <Layout >
        <Layout.Main>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Body>
            <Layout.Content>
              <CurrentPage />
            </Layout.Content>
            <Layout.Sidebar>
              <Menu selectedPageId={this.props.currentPageId} />
            </Layout.Sidebar>
          </Layout.Body>
        </Layout.Main>
        <Layout.Footer />
        {SHOW_MODAL
          && <Layout.Modals>
              <ExampleModal />
            </Layout.Modals>}
      </Layout>
    )
  }
}

function select(state) {
  return {
    currentPageId: state.currentPageId
  }
}

export default connect(select)(App)
