import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {SmallButton} from 'layouts/SmallButton'
import CategoryForm from './CategoryForm'

export default class extends Component {
  handleEdit = (e) => {
    this.props.handleEdit(this.props.category)
  }

  handleCancel = (e) => {
    this.props.handleCancel(this.props.category)
  }

  handleDestroy = (e) => {
    this.props.handleDestroy(this.props.category)
  }

  render() {
    const category = this.props.category

    return (
      <PanelItem>
        <PanelItem.Header title={category.title}>
          <SmallButton icon='pencil' onClick={this.handleEdit} disabled={category._edited} />
          <SmallButton color='red' icon='close' onClick={this.handleDestroy} />
        </PanelItem.Header>
        <PanelItem.Body>
          { category._edited ?
            <CategoryForm
              category={category}
              formKey={`category_${category.id}`}
              initialValues={category}
              handleCancel={this.handleCancel} /> :
            <List>
              <List.Text>{category.description}</List.Text>
            </List> }
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
