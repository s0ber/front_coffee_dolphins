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
    const {pagination, pagePathFn} = this.props
    return (pagination ? <Pagination {...{pagination, pagePathFn}} /> : null)
  }
}
