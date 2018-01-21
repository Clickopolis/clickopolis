import * as React from 'react';
import { connect } from 'react-redux';

import { Screen, Button, Indicator } from '../../../../core';
import { CitizensList } from '../CitizensList';
import { colors } from 'utils';

import './CitizensScreen.scss';

export interface CitizensScreenProps {
    population: number;
}

export class CitizensScreenBase extends React.Component<CitizensScreenProps, { amount: number }> {
    constructor(props:CitizensScreenProps) {
        super(props);
        this.state = {
            amount: 1
        };
    }

    private onChange = (e:any) => this.setState({ amount: e.target.value });

    public render() {
        return (
            <Screen
                type='Citizens'
                color={colors.get('citizens')}
            >
                <div className='citizens-top-bar'>
                    <Indicator
                        value={this.props.population}
                        neutralColor='#666'
                    />
                    <input
                        type='number'
                        value={this.state.amount}
                        onChange={this.onChange}
                        min={1}
                    />
                </div>
                <CitizensList
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
        population: state.civilization.population
    }),
    null
)(CitizensScreenBase);
