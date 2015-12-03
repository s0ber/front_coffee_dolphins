import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, getValues} from 'redux-form'
import loginUser from 'action_creators/loginUser'

import {Panel} from 'layouts/Panel'
import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {CheckBox} from 'forms/CheckBox'
import {SmallButton} from 'layouts/SmallButton'

const fields = ['email', 'password', 'remember_me']

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const fieldsValues = this.props.loginForm ? getValues(this.props.loginForm) : {}
    return this.props.dispatch(loginUser(fieldsValues))
  }

  render() {
    const {fields: {email, password, remember_me}} = this.props

    return (
      <Panel forLoginForm>
        <Panel.Header title='Lasciate ogne speranza, voi ch’intrate' />
        <Panel.Body>
          <Form handleSubmit={this.handleSubmit}>
            <Form.Fields>
              <TextBox required label='Email' {...email} />
              <TextBox password label='Пароль' {...password} />
              <CheckBox label='Запомнить меня' {...remember_me} />
            </Form.Fields>
            <Form.Actions>
              <SmallButton submit isLoading={this.props.submitting} title='Войти' color='green' onClick={this.handleSubmit} />
            </Form.Actions>
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}

Login = reduxForm({
  form: 'login', fields
})(Login)

function select(state) {
  return {
    loginForm: state.form.login
  }
}

export default connect(select)(Login)
