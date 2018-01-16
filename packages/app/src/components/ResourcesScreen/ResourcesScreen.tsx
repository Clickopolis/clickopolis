import * as React from 'react';
import { connect } from 'react-redux';
import { Screen } from '../../../../core';
//@ts-ignore: no @types def
import * as classNames from 'classnames';

import './ResourcesScreen.scss';

export interface ResourcesScreenProps {

}

export class ResourcesScreenBase extends React.Component {
    constructor(props:ResourcesScreenProps) {
        super(props);
    }

    public render() {
        return (
            <Screen
                type='Resources'
                color='#1edb50'
            >
                <p></p>
            </Screen>
        );
    }
}

export const ResourcesScreen = connect(
    () => ({}),
    {}
)(ResourcesScreenBase);