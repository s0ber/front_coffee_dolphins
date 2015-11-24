global.__UNIVERSAL__ = false;
window.__DATA__ = {}

import './styles/index.sass'
import 'font-awesome-webpack'

import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'
// import {Layout} from 'layouts/Layout'
import createStore from './store'
import {reduxTinyRouter} from 'redux-tiny-router'

const store = createStore(window.__DATA__, window.location.href);

document.addEventListener('DOMContentLoaded', () => {
  reduxTinyRouter.init(store);
  render(<Root store={store}/>, document.getElementById('root'))
})
