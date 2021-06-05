import * as React from 'react';
import { connect } from 'react-redux';

// @ts-ignore: importing core
import { Screen, Indicator, Citizen, Resource } from '@clickopolis/core';
import { CitizensList } from '../CitizensList';
import { colors } from 'utils';

import './CitizensScreen.scss';

export interface CitizensScreenProps {
    population?: number;
    food?: Resource;
    production?: Resource;
    citizens?: Citizen[];
}

export interface CitizenScreenState {
    amount?: number;
}

export class CitizensScreenBase extends React.Component<CitizensScreenProps, CitizenScreenState> {
    constructor(props:CitizensScreenProps) {
        super(props);
        this.state = {
            amount: 1
        };
    }

    private onChange = (e:any) => this.setState({ amount: e.target.value || 0 });

    private getTotalEmployed () {
        return this.props.citizens.map(c => c.amount).reduce((prev, curr) => {
            return prev + curr;
        }, 0);
    }

    private getEmploymentRatio () {
        return this.getTotalEmployed() / this.props.population;
    }

    public render() {
        return (
            <Screen
                type='Citizens'
                style={{position: 'relative'}}
                color={colors.get('citizens')}
                infoComponent={<div style={{
                    position: 'absolute',
                    top: '5rem',
                    left: '4rem',
                    width: 'calc(100% - 8rem)',
                    height: 'calc(100% - 10rem)',
                    background: '#222',
                    boxShadow: '0 0 2rem rgba(0, 0, 0, 0.6)',
                    border: '1px solid #111',
                    padding: '1rem',
                    color: '#fff',
                }}>
                    <div>Here's some info</div>
                </div>}
            >
                <div className='citizens-top-bar' style={{height: '64px'}}>
                    <Indicator
                        value={`${this.getTotalEmployed()} / ${this.props.population}`}
                        neutralColor='#666'
                        description='Employment ratio'
                        className={`citizens-employment`}
                        style={{
                            background: this.getEmploymentRatio() >= 1 ? 'lightgreen' : 'tomato'
                        }}
                        label={this.getEmploymentRatio() >= 1 ? null : 'unemployment!'}
                    />
                    <span className='citizens-amount-text'>Citizens Amount</span>
                    <input
                        type='number'
                        value={this.state.amount}
                        onChange={this.onChange}
                        step={1}
                        min={1}
                        className='citizens-input'
                    />
                </div>
                <div className='citizens-top-bar' style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Indicator
                        value={this.props.food.perSecond}
                        positiveColor={colors.get('resources')}
                        neutralColor={colors.get('resources')}
                        negativeColor={colors.get('negative')}
                        label={'food/s'}
                        style={{margin: '0 .5rem'}}
                        formatFunction={(v:number) => v.toFixed(1)}
                    />
                    <Indicator
                        value={this.props.production.perSecond}
                        positiveColor={colors.get('production')}
                        neutralColor={colors.get('production')}
                        negativeColor={colors.get('negative')}
                        label={'prod/s'}
                        style={{margin: '0.5rem'}}
                        formatFunction={(v:number) => v.toFixed(1)}
                    />
                </div>
                <CitizensList
                    amount={this.state.amount}
                />
                <div className='citizens-note'>
                    Each citizen produces 1 <img className='tiny-image' src='./images/cash.svg' />/min, .25 <img className='tiny-image' src='./images/research.svg' />/min, 1 <img className='tiny-image' src='./images/anger.svg' />, and 1 <img className='tiny-image' src='./images/pollution.svg' />.<br/>
                    Each citizen also consumes 1 <img className='tiny-image' src='./images/food.svg' />PS
                </div>
            </Screen>
        );
    }
}

export const CitizensScreen = connect(
    (state:any) => ({
        population: state.civilization.population,
        food: state.food,
        production: state.production,
        citizens: [
            state.ruler,
            state.farmer,
            state.miner,
            state.soldier,
            state.merchant,
        ]
    }),
)(CitizensScreenBase as any);
