import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
// @ts-ignore: importing core
import { Screen, Button } from '@clickopolis/core';

import './SettingsScreen.scss';

export interface SettingsScreenProps {

}

export class SettingsScreenBase extends React.Component<SettingsScreenProps> {
    constructor(props:SettingsScreenProps) {
        super(props);
    }

    private deleteData = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    public render() {
        return (
            <Screen
                type='Settings'
                color={colors.get('settings')}
            >
                <Button className='delete-button' icon={'./images/trash.svg'} onClick={this.deleteData} value={'Delete Data'} />
            </Screen>
        );
    }
}

export const SettingsScreen = connect(
    null,
    null
)(SettingsScreenBase);
