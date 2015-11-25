import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {devTools} from 'redux-devtools'
import {tinyMiddleware, tinyReducer} from 'redux-tiny-router'
import createLogger from 'redux-logger'
import * as rootReducers from 'reducers'

const reducers = combineReducers(Object.assign({}, tinyReducer, rootReducers))
const middleware = [thunk, tinyMiddleware, createLogger()]
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  devTools()
)(createStore)

export default function(data, url) {
  return finalCreateStore(reducers, data)
}
