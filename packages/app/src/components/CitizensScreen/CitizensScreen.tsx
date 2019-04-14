import * as React from 'react';
import { connect } from 'react-redux';

// @ts-ignore: importing core
import { Screen, Indicator, Citizen } from '@clickopolis/core';
import { CitizensList } from '../CitizensList';
import { colors } from 'utils';

import './CitizensScreen.scss';

export interface CitizensScreenProps {
    population?: number;
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

    private onChange = (e:any) => this.setState({ amount: e.target.value });

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
                    top: '4rem',
                    left: '4rem',
                    width: 'calc(100% - 8rem)',
                    height: 'calc(100% - 8rem)',
                    background: 'rgba(0, 0, 0, 0.9)',
                    padding: '1rem',
                    color: '#fff',
                }}>
                    <div>Here's some info</div>
                </div>}
            >
                <div className='citizens-top-bar'>
                    <Indicator
                        value={`${this.getTotalEmployed()} / ${this.props.population}`}
                        neutralColor='#666'
                        description='Employment ratio'
                        className={`citizens-employment`}
                        style={{
                            background: this.getEmploymentRatio() >= 1 ? 'lightgreen' : 'tomato'
                        }}
                    />
                    <span className='citizens-amount-text'>Citizens Amount</span>
                    <input
                        type='number'
                        value={this.state.amount}
                        onChange={this.onChange}
                        min={1}
                        className='citizens-input'
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
        citizens: [
            state.ruler,
            state.farmer,
            state.miner,
        ]
    }),
)(CitizensScreenBase as any);
