import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import LandingsList from './LandingsList'
import {Text} from 'inline/Text'
import destroyLanding from 'actions/landings/destroyLanding'

@connect((state) => {
  return {
    landings: state.landings
  }
})
export default class extends Component {
  destroyLanding = (landing) => {
    if (confirm(`Удалить лендинг ${landing.title}?`)) {
      this.props.dispatch(destroyLanding(landing.id))
    }
  }

  render() {
    return (
      <Page>
        <Page.Title text='Лендинги' />
        <Page.Body>
          {this.props.landings.length ? <LandingsList handleDestroy={this.destroyLanding} landings={this.props.landings} /> :
                                        <Text>Нет пользователей.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
