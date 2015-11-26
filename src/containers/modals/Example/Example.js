import React, {Component} from 'react'
import {Modal} from 'layouts/Modal'
import {Form} from 'forms/Form'
import {FileBox} from 'forms/FileBox'
import {SmallButton} from 'layouts/SmallButton'

export class Example extends Component {
  render() {
    return (
      <Modal title='Тестовая модалка'>
        <Form forModal>
          <Form.Fields>
            <FileBox required label='CSV файл' />
          </Form.Fields>
          <Form.Actions>
            <SmallButton title='Отмена' />
            <SmallButton title='Сохранить' color='green' />
          </Form.Actions>
        </Form>
      </Modal>
    )
  }
}
