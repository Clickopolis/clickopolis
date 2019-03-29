import * as React from 'react';
import { connect } from 'react-redux';
import { Screen, Indicator, Civilization } from '@clickopolis/core';
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
    return ((civ.happiness.base) + 
    (civ.happiness.fromBuildings || 0) +
    (civ.happiness.fromWonders || 0) +
    (civ.happiness.fromCitizens || 0) +
    (civ.happiness.fromResources || 0) +
    (civ.happiness.fromCultureBonuses || 0) +
    (civ.happiness.fromFaithBonuses || 0) +
    (civ.happiness.fromEvents || 0))
    * (civ.happiness.multiplier || 1)
}

export const calculateAnger = (civ: Civilization) => {
    return ((civ.anger.fromPopulation || 0) + (civ.anger.fromWar || 0) * (civ.anger.multiplier || 1))
}

export const calculateHealth = (civ: Civilization) => {
    return ((civ.health.base) + (civ.health.fromResources || 0) + (civ.health.fromBuildings || 0) * (civ.health.multiplier || 1))
}

export const calculatePollution = (civ: Civilization) => {
    return civ.pollution.fromPopulation
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
                        onClick={this.onClick('anger')}
                    />
                    <Indicator
                        value={calculateHealth(this.props.civilization)}
                        positiveColor='white'
                        neutralColor='white'
                        icon={'./images/health.svg'}
                        description={`Health`}
                        style={indicatorStyle}
                        onClick={this.onClick('health')}
                    />
                    <Indicator
                        value={0}
                        positiveColor='lightgreen'
                        neutralColor='lightgreen'
                        icon={'./images/pollution.svg'}
                        description={`Pollution`}
                        style={indicatorStyle}
                        onClick={this.onClick('pollution')}
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
                    <Indicator
                        value={this.props.civilization.research.total}
                        positiveColor='skyblue'
                        neutralColor='skyblue'
                        icon={'./images/research.svg'}
                        description={`The total science in your empire`}
                        style={indicatorStyle}
                        onClick={this.onClick('research')}
                    />
                    <Indicator
                        value={this.props.civilization.culture.total}
                        positiveColor='#ff006d'
                        neutralColor='#ff006d'
                        icon={'./images/culture.svg'}
                        description={`The total culture in your empire`}
                        style={indicatorStyle}
                        onClick={this.onClick('culture')}
                    />
                    <Indicator
                        value={this.props.civilization.faith.total}
                        positiveColor='#e5d48a'
                        neutralColor='#e5d48a'
                        icon={'./images/faith.svg'}
                        description={`The total faith in your empire`}
                        style={indicatorStyle}
                        onClick={this.onClick('faith')}
                    />
                </div>
                {this.state.selectedIndicator && <div className='civilization-indicator-breakdown' style={{
                    background: 'rgba(20, 20, 20, 0.8)',
                    color: 'white',
                    padding: '.25rem',
                    border: '1px solid #111',
                    borderRadius: '4px',
                    margin: '.5rem 1rem',
                }}>
                    <h4 style={{fontSize: '1.1rem', textAlign: 'center'}}>Indicator Breakdown</h4>
                    <ul style={{padding: '0 2rem'}}>
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
        const {civilization} = this.props

        // @ts-ignore
        const propMap: [keyof Civilization, any][] = Object.entries(civilization[selectedIndicator])
        console.log(propMap)
        return propMap.map(item => {
            return <li style={{marginBottom: '.25rem', listStyleType: 'none', fontSize: '.9rem', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 'bold'}}>{item[0]}</span><span>{item[1]}</span>
            </li>
        })
    }
}

export const CivilizationScreen = connect(
    (state:any) => ({ civilization: state.civilization }),
    null
)(CivilizationScreenBase as any);