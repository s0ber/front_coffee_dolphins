import React, {Component} from 'react'

import {PanelItem} from 'layouts/PanelItem'
import {Text} from 'inline/Text'

export class PanelItemEmpty extends Component {
  render() {
    return (
      <PanelItem>
        <PanelItem.Header title='Панелька вложенная с пустым списком заметок' />
        <PanelItem.Body hasPadding>
          <Text>
            <p>Нет заметок.</p>
          </Text>
        </PanelItem.Body>
      </PanelItem>
    )
  }
}
