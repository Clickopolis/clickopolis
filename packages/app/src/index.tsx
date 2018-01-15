import * as React from 'react';
import { App } from './components';
import { render } from 'react-dom';

import './styles/global.scss';

render(
    <App />,
    document.getElementById('root')
);