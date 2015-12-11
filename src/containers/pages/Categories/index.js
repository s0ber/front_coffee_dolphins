import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import CategoriesList from './CategoriesList'
import {Text} from 'inline/Text'
import destroyCategory from 'actions/destroyCategory'

@connect((state) => {
  return {
    categories: state.categories
  }
})
export default class extends Component {
  destroyCategory = (category) => {
    if (confirm(`Удалить категорию ${category.title}?`)) {
      this.props.dispatch(destroyCategory(category.id))
    }
  }

  render() {
    return (
      <Page>
        <Page.Title text='Категории лендингов' />
        <Page.Body>
          {this.props.categories.length ? <CategoriesList categories={this.props.categories} onCategoryDestroy={this.destroyCategory} /> :
                                          <Text>Нет категорий лендингов.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
