import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {Status} from 'inline/Status'

export default class extends Component {
  humanStatus(status) {
    return ({
      'draft': <Status>Черновик</Status>,
      'published': <Status green>Опубликовано</Status>
    })[status]
  }

  render() {
    const landing = this.props.landing

    return (
      <PanelItem>
        <PanelItem.Header title={landing.position.title} />
        <PanelItem.Body>
          <List photoSrc={landing.position.image_url}>
            <ListItem label='Статус'>{this.humanStatus(landing._status)}</ListItem>
            <ListItem label='Категория'>{landing.category.title}</ListItem>
            <ListItem label='URL Slug'>{landing.slug}</ListItem>
          </List>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
