import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import CategoriesList from './CategoriesList'
import {Text} from 'inline/Text'

class Categories extends Component {
  render() {
    return (
      <Page>
        <Page.Title text='Категории лендингов' />
        <Page.Body>
          {this.props.categories.length ? <CategoriesList categories={this.props.categories} /> :
                                          <Text>Нет категорий лендингов.</Text>}
        </Page.Body>
      </Page>
    )
  }
}

export default connect((state) => {
  return {
    categories: state.categories
  }
})(Categories)
