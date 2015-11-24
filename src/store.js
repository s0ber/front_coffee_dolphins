import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {devTools} from 'redux-devtools';
import appMiddleware from './middleware/appmiddleware'
import {tinyMiddleware, tinyReducer} from 'redux-tiny-router';
import createLogger from 'redux-logger';
// import rootReducer from '../reducers'

let middleware = [thunk, appMiddleware, tinyMiddleware, createLogger()];
let finalCreateStore = compose(
  applyMiddleware(...middleware),
  devTools()
)(createStore);

export default function (data, url) {
  var reducer = combineReducers(Object.assign({}, tinyReducer));

  return finalCreateStore(reducer, data)
}
