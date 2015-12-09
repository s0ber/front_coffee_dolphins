import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {Tag} from 'layouts/Tag'

export default class extends Component {
  render() {
    const position = this.props.position

    return (
      <PanelItem>
        <PanelItem.Header title={position.title} />
        <PanelItem.Body>
          <List photoSrc={position.image_url}>
            <ListItem label='ID позиции'>{position.apishops_position_id}</ListItem>
            <ListItem label='Категория'>{position.category}</ListItem>
            <ListItem label='Цена'>{position.price}</ListItem>
            <ListItem label='Прибыль'>{position.profit}</ListItem>
            <ListItem label='Доступность'>{position.availability_level}</ListItem>
            <ListItem label='Ключевые слова'>
              <div className='Tags'>
                {position.search_keywords.map((keyword, i) => {
                  return <Tag key={i} label={keyword.name} value={keyword.search_count} />
                })}
              </div>
            </ListItem>
          </List>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
