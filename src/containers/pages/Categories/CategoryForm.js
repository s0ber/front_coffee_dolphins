import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import updateCategory from 'actions/categories/updateCategory'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {Textarea} from 'forms/Textarea'
import {SmallButton} from 'layouts/SmallButton'

@reduxForm({
  form: 'category',
  fields: ['id', 'title', 'description', 'slug', 'html_title', 'meta_description']
})
export default class extends Component {
  submit = (values) => {
    return this.props.dispatch(updateCategory(values))
  }

  render() {
    const {fields: {title, description, slug, html_title, meta_description}} = this.props

    return (
      <Form onSubmit={this.props.handleSubmit(this.submit)}>
        <Form.Fields>
          <TextBox required label='Название' {...title} />
          <Textarea required label='Описание' {...description} />
          <TextBox required label='URL slug' {...slug} />
          <TextBox required label='HTML title' {...html_title} />
          <TextBox required label='Описание для SEO (meta description)' {...meta_description} />
        </Form.Fields>

        <Form.Actions>
          <SmallButton onClick={this.props.handleCancelEdit} title='Отмена' />
          <SmallButton submit isLoading={this.props.submitting} title='Сохранить' color='green' />
        </Form.Actions>
      </Form>
    )
  }
}
