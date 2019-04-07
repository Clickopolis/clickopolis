import * as React from 'react';
import { Screen, Indicator } from '@clickopolis/core';
import { connect } from 'react-redux';

import { colors } from 'utils';

import './EconomyScreen.scss';
import { Civilization } from '@clickopolis/core'

export interface EconomyScreenProps {
    civilization: Civilization;
}

const totalCashStyle = {
    fontSize: '1.5rem',
    margin: '1rem',
    height: '2rem',
    display: 'flex',
    padding: '8px',
    alignItems: 'center',
    justifyContent: 'center',
}

export class EconomyScreenBase extends React.Component<EconomyScreenProps> {
    constructor(props:EconomyScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Economy'
                color={colors.get('economy')}
            >
                <Indicator
                    value={this.props.civilization.cash.total}
                    style={totalCashStyle}
                    positiveColor={colors.get('economy')}
                    neutralColor={colors.get('economy')}
                    negativeColor={colors.get('economy')}
                    iconHeight={'1.4rem'}
                    icon={'./images/cash.svg'}
                    description={`The total cash in your empire`}
                />

                <div style={{margin: '1rem'}}>
                    <h3 style={{color: colors.get('economy')}}>Trade Routes</h3>
                    <table style={{ background: '#666' }}>
                        <thead>
                            <td>Route To...</td>
                            <td>Bonuses</td>
                            <td>Minutes</td>
                        </thead>
                        <tbody>
                            <td>Azabar</td>
                            <td>+1 <img style={{height: '1rem'}} src='./images/cash.svg' /></td>
                            <td>3</td>
                        </tbody>
                    </table>
                </div>
            </Screen>
        );
    }
}

export const EconomyScreen: React.ComponentClass<{}> = connect(
    (state: any) => ({
        civilization: state.civilization,
    }),
    null
)(EconomyScreenBase);
