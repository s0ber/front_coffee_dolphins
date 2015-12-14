import React, {Component} from 'react'

import {PanelWithForm} from './panels/PanelWithForm'
import {PanelWithList} from './panels/PanelWithList'
import {PanelWithDraggableItems} from './panels/PanelWithDraggableItems'
import {PanelWithPanelItems} from './panels/PanelWithPanelItems'

import {Page} from 'layouts/Page'
import {SmallButton} from 'layouts/SmallButton'
import {Filters} from 'layouts/Filters'
import {Pagination} from 'layouts/Pagination'

import {paths} from 'routes'

export default class extends Component {
  render() {
    return (
      <Page>
        <Page.Title text='Примеры лейаут-компонентов'>
          <SmallButton title='Показать модальное окно' color='green' onClick={this.showModal} />
          <SmallButton title='Вкл/выкл нотификации' onClick={this.toggleNotices} />
        </Page.Title>
        <Filters>
          <Filters.Item title='По популярности' />
          <Filters.Item title='Избранное' path={paths.FILTERED_EXAMPLES_PATH({filter: 'favorite'})} />
        </Filters>
        <Page.Body>
          <Pagination />
          <div>
            <PanelWithForm />
            <PanelWithList />
            <PanelWithDraggableItems />
            <PanelWithPanelItems />
          </div>
          <Pagination />
        </Page.Body>
      </Page>
    )
  }
}
