import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'
import {Uploader} from 'layouts/Uploader'
import {SimplePanel} from 'layouts/SimplePanel'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'

import {TextBox} from 'forms/TextBox'

import {Status} from 'inline/Status'

export class PanelWithDraggableItems extends Component {
  render() {
    return (
      <Panel>
        <Panel.Header title='Редактирование лендинга' />
        <Panel.Body hasPadding>
          <Uploader />
          <div>
            <SimplePanel>
              <List isDraggable photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                <ListItem label='ID Позиции'>500119</ListItem>
                <ListItem label='Категории'>Украшения и бижутерия</ListItem>
                <ListItem label='Цена'>550.0</ListItem>
                <ListItem label='Прибыль'>
                  <Status green>Одобрено</Status>
                </ListItem>
              </List>
            </SimplePanel>

            <SimplePanel>
              <List isDraggable photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                <ListItem label='ID Позиции'>500119</ListItem>
                <ListItem label='Категории'>
                  <TextBox isListValue value='Украшения и бижутерия' />
                </ListItem>
                <ListItem label='Цена'>550.0</ListItem>
                <ListItem label='Прибыль'>
                  <Status red>Отклонено</Status>
                </ListItem>
              </List>
            </SimplePanel>
          </div>
        </Panel.Body>
      </Panel>
    )
  }
}
