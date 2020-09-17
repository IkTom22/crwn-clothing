import { createStore, applyMiddleware } from 'redux';
//allow the user to cache 
import { persistStore } from 'redux-persist';
//logger is helpful to debug redux code
import  logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];
if(process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default { store, persistor };