import './App.sass'
import React, {Component} from 'react'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-main'>
          <header className='App-header'>
          </header>

          <div className='clearfix'>
            <section className='App-content'>
              <div className='App-contentInner'>
                <div className='App-mainContent'>
                </div>
              </div>
            </section>

            <aside className='App-sidebar'>
            </aside>
          </div>
          <div className='App-empty'/>
        </div>

        <footer className='App-footer'>
          <div className='App-footerInner'>
          </div>
        </footer>
      </div>
    )
  }
}

