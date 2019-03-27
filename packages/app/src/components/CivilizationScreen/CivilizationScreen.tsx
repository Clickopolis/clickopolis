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
    return ((civ.fromPopulation || 0) + (civ.fromWar || 0) * (civ.multiplier || 1))
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
                    background: 'rgba(20, 20, 20, 0.8)',
                    color: 'white',
                    padding: '.25rem',
                    border: '1px solid #111',
                    borderRadius: '4px',
                }}>
                    <h4 style={{fontSize: '1.1rem', textAlign: 'center'}}>Indicator Breakdown</h4>
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
        const {civilization} = this.props

        // @ts-ignore
        const propMap: [keyof Civilization, any][] = Object.entries(civilization[selectedIndicator])
        console.log(propMap)
        return propMap.map(item => {
            return <li style={{listItemType: 'none', fontSize: '.9rem', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: 'bold'}}>{item[0]}</span><span>{item[1]}</span>
            </li>
        })
    }
}

export const CivilizationScreen = connect(
    (state:any) => ({ civilization: state.civilization }),
    null
)(CivilizationScreenBase as any);