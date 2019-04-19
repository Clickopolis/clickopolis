import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
// @ts-ignore: importing core
import { Screen, Button } from '@clickopolis/core';

import './CultureScreen.scss';

export interface CultureScreenprops {

}

export class CultureScreenBase extends React.Component<CultureScreenprops> {
    constructor(props:CultureScreenprops) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Culture'
                color={colors.get('culture')}
            >
            </Screen>
        );
    }
}

export const CultureScreen = connect(
    null,
    null
)(CultureScreenBase);
