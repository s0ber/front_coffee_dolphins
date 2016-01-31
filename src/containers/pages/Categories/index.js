import React, {Component} from 'react'
import {Page} from 'layouts/Page'
import {connect} from 'react-redux'
import CategoriesList from './CategoriesList'
import {Text} from 'inline/Text'
import editCategory from 'actions/categories/editCategory'
import cancelEditCategory from 'actions/categories/cancelEditCategory'
import destroyCategory from 'actions/categories/destroyCategory'

@connect((state) => {
  return {
    categories: state.categories
  }
})
export default class extends Component {
  edit = (category) => {
    this.props.dispatch(editCategory(category))
  }

  cancelEdit = (category) => {
    this.props.dispatch(cancelEditCategory(category))
  }

  destroy = (category) => {
    if (confirm(`Удалить категорию ${category.title}?`)) {
      this.props.dispatch(destroyCategory(category.id))
    }
  }

  render() {
    return (
      <Page>
        <Page.Title text='Категории лендингов' />
        <Page.Body>
          {this.props.categories.length ? <CategoriesList
                                            categories={this.props.categories}
                                            handleDestroy={this.destroy}
                                            handleEdit={this.edit}
                                            handleCancelEdit={this.cancelEdit} /> :
                                          <Text>Нет категорий лендингов.</Text>}
        </Page.Body>
      </Page>
    )
  }
}
