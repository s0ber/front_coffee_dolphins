import 'styles/index.sass'
import 'font-awesome-webpack'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Layout} from '../components/layouts/Layout'

class App extends Component {
  render() {
    return (
      <Layout {...this.props} />
    )
  }
}
export default connect()(App)
