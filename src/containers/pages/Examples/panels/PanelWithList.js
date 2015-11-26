import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'
import {PanelItem} from 'layouts/PanelItem'
import {SmallButton} from 'layouts/SmallButton'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {Tag} from 'layouts/Tag'

import {Icon} from 'icons/Icon'

export class PanelWithList extends Component {
  render() {
    return (
      <Panel>
        <PanelItem>
          <PanelItem.Header title={<a href='#'>Панелька со списком + кнопки с иконками</a>}>
            <SmallButton color='green' icon='plus' />
            <SmallButton className='is-like'><Icon fa='heart-o' /></SmallButton>
            <SmallButton icon='pencil' />
            <SmallButton color='red' icon='close' />
          </PanelItem.Header>

          <PanelItem.Body>
            <List photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
              <ListItem label='ID Позиции'>500119</ListItem>
              <ListItem label='Категории'>Украшения и бижутерия</ListItem>
              <ListItem label='Цена'>550.0</ListItem>
              <ListItem label='Прибыль'>182.0</ListItem>
              <ListItem label='Доступность'>5</ListItem>
              <ListItem label='Ключевые слова'>
                <div className='Tags'>
                  {[['кольцо из властелина колец', 554502],
                    ['кольцо как из властелина колец', 554502],
                    ['кольцо всевластия', 9927]].map((keyword, i) =>
                    <Tag key={i} label={keyword[0]} value={keyword[1]} />)}
                </div>
              </ListItem>
            </List>
          </PanelItem.Body>
        </PanelItem>
      </Panel>
    )
  }
}
