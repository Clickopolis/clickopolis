import * as React from 'react';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';

export class App extends React.Component {
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <div id='app' className='clickopolis-app'>
                <Menu />
                <ResourcesScreen />
            </div>
        );
    }
}