import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Button, Indicator, Civilization } from '@clickopolis/core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import { PopulationButton } from '../PopulationButton';
import { colors } from 'utils';

import './CivilizationScreen.scss';

const indicatorStyle = {
    margin: '.25rem',
    minWidth: '5rem'
};

export interface CivilizationScreenProps {
    civilization?: Civilization;
    growPopulation?: Function;
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
                    display: 'flex',
                    marginTop: '1rem'
                }}>
                    <PopulationButton />
                    <Indicator
                        value={this.props.civilization.happiness}
                        positiveColor='yellow'
                        neutralColor='yellow'
                        icon={'./images/happiness.svg'}
                        description='Keep your citizens happy with buildings and innovation.'
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={this.props.civilization.anger}
                        positiveColor='red'
                        neutralColor='red'
                        icon={'./images/anger.svg'}
                        description={`Don't make your citizens angrier`}
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={this.props.civilization.health}
                        positiveColor='white'
                        neutralColor='white'
                        icon={'./images/health.svg'}
                        description={`Health`}
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={this.props.civilization.pollution}
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
    (state:any) => ({ civilization: state.civilization }),
    null
)(CivilizationScreenBase as any);