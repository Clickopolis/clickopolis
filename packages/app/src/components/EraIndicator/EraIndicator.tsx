import * as React from 'react';
import { connect } from 'react-redux';

// @ts-ignore: importing core
import { Indicator } from '@clickopolis/core';
import { Era, getEraString } from 'utils';

import './EraIndicator.scss';

export interface EraIndicatorProps {
    era?: Era;
}

export class EraIndicatorBase extends React.Component<EraIndicatorProps> {
    constructor(props:EraIndicatorProps) {
        super(props);
    }

    public render() {
        return (
            <Indicator
                value={`${getEraString(this.props.era)} Era`}
                description={`Huts, mammoths, early life expectancy -- can't get much better!`}
                neutralColor='#444'
                style={ { margin: '0 .33rem' }}
            />
        );
    }
}

export const EraIndicator = connect(
    (state:any) => ({ era: state.era }),
    null
)(EraIndicatorBase);
