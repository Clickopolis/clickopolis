import * as React from 'react';
import { connect } from 'react-redux';

import './StartScreen.scss';

export interface StartScreenProps {

}

export class StartScreenBase extends React.Component<StartScreenProps> {
    constructor(props:StartScreenProps) {
        super(props);
    }

    public render() {
        return (
            <div className='start-screen'>
                <h1>Clickopolis</h1>
                <img src='./images/abraham-lincoln.svg' />
            </div>
        );
    }
}

export const StartScreen = connect(
    null,
    null
)(StartScreenBase);
