import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import updatePosition from 'actions/updatePosition'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {Textarea} from 'forms/Textarea'
import {SmallButton} from 'layouts/SmallButton'

@reduxForm({
  form: 'position',
  fields: ['id', 'title', 'category', 'price', 'profit', 'availability_level', 'image_url']
})
export default class extends Component {
  submit = (values) => {
    return this.props.dispatch(updatePosition(values))
  }

  render() {
    const {fields: {title, category, price, profit, availability_level, image_url}} = this.props

    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Form.Fields>
          <TextBox required label='Название' {...title} />
          <TextBox label='Категория' {...category} />
          <TextBox required label='Цена' {...price} hint='в рублях, дробная часть отделяется точкой' />
          <TextBox required label='Прибыль' {...profit} hint='в рублях, дробная часть отделяется точкой' />
          <TextBox label='Доступность' {...availability_level} hint='от 0 до 5' />
          <TextBox label='Картинка' {...image_url} />
        </Form.Fields>

        <Form.Actions>
          <SmallButton onClick={this.props.handleCancelEdit} title='Отмена' />
          <SmallButton submit isLoading={this.props.submitting} title='Сохранить' color='green'/>
        </Form.Actions>
      </Form>
    )
  }
}
