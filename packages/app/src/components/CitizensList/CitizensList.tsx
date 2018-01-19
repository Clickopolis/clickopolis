import * as React from 'react';
import { connect } from 'react-redux';

import './CitizensList.scss';

export interface CitizensListProps {

}

export class CitizensListBase extends React.Component<CitizensListProps> {
    constructor(props:CitizensListProps) {
        super(props);
    }

    public render() {
        return <div />;
    }
}

export const CitizensList = connect(
    null,
    null
)(CitizensListBase);
