import './Pagination.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

const PAGES_OFFSET = 4

export class Pagination extends Component {
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
            return <span className='Pagination-page is-current'>{page}</span>
          } else if (page == 1 && !isInsideLeftOffset) {
            return <span className='Pagination-first'><a href='#'>&larr; Первая</a></span>
          } else if (page == totalPages && !isInsideRightOffset) {
            return <span className='Pagination-last'><a href='#'>Последняя &rarr;</a></span>
          } else if (isInsideLeftOffset || isInsideRightOffset) {
            return <span className='Pagination-page'><a href='#'>{page}</a></span>
          } else if (page == (currentPage - PAGES_OFFSET - 1) || page == (currentPage + PAGES_OFFSET + 1)) {
            return <span className='Pagination-gap'>...</span>
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
