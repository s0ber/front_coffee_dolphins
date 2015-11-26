import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'
import {Text} from 'inline/Text'

export class PanelEmpty extends Component {
  render() {
    return (
      <Panel>
        <Panel.Header title='Без заметок' />
        <Panel.Body hasPadding>
          <Text>
            <p>Нет заметок.</p>
          </Text>
        </Panel.Body>
      </Panel>
    )
  }
}
