import React, {Component} from 'react'

import {PanelWithForm} from './panels/PanelWithForm'
import {PanelWithList} from './panels/PanelWithList'
import {PanelWithDraggableItems} from './panels/PanelWithDraggableItems'
import {PanelWithNotes} from './panels/PanelWithNotes'
import {PanelEmpty} from './panels/PanelEmpty'

import {Page} from 'layouts/Page'
import {SmallButton} from 'layouts/SmallButton'
import {Filters} from 'layouts/Filters'
import {Pagination} from 'layouts/Pagination'

export class Examples extends Component {
  render() {
    return (
      <Page>
        <Page.Title text='Примеры лейаут-компонентов'>
          <SmallButton title='Показать модальное окно' color='green' onClick={this.showModal} />
          <SmallButton title='Вкл/выкл нотификации' onClick={this.toggleNotices} />
        </Page.Title>
        <Filters />
        <Page.Body>
          <Pagination />
          <div>
            <PanelWithForm />
            <PanelWithList />
            <PanelWithDraggableItems />
            <PanelWithNotes />
            <PanelEmpty />
          </div>
          <Pagination />
        </Page.Body>
      </Page>
    )
  }
}
