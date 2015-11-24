import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {devTools} from 'redux-devtools'
import {tinyMiddleware, tinyReducer} from 'redux-tiny-router'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'

const middleware = [thunk, tinyMiddleware, createLogger()]
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  devTools()
)(createStore)

export default function(data, url) {
  const reducer = combineReducers(Object.assign({}, tinyReducer, rootReducer))
  return finalCreateStore(reducer, data)
}
