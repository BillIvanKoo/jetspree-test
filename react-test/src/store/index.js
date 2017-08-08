import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'

import reducer from '../reducers';

const middlewares = applyMiddleware(logger)

export default createStore(reducer, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))