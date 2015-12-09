import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'

export default class extends Component {
  render() {
    const category = this.props.category

    return (
      <PanelItem>
        <PanelItem.Header title={category.title} />
        <PanelItem.Body>
          <List>
            <List.Text>{category.description}</List.Text>
          </List>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}

