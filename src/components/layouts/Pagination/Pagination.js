import './Pagination.sass'
import React, {Component} from 'react'

export class Pagination extends Component {
  render() {
    return (
      <nav className='Pagination'>
        <span className='Pagination-page is-current'>1</span>
        <span className='Pagination-page'><a href='#'>2</a></span>
        <span className='Pagination-page'><a href='#'>3</a></span>
        <span className='Pagination-page'><a href='#'>4</a></span>
        <span className='Pagination-page'><a href='#'>5</a></span>
        <span className='Pagination-gap'>...</span>
        <span className='Pagination-last'><a href='#'>Последняя &rarr;</a></span>

        <div className='Pagination-switcher'>
          <span className='Pagination-next'><a href='#'>&rarr;</a></span>
        </div>
      </nav>
    )
  }
}
