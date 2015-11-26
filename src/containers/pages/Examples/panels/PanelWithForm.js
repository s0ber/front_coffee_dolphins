import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'
import {SmallButton} from 'layouts/SmallButton'
import {EditableTag} from 'layouts/EditableTag'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {SelectBox} from 'forms/SelectBox'
import {CheckBox} from 'forms/CheckBox'
import {CheckBoxesList} from 'forms/CheckBoxesList'
import {RadioButtonsList} from 'forms/RadioButtonsList'
import {Textarea} from 'forms/Textarea'

export class PanelWithForm extends Component {
  render() {
    return (
      <Panel>
        <Panel.Header title='Панелька с формой' />
        <Panel.Body>
          <Form>
            <Form.Fields>
              <TextBox required label='Текстовое поле' value='...' error='обязательно для заполнения' hint='подсказка...' />
              <SelectBox label='Выпадающий список' collection={[{text: 'Выберите страну'}, {text: 'Россия', value: 1}]} />
              <CheckBox label='Подтверждающий чекбокс. Подтвердить действие?' />
              <CheckBoxesList label='Коллекция чекбоксов' collection={[{text: 'Рита', value: 'rita'}, {text: 'Сергей', value: 'sergey'}]} />
              <RadioButtonsList label='Коллекция радио-кнопок' collection={[{text: 'Обычный', value: 1}, {text: 'Продвинутый', value: 2}, {text: 'Крутой', value: 3}]} />
              <Textarea label='Многострочное текстое поле' placeholder='Без значения, но с плейсхолдером...' />
              <TextBox label='Текстовое поле с дочерними компонентами' required>
                <div className='EditableTags'>
                  {[['кольцо из властелина колец', 554502],
                    ['кольцо как из властелина колец', 554502],
                    ['кольцо всевластия', 9927]].map((keyword, i) =>
                    <EditableTag key={i} label={keyword[0]} value={keyword[1]} />)}
                </div>
              </TextBox>
            </Form.Fields>

            <Form.Actions>
              <SmallButton title='Отмена' />
              <SmallButton isLoading title='Сохранить' color='green'/>
            </Form.Actions>
          </Form>
        </Panel.Body>
      </Panel>
    )
  }
}
