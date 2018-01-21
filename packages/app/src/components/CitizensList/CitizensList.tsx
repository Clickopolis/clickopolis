import * as React from 'react';
import { connect } from 'react-redux';

import './CitizensList.scss';

export interface CitizensListProps {

}

export class CitizensListBase extends React.Component<CitizensListProps> {
    constructor(props:CitizensListProps) {
        super(props);
    }

    private renderCitizens() {

    }

    public render() {
        return (
            <div className='citizens-list-wrapper'>
                <div className='citizens-list-bar'></div>
                <div className='citizens-list'>

                </div>
            </div>
        );
    }
}

export const CitizensList = connect(
    null,
    null
)(CitizensListBase);
