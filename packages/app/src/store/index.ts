import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// @ts-ignore no @types module
import { persistCombineReducers, persistStore } from 'redux-persist';
// @ts-ignore no @types module
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';

const config = {
  key: 'root',
  blacklist: ['router', 'notifications'],
  storage
};

const persistReducers = persistCombineReducers(config, reducers);

// const loggerMiddleware = createLogger({
//   predicate: (_, action) => action.type != 'GROW_FOOD' || action.type != 'CREATE_PRODUCTION'
// });

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    
    thunkMiddleware,
    
    //loggerMiddleware,
    //(window as any).__REDUX_DEVTOOLS_EXTENSION  && (window as any).__REDUX_DEVTOOLS_EXTENSION(),
  )
));

export const persistor = persistStore(
  store,
  null,
  () => store.getState()
);