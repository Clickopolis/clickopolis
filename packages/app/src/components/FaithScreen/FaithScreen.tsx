import * as React from 'react';
import { connect } from 'react-redux';

import { colors } from 'utils';
import { Screen, Indicator, Civilization } from '@clickopolis/core';

export interface FaithScreenprops {
    faith?: Civilization['faith'];
}

export class FaithScreenBase extends React.Component<FaithScreenprops> {
    constructor(props:FaithScreenprops) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Faith'
                color={colors.get('faith')}
            >
                <Indicator
                    value={this.props.faith.total}
                    positiveColor={colors.get('faith')}
                    neutralColor={colors.get('faith')}
                    icon={'./images/faith.svg'}
                    description={`The total faith in your empire`}
                />
            </Screen>
        );
    }
}

export const FaithScreen = connect(
    (state: any) => ({ Faith: state.civilization.faith }),
    null
)(FaithScreenBase as any);
