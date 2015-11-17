import './App.sass'
import React, {Component} from 'react'
import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'
import {Page} from 'layouts/Page'
import {SmallButton} from 'layouts/SmallButton'
import {Footer} from 'layouts/Footer'
import {Filters} from 'layouts/Filters'
import {Pagination} from 'layouts/Pagination'
import {Panel} from 'layouts/Panel'
import {PanelItem} from 'layouts/PanelItem'
import {List} from 'layouts/List'
import {ListItem} from 'layouts/ListItem'
import {Tag} from 'layouts/Tag'

import {Icon} from 'icons/Icon'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {SelectBox} from 'forms/SelectBox'
import {CheckBox} from 'forms/CheckBox'
import {CheckBoxesList} from 'forms/CheckBoxesList'
import {RadioButtonsList} from 'forms/RadioButtonsList'
import {Textarea} from 'forms/Textarea'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-main'>
          <header className='App-header'>
            <Header />
          </header>

          <div className='App-clearfix'>
            <section className='App-content'>
              <Page>
                <Page.Title>
                  <SmallButton title='Импортировать' />
                  <SmallButton title='Добавить новую' color='green' />
                </Page.Title>
                <Filters />
                <Page.Body>
                  <Pagination />
                  <div className='Panels'>
                    <Panel>
                      <Panel.Header title='Форма в панельке' />
                      <Panel.Body>
                        <Form>
                          <Form.Fields>
                            <TextBox label='Ваше имя' value='Сергей' />
                            <SelectBox label='Ваша страна' collection={[{text: 'Выберите страну'}, {text: 'Россия', value: 1}]} />
                            <CheckBox label='Вы согласны с правилами использования сайта?' />
                            <CheckBoxesList label='Выберите участников' collection={[{text: 'Рита', value: 'rita'}, {text: 'Сергей', value: 'sergey'}]} />
                            <RadioButtonsList label='Выберите тип лендинга' collection={[{text: 'Обычный', value: 1}, {text: 'Продвинутый', value: 2}, {text: 'Крутой', value: 3}]} />
                            <Textarea label='Расскажите о себе' placeholder='Плииииззз...' value='Ну я, эм... Это самое.' />
                          </Form.Fields>
                          <Form.Actions>
                            <SmallButton color='green' title='Отправить' />
                          </Form.Actions>
                        </Form>
                      </Panel.Body>
                    </Panel>

                    <Panel>
                      <PanelItem>
                        <PanelItem.Header title={<a href='#'>Кольцо Всевластия</a>}>
                          <SmallButton color='green' icon='plus' />
                          <SmallButton className='is-like'><Icon fa='heart-o' /></SmallButton>
                          <SmallButton icon='pencil' />
                          <SmallButton color='red' icon='close' />
                        </PanelItem.Header>

                        <PanelItem.Body>
                          <List photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                            <ListItem label='ID Позиции'>500119</ListItem>
                            <ListItem label='Категории'>Украшения и бижутерия</ListItem>
                            <ListItem label='Цена'>550.0</ListItem>
                            <ListItem label='Прибыль'>182.0</ListItem>
                            <ListItem label='Доступность'>5</ListItem>
                            <ListItem label='Ключевые слова'>
                              <div className='Tags'>
                                {[['кольцо из властелина колец', 554502],
                                  ['кольцо как из властелина колец', 554502],
                                  ['кольцо всевластия', 9927]].map((keyword, i) =>
                                  <Tag key={i} label={keyword[0]} value={keyword[1]} />)}
                              </div>
                            </ListItem>
                          </List>
                        </PanelItem.Body>
                      </PanelItem>
                    </Panel>

                    <Panel>
                      <PanelItem>
                        <PanelItem.Header title={<a href='#'>Кольцо Всевластия</a>} />
                        <PanelItem.Body>
                          <Form>
                            <Form.Fields>
                              <TextBox label='Название' value='Кольцо Всевластия' required />
                              <TextBox label='Категория' value='Украшения и бижутерия' />
                              <TextBox label='Цена' value='550.0' hint='в рублях, дробная часть отделяется точкой' required />
                            </Form.Fields>
                            <Form.Actions>
                              <SmallButton title='Отмена' />
                              <SmallButton title='Сохранить' color='green'/>
                            </Form.Actions>
                          </Form>
                        </PanelItem.Body>
                      </PanelItem>
                    </Panel>
                  </div>

                  <Pagination />
                </Page.Body>
              </Page>
            </section>

            <aside className='App-sidebar'>
              <Menu />
            </aside>
          </div>
          <div className='App-empty' />
        </div>

        <footer className='App-footer'>
          <div className='App-footerInner'>
            <Footer />
          </div>
        </footer>
      </div>
    )
  }
}
