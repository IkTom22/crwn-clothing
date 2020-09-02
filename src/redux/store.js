import { createStore, applyMiddleware } from 'redux';
//logger is helpful to debug redux code
import  logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;