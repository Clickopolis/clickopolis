import * as React from 'react';

import { Menu } from '../Menu';
import { ResourcesScreen } from 'components/ResourcesScreen';
import { CivilizationScreen } from 'components/CivilizationScreen';
import { CitizensScreen } from 'components/CitizensScreen';

const NUM_OF_COMPONENTS = 3;

export class App extends React.Component {
    public intervalId: any;
    public scrollElement: HTMLElement;

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer() {

    }

    public render() {
        return (
            <div id='app' className='clickopolis-app'>
                <Menu />
                <div data-scroll id='screen-container' style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: 'calc(100% - 48px)',
                    width: `calc(800px * ${NUM_OF_COMPONENTS})`
                }}>
                    <ResourcesScreen />
                    <CivilizationScreen />
                    <CitizensScreen />
                </div>
            </div>
        );
    }
}