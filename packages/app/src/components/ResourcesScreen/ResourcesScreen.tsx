import * as React from 'react';
import { connect } from 'react-redux';

export interface ResourcesScreenProps {

}

export class ResourcesScreenBase extends React.Component {
    constructor(props:ResourcesScreenProps) {
        super(props);
    }

    public render() {
        return (
            <section className='resources-screen'>
                'This is the resources screen'
            </section>
        );
    }
}

export const ResourcesScreen = connect(
    null,
    null
)(ResourcesScreenBase);