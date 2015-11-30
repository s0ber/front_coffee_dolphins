import React, {Component} from 'react'
import {Panel} from 'layouts/Panel'
import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {CheckBox} from 'forms/CheckBox'
import {SmallButton} from 'layouts/SmallButton'

export class Login extends Component {
  render() {
    return (
      <Panel forLoginForm>
        <Panel.Header title='Lasciate ogne speranza, voi ch’intrate' />
        <Panel.Body>
          <Form>
            <Form.Fields>
              <TextBox required label='Email' />
              <TextBox password label='Пароль' />
              <CheckBox label='Запомнить меня' />
            </Form.Fields>
            <Form.Actions>
              <SmallButton title='Войти' color='green' />
            </Form.Actions>
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}
