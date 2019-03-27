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
    selectedIndicator: any;
}

export const calculateHappiness = (civ: Civilization) => {
    return ((civ.happiness.happinessBase) + 
    (civ.happiness.happinessFromBuildings || 0) +
    (civ.happiness.happinessFromWonders || 0) +
    (civ.happiness.happinessFromCitizens || 0) +
    (civ.happiness.happinessFromResources || 0) +
    (civ.happiness.happinessFromCultureBonuses || 0) +
    (civ.happiness.happinessFromFaithBonuses || 0) +
    (civ.happiness.happinessFromEvents || 0))
    * (civ.happiness.happinessFromMod || 1)
}

export const calculateAnger = (civ: Civilization) => {
    return ((civ.angerFromPopulation || 0) + (civ.angerFromWar || 0) * (civ.angerMod || 1))
}

export class CivilizationScreenBase extends React.Component<CivilizationScreenProps, CivilizationScreenState> {
    state: CivilizationScreenState = {
        selectedIndicator: null,
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
                        onClick={this.onClick('happiness')}
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
                <div className='civilization-indicator' style={{
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '.5rem'
                }}>
                    <Indicator
                        value={this.props.civilization.cash.total}
                        positiveColor='goldenrold'
                        neutralColor='goldenrod'
                        icon={'./images/cash.svg'}
                        description={`The total cash in your empire`}
                        style={indicatorStyle}
                        onClick={this.onClick('cash')}
                    />
                </div>
                {this.state.selectedIndicator && <div className='civilization-indicator-breakdown' style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                }}>
                    <h4>Indicator Breakdown</h4>
                    <ul>
                        {this.renderIndicatorStats()}
                    </ul>
                </div>}
            </Screen>
        );
    }

    private onClick = (selectedIndicator: string) => () => {
        this.setState({
            selectedIndicator,
        })
    }

    private renderIndicatorStats = () => {
        const {selectedIndicator} = this.state

        const propMap = Object.entries(selectedIndicator)
        return propMap.map(item => {
            return <li>
                {item[0]}: {item[1]}
            </li>
        })
    }
}

export const CivilizationScreen = connect(
    (state:any) => ({ civilization: state.civilization }),
    null
)(CivilizationScreenBase as any);