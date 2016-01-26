import React, {Component} from 'react'
import {Form} from 'forms/Form'
import {SmallButton} from 'layouts/SmallButton'

export default class extends Component {
  render() {
    return (
      <Form>
        <Form.Fields>
        </Form.Fields>

        <Form.Actions>
          <SmallButton onClick={this.props.handleCancelEdit} title='Отмена' />
          <SmallButton submit title='Сохранить' color='green'/>
        </Form.Actions>
      </Form>
    )
  }
}
