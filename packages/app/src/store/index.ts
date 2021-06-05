import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// @ts-ignore no @types module
// @ts-ignore no @types module
import { persistCombineReducers, persistStore } from 'redux-persist';
// @ts-ignore no @types module
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';
import { rootSaga } from '../sagas';

const config = {
  key: 'root',
  blacklist: ['router', 'notifications'],
  storage
};

const persistReducers = persistCombineReducers(config, reducers);

// const loggerMiddleware = createLogger({
//   predicate: (_, action) => action.type !== 'GROW_FOOD' || action.type === 'CREATE_PRODUCTION'
// });
const sagaMiddleware = createSagaMiddleware();

export const store:any = createStore(
  persistReducers,
  applyMiddleware(
    thunkMiddleware,
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    // loggerMiddleware,
    sagaMiddleware,
  )
);

export const persistor = persistStore(
  store,
  null,
  () => store.getState()
);

sagaMiddleware.run(rootSaga);