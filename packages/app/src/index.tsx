import * as React from 'react';
import { App } from './components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore no @types module
import { ConnectedRouter } from 'react-router-redux';
// @ts-ignore no @types module
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './store';

import './styles/global.scss';

const mountNode = document.getElementById('root');

render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      onBeforeLift={null}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  mountNode
);

store.subscribe(() => {});

