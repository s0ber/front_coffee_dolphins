import './Layout.sass'
import React, {Component} from 'react'
import {FlashMessages} from 'layouts/FlashMessages'
import {Footer} from 'layouts/Footer'

export class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {this.props.isFlashMessagesShown && <FlashMessages />}
        {this.props.children}
      </div>
    )
  }
}

Layout.Header = class extends Component {
  render() {
    return (
      <header className='Layout-header'>
        {this.props.children}
      </header>
    )
  }
}

Layout.Main = class extends Component {
  render() {
    return (
      <div className='Layout-main'>
        {this.props.children}
        <div className='Layout-empty' />
      </div>
    )
  }
}

Layout.Body = class extends Component {
  render() {
    return (
      <div className='Layout-body'>
        {this.props.children}
      </div>
    )
  }
}

Layout.Content = class extends Component {
  render() {
    return (
      <section className='Layout-content'>
        {this.props.children}
      </section>
    )
  }
}

Layout.Sidebar = class extends Component {
  render() {
    return (
      <aside className='Layout-sidebar'>
        {this.props.children}
      </aside>
    )
  }
}

Layout.Footer = class extends Component {
  render() {
    return (
      <footer className='Layout-footer'>
        <div className='Layout-footerInner'>
          <Footer />
        </div>
      </footer>
    )
  }
}

Layout.Modals = class extends Component {
  render() {
    return (
      <div>
        <div className='Layout-modalBg'></div>
        <div className='Layout-modals'>
          <div className='Layout-modalsInner'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
