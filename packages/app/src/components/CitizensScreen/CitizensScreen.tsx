import * as React from 'react';
import { connect } from 'react-redux';

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

    public render() {
        return (
            <Screen
                type='Citizens'
                color={colors.get('citizens')}
            >
                <div className='citizens-top-bar'>
                    <Indicator
                        value={`${this.getTotalEmployed()} / ${this.props.population}`}
                        neutralColor='#666'
                        description='Employment ratio'
                        className='citizens-employment'
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
                    //@ts-ignore: false positive?
                    amount={this.state.amount}
                />
                <div className='citizens-note'>
                    Each citizen produces 2 $, 2 R, 1 A, 1 P.<br/>
                    Each citizen also consumes 1 F PS
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
    null
)(CitizensScreenBase);
