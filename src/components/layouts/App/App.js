import './App.sass'
import React, {Component} from 'react'
import {Header} from 'layouts/Header'
import {Menu} from 'layouts/Menu'
import {Title as PageTitle, Body as PageBody} from 'layouts/Page'
import {SmallButton} from 'layouts/SmallButton'
import {Footer} from 'layouts/Footer'
import {Filters} from 'layouts/Filters'
import {Pagination} from 'layouts/Pagination'
import {Panel} from 'layouts/Panel'
import {PanelItem} from 'layouts/PanelItem'

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
              <div className='App-contentInner'>
                <PageTitle>
                  <SmallButton title='Импортировать' />
                  <SmallButton title='Добавить новую' color='green' />
                </PageTitle>
                <Filters />
                <PageBody>
                  <Pagination />
                  <div className='Panels'>
                    <PanelItem />
                  </div>
                </PageBody>
              </div>
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
