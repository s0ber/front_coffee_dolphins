import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import loginUser from 'actions/loginUser'

import {Panel} from 'layouts/Panel'
import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {CheckBox} from 'forms/CheckBox'
import {SmallButton} from 'layouts/SmallButton'

@reduxForm({
  form: 'login', fields: ['email', 'password', 'remember_me']
})
class Login extends Component {
  submit = (values) => {
    return this.props.dispatch(loginUser(values))
  }

  render() {
    const {fields: {email, password, remember_me}} = this.props

    return (
      <Panel forLoginForm>
        <Panel.Header title='Lasciate ogne speranza, voi ch’intrate' />
        <Panel.Body>
          <Form onSubmit={this.props.handleSubmit(this.submit)}>
            <Form.Fields>
              <TextBox required label='Email' {...email} />
              <TextBox password label='Пароль' {...password} />
              <CheckBox label='Запомнить меня' {...remember_me} />
            </Form.Fields>
            <Form.Actions>
              <SmallButton submit isLoading={this.props.submitting} title='Войти' color='green' />
            </Form.Actions>
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}

export default Login
