import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {SmallButton} from 'layouts/SmallButton'

export default class extends Component {
  onCategoryDestroy = (e) => {
    this.props.onCategoryDestroy(this.props.category)
  }

  render() {
    const category = this.props.category

    return (
      <PanelItem>
        <PanelItem.Header title={category.title}>
          <SmallButton color='red' icon='close' onClick={this.onCategoryDestroy} />
        </PanelItem.Header>
        <PanelItem.Body>
          <List>
            <List.Text>{category.description}</List.Text>
          </List>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}

