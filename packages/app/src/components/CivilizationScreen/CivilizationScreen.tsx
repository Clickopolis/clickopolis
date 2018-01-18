import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { colors } from 'utils';

import './CivilizationScreen.scss';

const indicatorStyle = {
    margin: '.25rem',
    minWidth: '5rem'
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
                <div className='civilization-indicator' style={{
                    display: 'flex'
                }}>
                    <Indicator
                        value={'Population: 62'}
                        neutralColor='tan'
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={62}
                        positiveColor='yellow'
                        neutralColor='yellow'
                        icon={'./images/happiness.svg'}
                        description='Keep your citizens happy with buildings and innovation.'
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={0}
                        positiveColor='red'
                        neutralColor='red'
                        icon={'./images/anger.svg'}
                        description={`Don't make your citizens angrier`}
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={0}
                        positiveColor='white'
                        neutralColor='white'
                        icon={'./images/health.svg'}
                        description={`Health`}
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={0}
                        positiveColor='lightgreen'
                        neutralColor='lightgreen'
                        icon={'./images/pollution.svg'}
                        description={`Pollution`}
                        style={indicatorStyle}
                    />
                </div>
            </Screen>
        );
    }
}

export const CivilizationScreen = connect(
    () => ({}),
    {}
)(CivilizationScreenBase);