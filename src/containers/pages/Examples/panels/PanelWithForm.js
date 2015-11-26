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
              <TextBox required label='Ваше имя' value='Сергей' error='обязательно для заполнения' />
              <SelectBox label='Ваша страна' collection={[{text: 'Выберите страну'}, {text: 'Россия', value: 1}]} />
              <CheckBox label='Вы согласны с правилами использования сайта?' />
              <CheckBoxesList label='Выберите участников' collection={[{text: 'Рита', value: 'rita'}, {text: 'Сергей', value: 'sergey'}]} />
              <RadioButtonsList label='Выберите тип лендинга' collection={[{text: 'Обычный', value: 1}, {text: 'Продвинутый', value: 2}, {text: 'Крутой', value: 3}]} />
              <Textarea label='Расскажите о себе' placeholder='Плииииззз...' value='Ну я, эм... Это самое.' />
              <TextBox label='Цена' value='550.0' hint='в рублях, дробная часть отделяется точкой' required />
              <TextBox label='Ключевые слова' required>
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
