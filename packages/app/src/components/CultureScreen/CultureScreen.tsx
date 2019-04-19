import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
// @ts-ignore: importing core
import { Screen, Button, Indicator, Civilization } from '@clickopolis/core';

import './CultureScreen.scss';

export interface CultureScreenprops {
    culture?: Civilization['culture'];
}

export class CultureScreenBase extends React.Component<CultureScreenprops> {
    constructor(props:CultureScreenprops) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Culture'
                color={colors.get('culture')}
            >
                <Indicator
                    value={this.props.culture.total}
                    positiveColor='#ff006d'
                    neutralColor='#ff006d'
                    icon={'./images/culture.svg'}
                    description={`The total culture in your empire`}
                />
            </Screen>
        );
    }
}

export const CultureScreen = connect(
    (state: any) => ({ culture: state.civilization.culture }),
    null
)(CultureScreenBase as any);
