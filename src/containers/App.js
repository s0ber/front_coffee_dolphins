import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Layout} from '../components/layouts/Layout'
import {tinyActions as router} from 'redux-tiny-router'

import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'

import {Positions as PositionsPage} from './pages/Positions'
import {Examples as ExamplesPage} from './pages/Examples'
import {Example as ExampleModal} from './modals/Example'

const SHOW_EXAMPLES = true
const SHOW_MODAL = false

class App extends Component {
  render() {
    return (
      <Layout >
        <Layout.Main>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Body>
            <Layout.Content>
              {SHOW_EXAMPLES ? <ExamplesPage /> : <PositionsPage />}
            </Layout.Content>
            <Layout.Sidebar>
              <Menu />
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
    selectedPage: state.selectedPage
  }
}

export default connect(select)(App)
