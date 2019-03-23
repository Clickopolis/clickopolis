import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore: importing core
import { Screen, Indicator, Civilization } from '@clickopolis/core';
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

export const calculateHappiness = (civ: Civilization) => {
    return ((civ.happinessBase) + 
    (civ.happinessFromBuildings || 0) +
    (civ.happinessFromWonders || 0) +
    (civ.happinessFromCitizens || 0) +
    (civ.happinessFromResources || 0) +
    (civ.happinessFromCultureBonuses || 0) +
    (civ.happinessFromFaithBonuses || 0) +
    (civ.happinessFromEvents || 0))
    * (civ.happinessFromMod || 1)
}

export const calculateAnger = (civ: Civilization) => {
    return ((civ.angerFromPopulation || 0) + (civ.angerFromWar || 0) * (civ.angerMod || 1))
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
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '1rem'
                }}>
                    <PopulationButton />
                    <Indicator
                        value={calculateHappiness(this.props.civilization)}
                        positiveColor='yellow'
                        neutralColor='yellow'
                        icon={'./images/happiness.svg'}
                        description='Keep your citizens happy with buildings and innovation.'
                        style={indicatorStyle}
                    />
                    <Indicator
                        value={calculateAnger(this.props.civilization)}
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