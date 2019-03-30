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
                    positiveColor='goldenrold'
                    neutralColor='goldenrod'
                    iconHeight={'1.4rem'}
                    icon={'./images/cash.svg'}
                    description={`The total cash in your empire`}
                />
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
