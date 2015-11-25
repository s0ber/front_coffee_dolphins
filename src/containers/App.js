import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Layout} from '../components/layouts/Layout'
import {tinyActions as router} from 'redux-tiny-router'

class App extends Component {
  render() {
    const {dispatch, ...others} = this.props
    return (
      <Layout {...others} changePage={() => dispatch(router.navigateTo('/', {asd: 123}))} />
    )
  }
}

function select(state) {
  return {
    selectedPage: state.selectedPage
  }
}

export default connect(select)(App)
