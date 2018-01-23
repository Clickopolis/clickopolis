import * as React from 'react';
import { App } from './components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// @ts-ignore no @types module
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
// @ts-ignore no @types module
import { ConnectedRouter } from 'react-router-redux';
// @ts-ignore no @types module
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './store';

import './styles/global.scss';

const mountNode = document.getElementById('root');
const history = createHistory();

render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      onBeforeLift={null}
      persistor={persistor}
    >
      <ConnectedRouter history={history}>
        <Route exact path='/' component={App} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  mountNode
);

store.subscribe(() => {
  console.table(store.getState());
});

