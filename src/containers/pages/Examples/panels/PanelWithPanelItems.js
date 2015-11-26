import React, {Component} from 'react'

import {Panel} from 'layouts/Panel'

import {PanelItemWithNotes} from './PanelItemWithNotes'
import {PanelItemEmpty} from './PanelItemEmpty'

export class PanelWithPanelItems extends Component {
  render() {
    return (
      <Panel>
        <PanelItemWithNotes />
        <PanelItemEmpty />
      </Panel>
    )
  }
}
