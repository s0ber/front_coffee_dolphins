import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {Note} from 'layouts/Note'
import {SmallButton} from 'layouts/SmallButton'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {Textarea} from 'forms/Textarea'

export class PanelItemWithNotes extends Component {
  render() {
    return (
      <PanelItem>
        <PanelItem.Header title='Панелька вложенная со списком заметок'>
          <SmallButton disabled color='green' title='Добавить новую' />
        </PanelItem.Header>
        <PanelItem.Body hasPadding>
          <Note isNew>
            <Form>
              <Form.Fields>
                <TextBox label='Заголовок' required />
                <Textarea label='Текст заметки' required />
              </Form.Fields>

              <Form.Actions>
                <SmallButton title='Отмена' />
                <SmallButton title='Добавить заметку' color='green' />
              </Form.Actions>
            </Form>
          </Note>

          <div>
            <Note>
              <Note.Header title='Тестовая заметка' author='Сергей' date='17 ноября 2015, 23:33' />
              <Note.Body>
                <p>Содержимое заметки.</p>
              </Note.Body>
            </Note>
          </div>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
