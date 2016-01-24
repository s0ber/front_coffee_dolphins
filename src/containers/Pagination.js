import {connect} from 'react-redux'
import React, {Component} from 'react'
import {Pagination} from 'layouts/Pagination'

@connect((state) => {
  return {
    pagination: state.pagination
  }
})
export default class extends Component {
  render() {
    return (this.props.pagination ? <Pagination pagination={this.props.pagination} /> : null)
  }
}
