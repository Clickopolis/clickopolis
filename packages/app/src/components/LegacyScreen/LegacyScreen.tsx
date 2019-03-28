import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
import { Screen, Button } from '@clickopolis/core';

import './LegacyScreen.scss';

export interface LegacyScreenProps {

}

export class LegacyScreenBase extends React.Component<LegacyScreenProps> {
    constructor(props:LegacyScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Legacy'
                color={colors.get('legacy')}
            >
                <Button>
                    Pass On Your Legacy
                </Button>
            </Screen>
        );
    }
}

export const LegacyScreen = connect(
    null,
    null
)(LegacyScreenBase);
