import * as React from 'react';
import { Screen, Indicator, Resource } from '@clickopolis/core';
import { connect } from 'react-redux';
import { colors, Era } from 'utils';
import { purchaseBuilding } from 'actions';

import { Civilization } from '@clickopolis/core'

import './BuildingsScreen.scss';

export interface BuildingScreenProps {
    civilization: Civilization;
    buildings: Building[];
    production: Resource;
    purchaseBuilding: typeof purchaseBuilding;
}

export interface Building {
    name: string;
    era: Era;
    cost: number;
    landCost?: number;
    unlocked: boolean;
    requirements: string[];
    total: number;
    results: {icon?: string, description: string}[];
}

export const BuildingsDisplay = (build: Building & {disabled: boolean} & {purchaseBuilding: typeof purchaseBuilding}) => {
    return (
        <div className='building'
            onClick={e => {console.log(e); build.purchaseBuilding(build)}}
        style={{
            background: colors.get('buildings'),
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '.25rem',
            margin: '.25rem',
            border: '1px solid rgba(0, 0, 0, 0.8)',
            borderRadius: '.25rem',
            position: 'relative',
            filter: build.unlocked ? undefined : 'grayscale(85%)',
            pointerEvents: (build.disabled || !build.unlocked) ? 'none' : undefined,
            opacity: build.disabled ? 0.8 : undefined,
        }}>
            {build.requirements.length ?
                <div className='advancement-requirements' style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '25%',
                    width: '50%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '.5rem',
                    textAlign: 'center',
                    zIndex: 1,
                    opactiy: 1,
                }}>
                    Requirements: {build.requirements.join(', ')}
                </div>
                : null
            }
            <div className='advancement-icon' style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img style={{height: '3rem', margin: '.25rem'}} src={`./images/buildings/${
                    build.name.toLowerCase().replace(/\s/, '-')
                }.svg`} />
                <Indicator
                    description={`Total ${build.name} owned`}
                    style={{background: 'transparent'}}
                    value={build.total}
                />
            </div>
            <div className='advancement-info' style={{
                width: '-webkit-fill-available',
                maxHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <div style={{ textAlign: 'center' }} className='advancement-name'>{build.name}</div>
                {<ul style={{ fontSize: '12px', display: 'flex', listStyleType: 'none', }}>
                    {build.results.map(res => (
                        <li key={res.description} style={{
                            background: '#222',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '.5rem',
                            padding: '.5rem',
                            margin: '0 .25rem',
                        }}>
                            <img style={{height: '.75rem', margin: '0 .25rem'}} src={`./images/${res.icon}.svg`} /> {res.description}
                        </li>
                    ))
                }
                </ul>}
            </div>
            {<div className='advancement-cost' style={{
                background: 'rgba(0, 0, 0, 0.33)',
                color: 'white',
                padding: '1rem',
                textAlign: 'center',
                width: '33%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Indicator
                    value={build.cost}
                    icon={'./images/production.svg'}
                    style={{marginBottom: '.25rem'}}
                    description={`Production cost`}
                />
                <Indicator
                    value={build.landCost}
                    positiveColor={colors.get('land')}
                    neutralColor={colors.get('land')}
                    icon={'./images/land.svg'}
                    description={`Land cost`}
                />
            </div>}
        </div>
    )
}

export class BuildingsScreenBase extends React.Component<BuildingScreenProps> {
    constructor(props:BuildingScreenProps) {
        super(props);
    }

    public render() {
        const {buildings, production} = this.props

        return (
            <Screen
                type='Buildings'
                color={colors.get('buildings')}
            >
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Indicator
                        value={this.props.production.total}
                        positiveColor={colors.get('buildings')}
                        negativeColor={colors.get('buildings')}
                        neutralColor={colors.get('buildings')}
                        style={{margin: '.25rem', width: '200px'}}
                        icon={'./images/production.svg'}
                    />

                    <Indicator
                        value={`2555 km`}
                        positiveColor={colors.get('land')}
                        neutralColor={colors.get('land')}
                        icon={'./images/land.svg'}
                        style={{margin: '.25rem', width: '200px'}}
                        description={`The total land in your empire`}
                    />
                </div>

                {buildings.map(build => <BuildingsDisplay
                    purchaseBuilding={this.props.purchaseBuilding}
                    disabled={build.cost > production.total}
                    key={build.name}
                    {...build}
                />)}
            </Screen>
        );
    }
}

export const BuildingsScreen: React.ComponentClass<{}> = connect(
    (state: any) => ({
        civilization: state.civilization,
        production: state.production,
        buildings: state.buildings,
    }),
    {
        purchaseBuilding,
    }
)(BuildingsScreenBase as any);
