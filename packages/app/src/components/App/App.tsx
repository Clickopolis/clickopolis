import * as React from 'react';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen } from 'components/CivilizationScreen';

export class App extends React.Component {
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <div id='app' className='clickopolis-app'>
                <Menu />
                <div id='screen-container' style={{
                    display: 'flex',
                }}>
                    <ResourcesScreen />
                    <CivilizationScreen />
                </div>
            </div>
        );
    }
}