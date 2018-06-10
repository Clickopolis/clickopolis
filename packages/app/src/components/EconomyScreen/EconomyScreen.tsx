import * as React from 'react';
import { Screen } from '@clickopolis/core';
import { connect } from 'react-redux';

import { colors } from 'utils';

import './EconomyScreen.scss';

export interface EconomyScreenProps {

}

export class EconomyScreenBase extends React.Component<EconomyScreenProps> {
    constructor(props:EconomyScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Economy'
                color={colors.get('economy')}
            >

            </Screen>
        );
    }
}

export const EconomyScreen = connect(
    null,
    null
)(EconomyScreenBase);
