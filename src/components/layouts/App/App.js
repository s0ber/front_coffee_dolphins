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
                    <PanelItem title={<a href='#'>Кольцо Всевластия</a>}
                               buttons={<div>
                                 <SmallButton color='green' icon='plus' />
                                 <SmallButton className='is-like'>
                                   <Icon fa='heart-o' />
                                 </SmallButton>
                                 <SmallButton icon='pencil' />
                                 <SmallButton color='red' icon='close' />
                               </div>}>

                      <List photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                        <ListItem label='ID Позиции'>500119</ListItem>
                        <ListItem label='Категории'>Украшения и бижутерия</ListItem>
                        <ListItem label='Цена'>550.0</ListItem>
                        <ListItem label='Прибыль'>182.0</ListItem>
                        <ListItem label='Доступность'>5</ListItem>
                        <ListItem label='Ключевые слова'>
                          {[['кольцо из властелина колец', 554502],
                            ['кольцо как из властелина колец', 554502],
                            ['кольцо всевластия', 9927]].map((keyword, i) =>
                            <Tag key={i} label={keyword[0]} value={keyword[1]} />)}
                        </ListItem>
                      </List>
                    </PanelItem>

                    <PanelItem>
                      <List photoSrc='http://www.apishops.com/index.tree.ajax?action=image&id=1909766&big=true' photoTitle='Кольцо Всевластия'>
                        <ListItem label='ID Позиции'>500119</ListItem>
                        <ListItem label='Категории'>Украшения и бижутерия</ListItem>
                        <ListItem label='Цена'>550.0</ListItem>
                        <ListItem label='Прибыль'>182.0</ListItem>
                        <ListItem label='Доступность'>5</ListItem>
                        <ListItem label='Ключевые слова'></ListItem>
                      </List>
                    </PanelItem>
                  </div>
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
