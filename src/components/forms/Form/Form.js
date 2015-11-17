import React, {Component} from 'react'

export class Form extends Component {
  render() {
    return (<form className='Form' action='#'>{this.props.children}</form>)
  }
}

Form.Fields = class extends Component {
  render() {
    return (<div className='Form-fields'>{this.props.children}</div>)
  }
}

Form.Actions = class extends Component {
  render() {
    return (<div className='Form-actions'>{this.props.children}</div>)
  }
}
