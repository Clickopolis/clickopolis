import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
// @ts-ignore: importing core
import { Screen } from '@clickopolis/core';

import './SettingsScreen.scss';

export interface SettingsScreenProps {

}

export class SettingsScreenBase extends React.Component<SettingsScreenProps> {
    constructor(props:SettingsScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Settings'
                color={colors.get('settings')}
            >
            </Screen>
        );
    }
}

export const SettingsScreen = connect(
    null,
    null
)(SettingsScreenBase);
