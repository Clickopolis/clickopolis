import * as React from 'react';
import { connect } from 'react-redux';

import { Button } from '@clickopolis/core';

import { turnOnFlag } from 'actions';
import { StartScreenOptions } from 'components/StartScreenOptions';

import './StartScreen.scss';

export interface StartScreenProps {
    turnOnFlag: turnOnFlag;
}

export class StartScreenBase extends React.Component<StartScreenProps> {
    constructor(props:StartScreenProps) {
        super(props);
    }

    private loadOptions = () => {

    }

    public render() {
        return (
            <div className='start-screen'>
                <h1 className='clickopolis-heading'>Clickopolis <img src='./images/icon.png' /></h1>
                <Button onClick={this.loadOptions} iconHeight='1rem' icon='./images/plus.svg' className='start-new-game-button' value='Start New Game' />
                <StartScreenOptions />
            </div>
        );
    }
}

export const StartScreen = connect(
    null,
    {
        turnOnFlag
    }
)(StartScreenBase as any);
