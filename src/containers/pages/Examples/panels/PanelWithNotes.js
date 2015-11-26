import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'
import {Note} from 'layouts/Note'
import {SmallButton} from 'layouts/SmallButton'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {Textarea} from 'forms/Textarea'

export class PanelWithNotes extends Component {
  render() {
    return (
      <Panel>
        <Panel.Header title='Список заметок'>
          <SmallButton disabled color='green' title='Добавить новую' />
        </Panel.Header>
        <Panel.Body hasPadding>
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
        </Panel.Body>
      </Panel>
    )
  }
}
