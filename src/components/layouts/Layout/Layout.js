import './Layout.sass'
import React, {Component} from 'react'
import {FlashMessages} from '../FlashMessages'
import {Header} from '../Header'
import {Menu} from '../Menu'
import {Page} from '../Page'
import {SmallButton} from '../SmallButton'
import {Footer} from '../Footer'
import {Filters} from '../Filters'
import {Pagination} from '../Pagination'
import {Panel} from '../Panel'
import {PanelItem} from '../PanelItem'
import {SimplePanel} from '../SimplePanel'
import {List} from '../List'
import {ListItem} from '../ListItem'
import {Tag} from '../Tag'
import {EditableTag} from '../EditableTag'
import {Note} from '../Note'
import {Uploader} from '../Uploader'
import {Modal} from '../Modal'

import {Icon} from 'icons/Icon'

import {Form} from 'forms/Form'
import {TextBox} from 'forms/TextBox'
import {SelectBox} from 'forms/SelectBox'
import {CheckBox} from 'forms/CheckBox'
import {CheckBoxesList} from 'forms/CheckBoxesList'
import {RadioButtonsList} from 'forms/RadioButtonsList'
import {Textarea} from 'forms/Textarea'
import {FileBox} from 'forms/FileBox'

import {Text} from 'inline/Text'
import {Status} from 'inline/Status'

export class Layout extends Component {
  state = {
    isFlashMessagesShown: false,
    isModalShown: false
  }

  showModal = (e) => {
    this.setState({isModalShown: true})
  }

  hideModal = (e) => {
    this.setState({isModalShown: false})
  }

  toggleNotices = (e) => {
    this.setState({isFlashMessagesShown: !this.state.isFlashMessagesShown})
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {changePage, selectedPage} = this.props

    return (
      <div className='Layout'>
        {this.state.isFlashMessagesShown && <FlashMessages />}
        <div className='Layout-main'>
          <header className='Layout-header'>
            <Header />
          </header>

          <div className='Layout-clearfix'>
            <section className='Layout-content'>
              <Page>
                <Page.Title selectedPage={selectedPage}>
                  <SmallButton title='Импортировать' />
                  <SmallButton title='Показать модальное окно' onClick={this.showModal} />
                  <SmallButton title='Вкл/выкл нотификации' onClick={this.toggleNotices} />
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
                            <TextBox label='Ваше имя' value='Сергей' error='обязательно для заполнения' />
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
                          <SmallButton color='green' icon='plus' onClick={changePage} />
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
                        </PanelItem.Body>
                      </PanelItem>
                    </Panel>

                    <Panel>
                      <Panel.Header title='Редактирование лендинга' />
                      <Panel.Body hasPadding>
                        <Uploader />
                        <div className='Panels'>
                          <SimplePanel>
                            <List isDraggable photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                              <ListItem label='ID Позиции'>500119</ListItem>
                              <ListItem label='Категории'>Украшения и бижутерия</ListItem>
                              <ListItem label='Цена'>550.0</ListItem>
                              <ListItem label='Прибыль'>
                                <Status green>Одобрено</Status>
                              </ListItem>
                            </List>
                          </SimplePanel>

                          <SimplePanel>
                            <List isDraggable photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                              <ListItem label='ID Позиции'>500119</ListItem>
                              <ListItem label='Категории'>
                                <TextBox isListValue value='Украшения и бижутерия' />
                              </ListItem>
                              <ListItem label='Цена'>550.0</ListItem>
                              <ListItem label='Прибыль'><Status red>Отклонено</Status></ListItem>

                            </List>
                          </SimplePanel>
                        </div>
                      </Panel.Body>
                    </Panel>

                    <Panel>
                      <Panel.Header title='Список заметок'>
                        <SmallButton disabled color='green' title='Добавить новую' />
                      </Panel.Header>
                      <Panel.Body hasPadding>
                        <Note isNew>
                          <Form>
                            <Form.Fields>
                              <TextBox label='Заголовок' required />
                              <Textarea label='Текст заметки' required />
                            </Form.Fields>

                            <Form.Actions>
                              <SmallButton title='Отмена' />
                              <SmallButton title='Добавить заметку' color='green' />
                            </Form.Actions>
                          </Form>
                        </Note>

                        <div>
                          <Note>
                            <Note.Header title='Тестовая заметка' author='Сергей' date='17 ноября 2015, 23:33' />
                            <Note.Body>
                              <p>Содержимое заметки.</p>
                            </Note.Body>
                          </Note>
                        </div>
                      </Panel.Body>
                    </Panel>

                    <Panel>
                      <Panel.Header title='Без заметок' />
                      <Panel.Body hasPadding>
                        <Text>
                          <p>Нет заметок.</p>
                        </Text>
                      </Panel.Body>
                    </Panel>

                  </div>
                  <Pagination />
                </Page.Body>
              </Page>
            </section>

            <aside className='Layout-sidebar'>
              <Menu selectedPage={selectedPage} />
            </aside>
          </div>
          <div className='Layout-empty' />
        </div>

        <footer className='Layout-footer'>
          <div className='Layout-footerInner'>
            <Footer />
          </div>
        </footer>

        {this.state.isModalShown && <div className='Layout-modalBg' />}
        {this.state.isModalShown && <div className='Layout-modals'>
                                      <div className='Layout-modalsInner'>
                                        <Modal>
                                          <Modal.Header>
                                            Тестовая модалка
                                          </Modal.Header>
                                          <Modal.Body>
                                            <Form forModal>
                                              <Form.Fields>
                                                <FileBox required label='CSV файл' />
                                              </Form.Fields>
                                              <Form.Actions>
                                                <SmallButton title='Отмена' onClick={this.hideModal} />
                                                <SmallButton title='Сохранить' color='green' />
                                              </Form.Actions>
                                            </Form>
                                          </Modal.Body>
                                        </Modal>
                                      </div>
                                    </div>}
      </div>
    )
  }
}
