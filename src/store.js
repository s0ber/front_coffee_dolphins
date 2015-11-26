import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {devTools} from 'redux-devtools'
import createLogger from 'redux-logger'
import * as rootReducers from 'reducers'

const reducers = combineReducers(rootReducers)
const middleware = [thunk, createLogger()]
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  devTools()
)(createStore)

export default function(data, url) {
  return finalCreateStore(reducers, data)
}
