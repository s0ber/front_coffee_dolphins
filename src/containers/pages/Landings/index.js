import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import LandingsList from './LandingsList'
import {Text} from 'inline/Text'

class Landings extends Component {
  render() {
    return (
      <Page>
        <Page.Title text='Лендинги' />
        <Page.Body>
          {this.props.landings.length ? <LandingsList landings={this.props.landings} /> :
                                        <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}

export default connect((state) => {
  return {
    landings: state.landings
  }
})(Landings)
