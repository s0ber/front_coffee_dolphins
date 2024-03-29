import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import createUser from 'actions/users/createUser'
import updateUser from 'actions/users/updateUser'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {Textarea} from 'forms/Textarea'
import {RadioButtonsList} from 'forms/RadioButtonsList'
import {SmallButton} from 'layouts/SmallButton'

const GENDERS = [{text: 'Парень', value: 'true'}, {text: 'Девушка', value: 'false'}]

@reduxForm({
  form: 'user',
  fields: ['id', 'email', 'full_name', 'description', 'gender', 'password', 'password_confirmation']
})
export default class extends Component {
  submit = (values) => {
    if (this.props.newItemForm) {
      return this.props.dispatch(createUser(values))
    } else {
      return this.props.dispatch(updateUser(values))
    }
  }

  render() {
    const {fields: {email, full_name, description, gender, password, password_confirmation}} = this.props

    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Form.Fields>
          <TextBox required label='Email' {...email} />
          <TextBox required label='Имя' {...full_name} />
          <Textarea label='Описание' {...description} />
          <RadioButtonsList required label='Пол' collection={GENDERS} {...gender} />
          <TextBox password label='Пароль' {...password} />
          <TextBox password label='Подтверждение пароля' {...password_confirmation} />
        </Form.Fields>

        <Form.Actions>
          <SmallButton onClick={this.props.handleCancel} title='Отмена' />
          <SmallButton submit title={this.props.newItemForm ? 'Добавить пользователя' : 'Сохранить'} color='green' isLoading={this.props.submitting} />
        </Form.Actions>
      </Form>
    )
  }
}
