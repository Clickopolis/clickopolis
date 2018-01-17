import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { colors } from 'utils';

import './CivilizationScreen.scss';

const indicatorStyle = {
    height: '1.25rem',
    width: '5rem'
};

export interface CivilizationScreenProps {

}

export interface CivilizationScreenState {
}

export class CivilizationScreenBase extends React.Component<CivilizationScreenProps, CivilizationScreenState> {
    constructor(props:CivilizationScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Civilization'
                color={colors.get('civilization')}
            >
                <Indicator
                    value={'Population: 62'}
                    neutralColor='tan'
                />
                <Indicator
                    value={62}
                    positiveColor='yellow'
                    neutralColor='yellow'
                    icon={'./images/happiness.svg'}
                    description='Keep your citizens happy with buildings and innovation.'
                />
                <Indicator
                    value={0}
                    positiveColor='red'
                    neutralColor='red'
                    icon={'./images/anger.svg'}
                    description={`Don't make your citizens angrier`}
                />
            </Screen>
        );
    }
}

export const CivilizationScreen = connect(
    () => ({}),
    {}
)(CivilizationScreenBase);