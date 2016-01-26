import './Pagination.sass'
import React, {Component} from 'react'
import classNames from 'classnames'
import {Link} from 'layouts/Link'

const PAGES_OFFSET = 4

export class Pagination extends Component {
  pagePath = (pageNum) => {
    if (pageNum == 1) {
      return this.props.pagePathFn()
    } else {
      return this.props.pagePathFn({page: pageNum})
    }
  }

  render() {
    const {currentPage, totalPages, nextPage, prevPage} = this.props.pagination
    let page, isInsideLeftOffset, isInsideRightOffset

    return (
      <nav className='Pagination'>
        {Array(totalPages).fill().map((_, i) => {
          page = i + 1
          isInsideLeftOffset = page >= (currentPage - PAGES_OFFSET) && page < currentPage
          isInsideRightOffset = page > currentPage && page <= (currentPage + PAGES_OFFSET)

          if (page == currentPage) {
            return <span key={page} className='Pagination-page is-current'>{page}</span>
          } else if (page == 1 && !isInsideLeftOffset) {
            return <span key={page} className='Pagination-first'><Link path={this.pagePath(page)}>&larr; Первая</Link></span>
          } else if (page == totalPages && !isInsideRightOffset) {
            return <span key={page} className='Pagination-last'><Link path={this.pagePath(page)}>Последняя &rarr;</Link></span>
          } else if (isInsideLeftOffset || isInsideRightOffset) {
            return <span key={page} className='Pagination-page'><Link path={this.pagePath(page)}>{page}</Link></span>
          } else if (page == (currentPage - PAGES_OFFSET - 1) || page == (currentPage + PAGES_OFFSET + 1)) {
            return <span key={page} className='Pagination-gap'>...</span>
          }
        })}

        <div className='Pagination-switcher'>
          {prevPage && <span className='Pagination-prev'><a href='#'>&larr;</a></span>}
          {nextPage && <span className='Pagination-next'><a href='#'>&rarr;</a></span>}
        </div>
      </nav>
    )
  }
}
