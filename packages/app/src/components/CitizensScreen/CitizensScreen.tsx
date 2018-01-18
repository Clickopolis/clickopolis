import * as React from 'react';
import { connect } from 'react-redux';

export interface CitizensScreenProps {

}

export class CitizensScreenBase extends React.Component<CitizensScreenProps> {
    constructor(props:CitizensScreenProps) {
        super(props);
    }

    public render() {
        return <div />
    }
}

export const CitizensScreen = connect(
    null,
    null
)(CitizensScreenBase);
